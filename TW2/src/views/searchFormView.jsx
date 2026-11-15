export function SearchFormView(props) {
  return (
    <div>
      <input value={props.text || ""} onChange={changeTextACB} />
      <select value={props.type || ""} onChange={changeTypeACB}>
        <option value="">Choose:</option>
        {props.dishTypeOptions.map(dishTypeOptionsCB)}
      </select>
      <button onClick={clickedACB}>Search!</button>
    </div>
  );
  function dishTypeOptionsCB(dishType) {
    return (
      <option key={dishType} value={dishType}>
        {dishType}
      </option>
    );
  }
  function changeTextACB(evt) {
    return props.onTextChange(evt.target.value);
  }
  function changeTypeACB(evt) {
    return props.onTypeChange(evt.target.value);
  }
  function clickedACB() {
    return props.onClickSearch();
  }
}
