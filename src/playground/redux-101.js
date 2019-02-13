import { createStore} from 'redux';



const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const resetCount = () => ({
  type: "RESET"
});

const setCount = (setCount) => ({
  type: "SET",
  setCount
});

const countReducer = (state = {count:0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
         count : state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
         count : state.count - action.decrementBy
      };
    case 'SET':
      return {
         count : action.setCount
      };  
    case 'RESET':
      return {
         count : 0
      };    
    default: 
      return state;
  }
}


const store = createStore(countReducer);

const unsubscript = store.subscribe(() => {
  console.log('===== subscribe', store.getState());
})

store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(resetCount());
store.dispatch(setCount(12));