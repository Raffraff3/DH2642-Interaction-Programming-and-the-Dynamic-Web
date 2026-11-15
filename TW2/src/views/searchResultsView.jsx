import "/src/style.css";
export function SearchResultsView(props) {
  return <div>{props.searchResults.map(searchResultsViewCB)}</div>;

  function searchResultsViewCB(dish) {
    return (
      <span key={dish.id} className="resultView" onClick={clickedDishACB}>
        <img src={dish.image} alt={dish.title} height="100" />
        <div>{dish.title}</div>
      </span>
    );
    function clickedDishACB() {
      return props.onDishClick(dish);
    }
  }
}
