import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function PromptInput({
  value,
  onChangeText,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Describe your imagination
      </Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="A futuristic city floating above the clouds..."
        placeholderTextColor="#64748B"
        multiline
        style={styles.input}
      />

      <Text style={styles.counter}>
        {value.length}/500
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  button: {
    backgroundColor:"#2563EB",
    paddingVertical:18,
    borderRadius:18,
    elevation:5
},

  label: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 10,
  },

  input: {
    minHeight: 140,
    backgroundColor: "#1E293B",
    borderRadius: 18,
    padding: 18,
    color: "#fff",
    fontSize: 16,
    textAlignVertical: "top",
  },

  counter: {
    marginTop: 8,
    alignSelf: "flex-end",
    color: "#64748B",
  },
});