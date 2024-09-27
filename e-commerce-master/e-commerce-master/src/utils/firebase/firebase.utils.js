import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, signOut,
        onAuthStateChanged} from "firebase/auth";
import {getFirestore, doc, getDoc, 
        setDoc, collection, writeBatch, 
        query, getDocs} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyANA46F7ccykpesFKEdLo7kPpOC8zFh9e0",
    authDomain: "crwn-db-83edf.firebaseapp.com",
    projectId: "crwn-db-83edf",
    storageBucket: "crwn-db-83edf.appspot.com",
    messagingSenderId: "640593276818",
    appId: "1:640593276818:web:45c326f9cb5677d2ad1b4b"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider).catch((error) => alert(error.message));

export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if(!email || !password) return;

    return createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {

    if(!email || !password) return;

    return signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback)
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) =>{
        const unsub = onAuthStateChanged(
            auth,
            (userAuth) =>{
                unsub();
                resolve(userAuth);
            },
            reject
        )
    })
}


///////////////


export const db = getFirestore();

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    })

    await batch.commit();
    console.log('done');
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, "categories");
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data());


}

export const createUserDocumentFromAuth = async (user, additionalInformaton) => {
    if(!user) return;
    const userDocRef = doc(db, "user", user.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const { displayName, email } = user;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{displayName, email, createdAt, ...additionalInformaton})
        }catch(error){
            console.log("error creating user", error.message)
        }
    }

    return userSnapshot;
}
