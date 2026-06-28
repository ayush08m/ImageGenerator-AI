import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";

import Header from "../../components/Header";
import PromptInput from "../../components/PromptInput";
import StyleSelector from "../../components/StyleSelector";
import GenerateButton from "../../components/GenerateButton";
import ImageCard from "../../components/ImageCard";
import Loading from "../../components/Loading";
import EmptyState from "../../components/EmptyState";
import { improvePrompt } from "../../services/gemini";
import { generateImage } from "../../services/ai";
import { saveHistory } from "../../services/history";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Realistic");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [improving, setImproving] = useState(false);

  async function handleImprovePrompt() {
  if (!prompt.trim()) return;

  try {
    setImproving(true);

    const improved = await improvePrompt(prompt);

    setPrompt(improved);
  } catch (error) {
    console.log(error);
    Alert.alert(
      "Error",
      "Unable to improve prompt."
    );
  } finally {
    setImproving(false);
  }
}

  async function handleGenerate() {
    if (!prompt.trim()) {
      Alert.alert("Prompt Required", "Please enter a prompt.");
      return;
    }

    try {
      setLoading(true);

      const finalPrompt = `${prompt}, ${style} style
      Highly detailed
      Ultra realistic
      Professional Lighting
      8K Resolution`;

      const result = await generateImage(finalPrompt);
      console.log(result.imageUrl);
      setImage(result.imageUrl);
      await saveHistory({
  id: Date.now().toString(),
  prompt,
  style,
  image: result.imageUrl,
  createdAt: new Date().toISOString(),
});
    } catch (error) {
      Alert.alert("Error", "Failed to generate image.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Header />

        <PromptInput
          value={prompt}
          onChangeText={setPrompt}
        />
        <GenerateButton
  title={
    improving
      ? "Improving..."
      : "✨ Improve Prompt"
  }
  loading={improving}
  onPress={handleImprovePrompt}
/>

        <StyleSelector
          selectedStyle={style}
          onSelect={setStyle}
        />

 <GenerateButton
  title="Generate Image"
  loading={loading}
  onPress={handleGenerate}
/>

        {loading ? (
          <Loading />
        ) : image ? (
          <ImageCard key={image} image={image} prompt={prompt}
  style={style}/>
        ) : (
          <EmptyState />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },

  content: {
    padding: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },
});