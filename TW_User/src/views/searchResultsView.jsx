import "/src/style.css";
export function SearchResultsView(props) {
  return <div>{props.searchResults.map(SearchResultsViewCB)}</div>;
  function SearchResultsViewCB(dish) {
    return (
      <span key={dish.id} className="resultView" onClick={clickedDishACB}>
        <img src={dish.image} alt={dish.title} height="100" />
        <div>{dish.title}</div>
      </span>
    );
    function clickedDishACB() {
      props.onDishClick(dish);
      window.location.hash = "#/details";
    }
  }
}
