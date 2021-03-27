import { auth } from '../../config/firebaseInit';
import { URL } from '../../config/config';

export function register(email, pass) {
    return auth.createUserWithEmailAndPassword(email, pass)
        .then(() => auth.signInWithEmailAndPassword(email, pass))
}

export function login(email, pass) {
    return auth.signInWithEmailAndPassword(email, pass);
}

export function activeUser(uid, email) {
    localStorage.setItem('uid', uid);
    localStorage.setItem('email', email);
}