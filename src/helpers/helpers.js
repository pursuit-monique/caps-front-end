import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../firebase/firebase";

export default async function uploadImage(image) {
  if (!image) {
    alert("Please select an image");
    return;
  }
  const storageRef = ref(storage, `images/${image.name + v4()}`);

  try {
    const snapshot = await uploadBytes(storageRef, image);
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log("File available at", downloadURL);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}
