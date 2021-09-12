const initialState = [
  'Study English',
  'Play football'
];

const { createStore } = window.Redux;



const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newList = [...state];
      newList.push(action.payload);

      return newList;
    }
    default:
      return state;
  }
};

const store = createStore(todoListReducer);

const renderTodoList = (todoList) => {
  if (!Array.isArray(todoList) || todoList.length === 0) return;

  const ulElement = document.querySelector('#todoList');
  if (!ulElement) return;

  ulElement.innerHTML = '';

  for (const todo of todoList) {
    const liElement = document.createElement('li');
    liElement.textContent = todo;

    ulElement.appendChild(liElement);
  }
};


const initialTodoList = store.getState();
renderTodoList(initialTodoList);

const formElement = document.querySelector('#todoForm');
if (formElement) {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const textElement = document.querySelector('#todoText');
    if (!textElement) return;
    console.log('Submit', textElement.value);

    const action = {
      type: 'ADD_TODO',
      payload: textElement.value
    };
    store.dispatch(action);

    formElement.reset();
  };

  formElement.addEventListener('submit', handleFormSubmit);
};

store.subscribe(() => {
  console.log('STATE UPDATE', store.getState());
  const newTodoList = store.getState();
  renderTodoList(newTodoList);
})