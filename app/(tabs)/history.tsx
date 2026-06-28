import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

import {
  getHistory,
  HistoryItem,
} from "../../services/history";

import HistoryCard from "../../components/HistoryCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HistoryScreen() {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  async function loadHistory() {
  const data = await getHistory();
  setHistory(data);
}

useFocusEffect(
  useCallback(() => {
    loadHistory();
  }, [])
);
  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Recent Creations
      </Text>

      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HistoryCard
  item={item}
  onDelete={loadHistory}
/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No images generated yet.
          </Text>
        }
      />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },

  empty: {
    color: "#94A3B8",
    textAlign: "center",
    marginTop: 80,
    fontSize: 16,
  },
});