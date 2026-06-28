import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system/legacy";

export async function shareImage(url: string) {
  const path =
    FileSystem.cacheDirectory +
    `image_${Date.now()}.png`;

  const downloaded =
    await FileSystem.downloadAsync(url, path);

  await Sharing.shareAsync(downloaded.uri);
}