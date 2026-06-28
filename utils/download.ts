import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system/legacy";
import { Alert } from "react-native";

export async function downloadImage(imageUrl: string) {
  try {
    const permission =
      await MediaLibrary.requestPermissionsAsync(false);

    if (permission.status !== "granted") {
      Alert.alert(
        "Permission Required",
        "Storage permission is required."
      );
      return;
    }

    const fileUri =
      FileSystem.cacheDirectory +
      `dreamcanvas_${Date.now()}.png`;

    const downloaded =
      await FileSystem.downloadAsync(
        imageUrl,
        fileUri
      );

    await MediaLibrary.saveToLibraryAsync(
      downloaded.uri
    );

    Alert.alert(
      "Success",
      "Image saved to Gallery 🎉"
    );
  } catch (error) {
    console.log(error);
    Alert.alert(
      "Error",
      "Failed to save image."
    );
  }
}