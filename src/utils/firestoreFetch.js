import { collection, getDocs } from '@firebase/firestore';
import { db } from './firebaseconfig';

const firestoreFetch = async () => {
    const querySnapshot = await getDocs(collection(db,"products"));
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export default firestoreFetch;