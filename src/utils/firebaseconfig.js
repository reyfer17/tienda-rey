import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, query, where, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzIhK7h2l9h82pFwvIgIIdTASyG7PDNrM",
  authDomain: "tienda-rey.firebaseapp.com",
  projectId: "tienda-rey",
  storageBucket: "tienda-rey.appspot.com",
  messagingSenderId: "156351930452",
  appId: "1:156351930452:web:2678a3e920d196cf0c8dc1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

export async function getAllItems() {
  const myCollection = collection(db,'products');
  const productsSnapshot = await getDocs(myCollection);
  return productsSnapshot.docs.map(doc => {
    return{
      ...doc.data(),
      id: doc.id
    }
  });
}

export async function getItemsByCategory(idCategory) {
  const myCollection = collection(db,'products');
  const queryProducts = query(myCollection, where("categoryCode","==", idCategory))
  const productsSnapshot = await getDocs(queryProducts);
  return productsSnapshot.docs.map(doc => {
    return{
      ...doc.data(),
      id: doc.id
    }
  });
}
