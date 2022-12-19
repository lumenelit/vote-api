import { json } from "express";
import { doc, setDoc, getFirestore, collection, getDocs } from "firebase/firestore";
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
export async function list(req, res) {
    const querySnapshot = await getDocs(collection(db, "forms"));
const data = querySnapshot.docs.map((doc) => {
  // doc.data() is never undefined for query doc snapshots
return doc.data()
});
res.json(data)
}
export function get(req, res) {
  //
}
export function submit(req, res) {
  //
}
export function report(req, res) {
  //
}
