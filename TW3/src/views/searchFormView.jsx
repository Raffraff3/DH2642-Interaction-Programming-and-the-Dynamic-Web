export function SearchFormView(props) {
  return (
    <div>
      <input value={props.text || ""} onChange={changeTextACB} />
      <select value={props.type || ""} onChange={changeTypeACB}>
        <option value="">Choose:</option>
        {props.dishTypeOptions.map(dishTypeOptionsCB)}
      </select>
      <button onClick={clickedACB}>Search!</button>
      <button onClick ={goToSummaryACB}>Summary</button>
    </div>
  );
  function dishTypeOptionsCB(dishType) {
    return (
      <option key={dishType} value={dishType}>
        {dishType}
      </option>
    );
  }
  function changeTextACB(e) {
    return props.onTextChange(e.target.value);
  }
  function changeTypeACB(e) {
    return props.onTypeChange(e.target.value);
  }
  function clickedACB() {
    return props.onClickSearch();
  }
  function goToSummaryACB(){
    window.location.hash="#/summary"
  }
}
