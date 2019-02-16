import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';


test('should set default state', () => {
  const state = expensesReducer(undefined, {type:'@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id:'4',
    description:'costco',
    note:'a lot of food',
    amount:23100,
    createdAt:5000
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses.concat(expense));
});

test('should edit an expense', () => {
  const expense = {
    ...expenses[0],
    note:'I do not remember paying this'
  }
  const action = {
    type:'EDIT_EXPENSE',
    id:expense.id,
    update:expense
  }
  const state = expensesReducer(expenses, action);
  expect(state[0]).toEqual(expense);
});

test('should not edit an expense if id not found', () => {
  const action = {
    type:'EDIT_EXPENSE',
    id:'-1',
    update:undefined
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type:'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
}); 