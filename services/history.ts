import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "AI_IMAGE_HISTORY";

export type HistoryItem = {
  id: string;
  prompt: string;
  style: string;
  image: string;
  createdAt: string;
};

export async function saveHistory(item: HistoryItem) {
  const oldHistory = await getHistory();

  oldHistory.unshift(item);

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(oldHistory)
  );
}

export async function getHistory(): Promise<HistoryItem[]> {
  const data = await AsyncStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  return JSON.parse(data);
}

export async function clearHistory() {
  await AsyncStorage.removeItem(STORAGE_KEY);
}

export async function deleteHistoryItem(id: string) {
  const history = await getHistory();

  const updatedHistory = history.filter(
    (item) => item.id !== id
  );

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedHistory)
  );
}