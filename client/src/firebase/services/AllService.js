import { storage } from "..";

import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  getStorage,
  deleteObject,
} from "firebase/storage";

// upload file with link
export const uploadFileWithlink = async (file) => {
  const data = await uploadBytesResumable(ref(storage, file.name), file);
  const photourl = await getDownloadURL(data.ref);

  return photourl;
};

// delete file
export const deleteFile = (link) => {
  const storage = getStorage();

  // Create a reference to the file to delete
  const desertRef = ref(storage, link);

  // Delete the file
  deleteObject(desertRef)
    .then(() => {
      // File deleted successfully
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
    });
};

export function categorizeFileType(fileName) {
  const photoExtensions = ["jpg", "png", "gif"]; // Add more photo extensions
  const musicExtensions = ["mp3", "wav", "ogg"]; // Add more music extensions
  const videoExtensions = ["mp4", "avi", "mov", "mkv"]; // Add more video extensions
  const documentExtensions = ["pdf", "docx", "txt", "xls"]; // Add more document extensions

  const fileExtension = fileName.split(".").pop().toLowerCase();

  if (photoExtensions.includes(fileExtension)) {
    return "picture";
  } else if (musicExtensions.includes(fileExtension)) {
    return "music";
  } else if (videoExtensions.includes(fileExtension)) {
    return "video";
  } else if (documentExtensions.includes(fileExtension)) {
    return "document";
  } else {
    return "unknown";
  }
}
