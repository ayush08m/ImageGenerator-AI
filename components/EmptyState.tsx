import { StyleSheet, Text, View } from "react-native";

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎨</Text>

      <Text style={styles.title}>
        No Image Yet
      </Text>

      <Text style={styles.subtitle}>
        Enter a prompt and generate your first AI image.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignItems: "center",
  },

  emoji: {
    fontSize: 70,
  },

  title: {
    marginTop: 15,
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 10,
    color: "#94A3B8",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});