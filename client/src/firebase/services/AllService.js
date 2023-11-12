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
