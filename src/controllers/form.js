import { async } from "@firebase/util";
import {
  doc,
  setDoc,
  getDoc,
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  increment,
} from "firebase/firestore";
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
    return doc.data();
  });

  res.json(data);
}
export async function get(req, res) {
  //
  const cityRef = doc(db, "forms", req.params.token);
  const docSnap = await getDoc(cityRef);

  if (!docSnap.exists()) {
    // res.json(docSnap.data());
    res.send("No such document!");
  } else {
    // doc.data() will be undefined in this case
    // res.send("No such document!");
    res.send(docSnap.data());
  }
}
export async function submit(req, res) {
  //
  const upDocs = doc(db, "forms", req.params.token);

  // Set the "capital" field of the city 'DC'
  await updateDoc(upDocs, {
    "fields.options.votes": increment(2),
  }).then(res.status(201).end());
}
export function report(req, res) {
  //
}
