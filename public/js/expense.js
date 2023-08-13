const expenseFormHandler = async (event) => {
    event.preventDefault();

    const expense_name = document.querySelector('#expense-name').value;
    const amount = document.querySelector('#expense-amount').value;
    const category = document.querySelector('#expense-category').value;
    const description = document.querySelector('#expense-desc').value;

    if (expense_name && amount && category) {
        const response = await fetch('/api/expense', {
            method: 'POST',
            body: JSON.stringify({
                expense_name,
                amount,
                category,
                description
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.ok) {
                console.log('added expense');
        } else {
            alert('Failed to add expense');
        }
    }
};

document
.querySelector('.expense')
.addEventListener('submit', expenseFormHandler);