import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// import firebase from 'firebase/app';
// import 'firebase/firestore';

// firebase.initializeApp(config);

// const firestore = firebase.firestore();
// // const userRef = firestore.collection(`users`).doc('7xjLcLNLNUh8riXPmsz9qQYOmfn2');

// // const snapshot = userRef.get();

// // snapshot.then(data=>{console.log(data.data())});

// const testFunction = async () => {
//     const snapshot = await firestore.collection('users').get()
//     console.log('snapshot',snapshot, 'snapshot docs', snapshot.docs);
//     return snapshot.docs.map(doc => {
//         console.log("id", doc.id, " \n \n Document data", doc.data())
//         return doc.data()
//     });
// }
// testFunction();