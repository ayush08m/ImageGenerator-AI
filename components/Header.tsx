import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🎨</Text>

      <Text style={styles.title}>
        Ai Image Generator
      </Text>

      <Text style={styles.subtitle}>
        Create stunning AI artwork
        {"\n"}
        from your imagination
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 30,
  },

  logo: {
    fontSize: 55,
  },

  title: {
    marginTop: 10,
    fontSize: 34,
    fontWeight: "700",
    color: "#fff",
  },

  subtitle: {
    marginTop: 8,
    color: "#94A3B8",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },
});