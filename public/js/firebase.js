const firebaseConfig = {
    apiKey: "AIzaSyBLKX9t66FnTa90A5wGCTmAfZPtVHctriw",
    authDomain: "saney-35148.firebaseapp.com",
    databaseURL: "https://saney-35148-default-rtdb.firebaseio.com",
    projectId: "saney-35148",
    storageBucket: "saney-35148.appspot.com",
    messagingSenderId: "60097853593",
    appId: "1:60097853593:web:6d1078a47625801e4be008"
  };

const model = firebase.initializeApp(firebaseConfig, firebaseConfig.appId);

async function write(value, path) {
    try {
        await model.database().ref(path).set(value)
        return true
    } catch (err) {
        return false
    }
}

async function read(path) {
    let snapshot = await model.database().ref(path).get()
    return snapshot.val()
}

function listen(path, callback) {
    model
        .database()
        .ref(path)
        .on('value', (snapshot) => {
            if (typeof callback === 'function') {
                callback(snapshot.val())
            }
        })
}

;(async () => {
    let result = await write('BBB', 'test')
    console.log(result)

    let response = await read('test')
    console.log(response)

    listen('test', (value) => {
        console.log(value)
    })
})()
