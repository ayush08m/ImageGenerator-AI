import { Stack, useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import {
    ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import GenerateButton from "../components/GenerateButton";
import { shareImage } from "../utils/share";
import { SafeAreaView } from "react-native-safe-area-context";
import { downloadImage } from "../utils/download";

export default function Preview() {
  const { image, prompt, style, createdAt } =
    useLocalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{
          title: "Preview",
          headerShown: true,
        }}
      />

      <SafeAreaView style={styles.container}>
        <ScrollView  contentContainerStyle={styles.content}
    showsVerticalScrollIndicator={false} >
       <Image
  source={image as string}
  style={styles.image}
  contentFit="contain"
  transition={300}
  cachePolicy="memory-disk"
/>

        <View style={styles.card}>
          <Text style={styles.heading}>Prompt</Text>

          <Text style={styles.text}>
            {prompt}
          </Text>

          <Text style={styles.heading}>
            Style
          </Text>

          <Text style={styles.text}>
            {style}
          </Text>

          <Text style={styles.date}>
            {createdAt}
          </Text>
        </View>
        <GenerateButton
  title="📤 Share Image"
  loading={false}
  onPress={() => shareImage(image as string)}
/>
        <GenerateButton
  title="💾 Download Image"
  loading={false}
  onPress={() => downloadImage(image as string)}
/>
</ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  content: {
  paddingBottom: 30,
},

  image: {
    width: "100%",
    height: 260,
  },

  card: {
    margin: 20,
    padding: 20,
    borderRadius: 18,
    backgroundColor: "#1E293B",
  },

  heading: {
    color: "#3B82F6",
    fontSize: 17,
    fontWeight: "700",
    marginTop: 10,
  },

  text: {
    color: "#FFFFFF",
    marginTop: 5,
    lineHeight: 22,
  },

  date: {
    color: "#94A3B8",
    marginTop: 20,
  },
});