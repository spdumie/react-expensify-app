
export default (expenses = []) => (
  expenses.reduce( (accum, expense) => accum + parseInt(expense.amount), 0)
);