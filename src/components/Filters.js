function Filters(props = { allItems: [], filterSelected: '', handleFiltersClick: ('') }) {
  return (
    <ul id="filters">
      <li>
        <a href="#/" id='all' onClick={() => props.handleFiltersClick('ALL')} className = {props.filterSelected === 'ALL' ? 'selected' : ''}>All</a>
      </li>
      <li>
        <a href="#/active" id='active' onClick={() => props.handleFiltersClick('ACTIVE')} className = {props.filterSelected === 'ACTIVE' ? 'selected' : ''}>Active</a>
      </li>
      <li>
        <a href="#/completed" id='completed' onClick={() => props.handleFiltersClick('COMPLETED')} className = {props.filterSelected === 'COMPLETED' ? 'selected' : ''}>Completed</a>
      </li>
    </ul>
  );
}

export default Filters;
