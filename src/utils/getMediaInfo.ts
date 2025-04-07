export const getMediaInfo = (mediaFile?: File) => {
  let mediaUrl = "";
  let mediaType: "image" | "video" | undefined = undefined;

  if (mediaFile) {
    mediaUrl = URL.createObjectURL(mediaFile);
    if (mediaFile.type.startsWith("image")) mediaType = "image";
    if (mediaFile.type.startsWith("video")) mediaType = "video";
  }

  return {mediaUrl, mediaType};
};
