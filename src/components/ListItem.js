import React from 'react';

function ListItem(props = {
  itemData: {},
  onRemove: (''),
  onComplete: (''), // onComplete
  onEdit: ('') // onEdit
}) {
  let [editMode, setEditMode] = React.useState(false);
  let [inputValue, setInputValue] = React.useState(props.itemData.value);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const saveChanges = (event) => {
    event.target.value !== props.itemData.value ? props.onEdit(props.itemData.elementID, event.target.value) : setEditMode(false);
    setEditMode(false);
  }

  return (
    <li id={`list-item-${props.itemData.elementID}`} className={props.itemData.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        className="checkbox-completed"
        onClick={() => props.onComplete(props.itemData.elementID)}
        defaultChecked={props.itemData.completed}
      />

      {!editMode ?
        <label onDoubleClick={() => setEditMode(true)}>{props.itemData.value}</label>
        :
        <input autoFocus
          className='edit'
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(event) => event.keyCode == 13 && saveChanges(event)} 
          onBlur={(event) => saveChanges(event)}/>
      }
      <button className="destroy" onClick={() => props.onRemove(props.itemData.elementID)}>x</button>
    </li>
  );
}


export default ListItem;