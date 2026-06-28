import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SettingsItem from "../../components/SettingsItem";
import { clearHistory } from "../../services/history";

export default function SettingsScreen() {

  async function handleClearHistory() {
    Alert.alert(
      "Clear History",
      "Delete all generated images history?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            await clearHistory();

            Alert.alert(
              "Success",
              "History cleared."
            );
          },
        },
      ]
    );
  }

  return (
  <SafeAreaView style={styles.container} edges={["top"]}>
    <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>⚙️ Settings</Text>

      <SettingsItem
        icon="information-circle"
        title="Version"
        subtitle="1.0.0"
      />

      <SettingsItem
        icon="person-circle"
        title="Developer"
        subtitle="Ayush More"
      />

      <SettingsItem
        icon="trash"
        title="Clear History"
        danger
        onPress={handleClearHistory}
      />

      <SettingsItem
        icon="share-social"
        title="Share App"
        subtitle="Share DreamCanvas with friends"
      />

      <SettingsItem
        icon="star"
        title="Rate App"
        subtitle="Coming Soon"
      />

      <SettingsItem
        icon="information-circle-outline"
        title="About DreamCanvas"
        subtitle="AI Image Generator using Gemini"
      />
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
    paddingBottom: 40,
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 25,
  },
});