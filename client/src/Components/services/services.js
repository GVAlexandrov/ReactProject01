let url = 'http://localhost:5000/expenses';

export const addNewExpense = (merchant, price, curency, category, description) => {
    let newExpense = {
        profile: '',
        expense: merchant,
        category,
        price,
        description,
    }


    console.log(JSON.stringify(newExpense));


    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newExpense)
    })
};