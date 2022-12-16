import { doc, setDoc, getFirestore } from "firebase/firestore";
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
export function get(req, res) {
  //
}
export function submit(req, res) {
  //
}
export function report(req, res) {
  //
}
