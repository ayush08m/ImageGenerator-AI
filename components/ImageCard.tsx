import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Image } from "expo-image";
type Props = {
  image: string;
  prompt: string;
  style: string;
};

export default function ImageCard({ image, prompt, style }: Props) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generated Image</Text>

      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          router.push({
            pathname: "/preview",
  params: {
    image,
    prompt,
    style,
    createdAt: new Date().toISOString(),
  },
          })
        }
      >
      <Image
  source={image as string}
  style={styles.image}
  contentFit="contain"
  transition={300}
  cachePolicy="memory-disk"
/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },

  image: {
    width: "100%",
    height: 350,
    borderRadius: 18,
    backgroundColor: "#1E293B",
  },
});