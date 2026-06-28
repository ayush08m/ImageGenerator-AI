import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#2563EB" />

      <Text style={styles.text}>
        Creating your masterpiece...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    alignItems: "center",
  },

  text: {
    marginTop: 12,
    color: "#94A3B8",
    fontSize: 16,
  },
});