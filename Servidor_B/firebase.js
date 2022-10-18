const { initializeApp } = require("firebase/app");
const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    getDocs,
    getDoc,
    deleteDoc,
} = require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCZfylZ6VRE17gNmFybNFyinaDk9hkLxw8",
    authDomain: "learning-docker-6f896.firebaseapp.com",
    projectId: "learning-docker-6f896",
    storageBucket: "learning-docker-6f896.appspot.com",
    messagingSenderId: "315634099939",
    appId: "1:315634099939:web:4daa87e0aa1950c88f87d6"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function save(nomeTabela, id, dado) {
    if (id) {
        const entidadeReferencia = await setDoc(doc(db, nomeTabela, id), dado);
        const dataSalva = {
            ...dado,
            id: id
        }
        return dataSalva;
    } else {
        const entidadeReferencia = await addDoc(collection(db, nomeTabela), dado);
        const dataSalva = {
            ...dado,
            id: entidadeReferencia.id
        }
        return dataSalva;
    }
}

async function get(nomeTabela) {
    const tabelaRef = collection(db, nomeTabela);

    const q = query(tabelaRef);

    const querySnapshot = await getDocs(q);

    const lista = [];
    querySnapshot.forEach((doc) => {
        const dado = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(dado);
    });
    return lista;
}

async function getById(nomeTabela, id) {
    const docRef = doc(db, nomeTabela, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return null;
    }

}

async function remove(nomeTabela, id) {
    const dado = await deleteDoc(doc(db, nomeTabela, id));
    return {
        message: `${id} deleted`
    }
}

module.exports = {
    save,
    get,
    getById,
    remove
}