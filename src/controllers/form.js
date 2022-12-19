import { doc, setDoc, getDoc , getFirestore } from "firebase/firestore";
import firebase from "../config/firebase.js";
const db = getFirestore(firebase);

export async function create(req, res) {
  const { information, fields } = req.body;
  await setDoc(doc(db, "forms", req.params.token), {
    information,
    fields,
    VotedList: [],
  }).then(res.status(201).end());
}
export function list(req, res) {
  //
}
export async function get(req, res) {
  const docRef = doc(db,"forms", req.params.token);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    res.json(docSnap.data());
  } else {
    res.send("No such document!")
  }
}
export function submit(req, res) {
  //
}
export function report(req, res) {
  //
}
