function Filters(props = { allItems: [], handleFiltersClick: ('') }) {
  return (
    <div>
      <ul id="filters">
        <li>
          <a href="#/" id='all' onClick={() => props.handleFiltersClick('ALL')}>All</a>
        </li>
        <li>
          <a href="#/active" id='active' onClick={() => props.handleFiltersClick('ACTIVE')}>Active</a>
        </li>
        <li>
          <a href="#/completed" id='completed' onClick={() => props.handleFiltersClick('COMPLETED')}>Completed</a>
        </li>
      </ul>
    </div>
  );
}

export default Filters;
