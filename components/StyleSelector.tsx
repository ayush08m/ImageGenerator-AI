import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const stylesData = [
  "Realistic",
  "Anime",
  "3D",
  "Cartoon",
  "Fantasy",
  "Cyberpunk",
];

type Props = {
  selectedStyle: string;
  onSelect: (style: string) => void;
};

export default function StyleSelector({
  selectedStyle,
  onSelect,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose Style</Text>

      <View style={styles.wrapper}>
        {stylesData.map((style) => (
          <TouchableOpacity
            key={style}
            onPress={() => onSelect(style)}
            style={[
              styles.chip,
              selectedStyle === style && styles.selectedChip,
            ]}
          >
            <Text
              style={[
                styles.chipText,
                selectedStyle === style && styles.selectedText,
              ]}
            >
              {style}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  heading: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },

  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  chip: {
    backgroundColor: "#1E293B",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 30,
  },

  selectedChip: {
    backgroundColor: "#2563EB",
  },

  chipText: {
    color: "#FFFFFF",
  },

  selectedText: {
    fontWeight: "700",
  },
});