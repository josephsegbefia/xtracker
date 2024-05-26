import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post(
    'https://xtracker-c9f30-default-rtdb.europe-west1.firebasedatabase.app/expenses.json',
    expenseData
  );
}
