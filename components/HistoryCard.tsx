import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { HistoryItem } from "../services/history";
import { Image } from "expo-image";
import { deleteHistoryItem } from "../services/history";
import { Ionicons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
type Props = {
  item: HistoryItem;
  onDelete: () => void;
};

export default function HistoryCard({ item, onDelete }: Props) {
  const router = useRouter();

  async function handleDelete() {
  Alert.alert(
    "Delete Image",
    "Are you sure you want to delete this image?",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          await deleteHistoryItem(item.id);
          onDelete();
        },
      },
    ]
  );
}
const renderRightActions = () => {
  return (
   <Swipeable
    renderRightActions={(progress, dragX) =>
  renderRightActions()
}
  >
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={() =>
        router.push({
          pathname: "/preview",
          params: {
            image: item.image,
            prompt: item.prompt,
            style: item.style,
            createdAt: item.createdAt,
          },
        })
      }
    >
      <Ionicons
        name="trash"
        size={30}
        color="white"
      />

      <Text style={styles.deleteLabel}>
        Delete
      </Text>
    </TouchableOpacity>
    </Swipeable>
  );
};
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={() =>
        router.push({
          pathname: "/preview",
          params: {
            image: item.image,
            prompt: item.prompt,
    style: item.style,
    createdAt: item.createdAt,
          },
        })
      }
    >
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.info}>
  <Text style={styles.prompt} numberOfLines={2}>
    {item.prompt}
  </Text>

  <Text style={styles.style}>
    🎨 {item.style}
  </Text>

  <Text style={styles.date}>
    {new Date(item.createdAt).toLocaleString()}
  </Text>

  <TouchableOpacity
    style={styles.deleteButton}
    onPress={handleDelete}
  >
    <Ionicons
      name="trash"
      size={20}
      color="white"
    />

    <Text style={styles.deleteText}>
      Delete
    </Text>
  </TouchableOpacity>
</View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#1E293B",
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
  },
  deleteButton: {
  marginTop: 10,
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#EF4444",
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderRadius: 10,
  alignSelf: "flex-start",
},

deleteText: {
  color: "white",
  marginLeft: 6,
  fontWeight: "600",
},

  image: {
    width: 100,
    height: 100,
  },

  info: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },

  prompt: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },

  style: {
    color: "#60A5FA",
    fontSize: 14,
  },

  date: {
    color: "#94A3B8",
    fontSize: 12,
  },
  deleteAction: {
  backgroundColor: "#EF4444",
  justifyContent: "center",
  alignItems: "center",
  width: 90,
  marginBottom: 16,
  borderRadius: 16,
},

deleteLabel: {
  color: "white",
  marginTop: 6,
  fontWeight: "700",
},
});