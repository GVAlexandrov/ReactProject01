import { URL } from '../../config/config';
import { auth } from '../../config/firebaseInit';


// let url = 'http://localhost:5000/expenses';


export const getOne = (expenseId) => {
    const uid = localStorage.uid;
    console.log(`${URL}expenses/${expenseId}.json`);

    return fetch(`${URL}expenses/${uid}/${expenseId}.json`)
        .then(res => res.json())
        .catch(error => console.log(error));
}


export const addNewExpense = (merchant, price, curency, category, description) => {
    const uid = localStorage.uid;

    let newExpense = {
        // profile: localStorage.getItem('uid'),
        expense: merchant,
        category,
        price,
        description,
    }

    // console.log(JSON.stringify(newExpense));

    return auth.currentUser.getIdToken(false)
        .then((token) => {
            fetch(URL + `expenses/${uid}/.json?auth=${token}`, {
                method: "POST",
                body: JSON.stringify(newExpense)
            });
        });
};


export const editExpense = (merchant, price, curency, category, description, expenseId) => {
    let editExpense = {
        profile: localStorage.getItem('uid'),
        expense: merchant,
        category,
        price,
        description,
    }

    const uid = localStorage.uid;
    // console.log(JSON.stringify(editExpense));

    return auth.currentUser.getIdToken(false)
        .then((token) => {
            console.log(URL + `expenses/${uid}/${expenseId}.json?auth=${token}`);
            console.log(editExpense);

            fetch(URL + `expenses/${uid}/${expenseId}.json?auth=${token}`, {
                method: 'PUT',
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify(editExpense)
            });
        });
};

export const deleteExpense = (expenseId) => {
    const uid = localStorage.uid;

    return auth.currentUser.getIdToken(false)
        .then((token) => {
            return fetch(URL + `expenses/${uid}/${expenseId}.json?auth=${token}`, {
                method: 'DELETE'
            });
        });
};

export const refill = (refillAmount) => {
    const uid = localStorage.uid;

    let newRefillAmount = {
        expense: refillAmount,
    }

    fetch(URL + `amount/${uid}.json`)
        .then(res => res.json())
        .then((res) => {
            console.log(res);

            if (res === null) {
                return;
            }

            let keysArr = Object.keys(res);
            let valuesArr = Object.values(res);

            if (valuesArr.length > 0) {
                console.log(valuesArr[0].expense);
                let existingAmount = Number(valuesArr[0].expense)

                newRefillAmount.expense += valuesArr[0].expense;
            }

        })
        .catch(error => console.log(error))

    return auth.currentUser.getIdToken(false)
        .then((token) => {
            fetch(URL + `amount/${uid}/.json?auth=${token}`, {
                method: "POST",
                body: JSON.stringify(newRefillAmount)
            });
        });
};

// export const getRefill = (expenseId) => {
//     const uid = localStorage.uid;
//     console.log(`${URL}expenses/${expenseId}.json`);

//     return fetch(`${URL}expenses/${uid}/${expenseId}.json`)
//         .then(res => res.json())
//         .catch(error => console.log(error));
// }