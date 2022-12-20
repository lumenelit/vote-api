import {
  doc,
  setDoc,
  getFirestore,
  collection,
  getDoc,
  getDocs,
  updateDoc, 
  arrayUnion,
  arrayRemove
} from "firebase/firestore";
import firebase from "../config/firebase.js";
const db = getFirestore(firebase);

export async function create(req, res) {
  const { information, fields } = req.body;
  // create token
  const token = Math.random().toString(36).substr(2, 9);
  await setDoc(doc(db, "forms", token), {
    information,
    fields,
    VotedList: [],
  }).then(res.status(201).end());
}
export async function list(req, res) {
  const querySnapshot = await getDocs(collection(db, "forms"));
  const data = querySnapshot.docs.map((doc) => {
    // doc.data() is never undefined for query doc snapshots
    return doc.data();
  });
  res.json(data);
}
export async function get(req, res) {
  const docRef = doc(db, "forms", req.params.token);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    res.json(docSnap.data());
  } else {
    res.send("No such document!");
  }
}
export async function submit(req, res) {
  const washingtonRef = doc(db, "forms", req.params.token);
  await updateDoc(washingtonRef, {
    VotedList: arrayUnion("blablabala")
});
  await updateDoc(washingtonRef, {
    VotedList: arrayRemove("blablabala")
});
}
export function report(req, res) {
  //
}
