export function SearchFormView(props) {
  return (
    <div className="searchContainer">
      <h2>Find Your Dinner Recipe</h2>
      <p className="searchSubtitle">
        Search for dishes by name or category to start planning your meal.
      </p>

      <div className="searchControls">
        <label>
          Search:
          <input
            value={props.text || ""}
            onChange={changeTextACB}
            placeholder="e.g. Steak"
          />
        </label>

        <label>
          Type:
          <select value={props.type || ""} onChange={changeTypeACB}>
            <option value="">Choose dish type...</option>
            {props.dishTypeOptions.map(dishTypeOptionsCB)}
          </select>
        </label>

        <button onClick={clickedACB}>Search!</button>
        <button onClick={goToSummaryACB}>View Shopping Summary</button>
      </div>
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
  function goToSummaryACB() {
    window.location.hash = "#/summary";
  }
}
