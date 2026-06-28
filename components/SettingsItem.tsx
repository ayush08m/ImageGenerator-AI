import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  danger?: boolean;
};

export default function SettingsItem({
  icon,
  title,
  subtitle,
  onPress,
  danger = false,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.left}>
        <Ionicons
          name={icon}
          size={24}
          color={danger ? "#EF4444" : "#3B82F6"}
        />

        <View style={{ marginLeft: 15 }}>
          <Text
            style={[
              styles.title,
              danger && { color: "#EF4444" },
            ]}
          >
            {title}
          </Text>

          {subtitle && (
            <Text style={styles.subtitle}>
              {subtitle}
            </Text>
          )}
        </View>
      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color="#94A3B8"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E293B",
    borderRadius: 16,
    padding: 18,
    marginBottom: 15,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  subtitle: {
    color: "#94A3B8",
    marginTop: 4,
    fontSize: 13,
  },
});