import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
    firebase.initializeApp({
        //PARA RODAR SÓ COLOCAR A CONFIG DO FIREBASE APIKEY, AUTH DOMAIN E PROJECT ID
    })
}

export default firebase