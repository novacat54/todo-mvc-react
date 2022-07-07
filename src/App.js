import React from 'react';
import './App.css';
import Filters from './components/Filters';
import ListItem from './components/ListItem';

let savedToDoList = window.localStorage.getItem(`toDoList`) ? JSON.parse(window.localStorage.getItem(`toDoList`)) : [];
let initialState = window.localStorage.getItem('filtersState') ? window.localStorage.getItem('filtersState') : 'ALL';
let initialId = window.localStorage.getItem(`toDoList`) ? JSON.parse(window.localStorage.getItem(`toDoList`))[JSON.parse(window.localStorage.getItem(`toDoList`)).length - 1].elementID + 1 : 1;

function App() {

  const [data, setToData] = React.useState(savedToDoList);
  const [filtersState, setFiltersState] = React.useState(initialState);
  let [id, setId] = React.useState(initialId);

  React.useEffect(() => {
    if (data && data.length > 0) {
      window.localStorage.setItem('toDoList', JSON.stringify(data));
    }
    window.localStorage.setItem('filtersState', filtersState);
  }, [data, filtersState])


  const enterKeyPressed = (event) => {
    if (event.keyCode == 13 && event.target.value != '') {
      setToData([...data, { elementID: id, value: event.target.value, completed: false }]);
      setId(id + 1);
      event.target.value = '';
    }
  }

  const removeItem = (idToRemove) => {
    let newData = data.filter(entry => entry.elementID !== idToRemove);
    setToData([...newData]);
  }

  const checkboxHandler = (idToEdit) => {
    let newData = data.map(entry => entry.elementID === idToEdit ? { ...entry, completed: !entry.completed } : entry);
    setToData([...newData]);
  }

  const saveNewValue = (idToEdit, newValue) => {
    let newData = data.map(entry => entry.elementID === idToEdit ? { ...entry, value: newValue } : entry);
    setToData([...newData]);
    console.log(newData);
  }

  const clearCompletedItems = () => {
    let newData = data.filter(entry => !entry.completed);
    setToData([...newData]);
  }

  const handleFiltersChange = (newState) => {
    setFiltersState(newState);
  }

  return (
    <div className="App">
      <h1>todos</h1>
      <div id='todo-section'>
        <input id='new-todo' placeholder='What needs to be done?' onKeyDown={enterKeyPressed} />
        <ul className='todo-list'>
          {data.length == 0 ? "" : data.map(entry => (filtersState === 'ALL' ? entry : filtersState === 'COMPLETED' ? entry.completed : !entry.completed) &&
            <ListItem key={entry.elementID} itemData={entry} onRemove={removeItem} onComplete={checkboxHandler} onEdit={saveNewValue} />)}
        </ul>
        <div id='filters-section'>
        {data.length == 0 ? "" : <Filters allItems={data} filterSelected = {filtersState} handleFiltersClick={handleFiltersChange} />}
        {!data.some(entry => entry.completed) ? '' :
          <button id="clear-completed" onClick={() => clearCompletedItems()}>
            Clear Completed
          </button>
        }
        </div>
      </div>
    </div>
  );

}

export default App;
