import firebase from 'firebase';
import * as config from "./firebase";

const services = {
    ...config,
};

export interface IServices {
    db: firebase.firestore.Firestore,
    storage: firebase.storage.Storage,
    auth: firebase.auth.Auth,
}
export default services;