export function DetailsView(props) {
  function dishIngredientsCB(ingredient) {
    return (
      <li key={ingredient.id}>
        {ingredient.name}: {ingredient.amount} {ingredient.unit}
      </li>
    );
  }
  function addToMenuButtonACB() {
    props.onAddToMenu();
    window.location.hash = "#/search";
  }
  function goToSearchACB() {
    window.location.hash = "#/search";
  }
  return (
    <div>
      <button disabled={props.isDishInMenu} onClick={addToMenuButtonACB}>Add to menu</button>
      <button onClick={goToSearchACB}>Cancel</button>
      <h1>{props.dishData.title}</h1>
      <img src={props.dishData.image} alt={props.dishData.title} />
      <span>
        <p>Price: {props.dishData.pricePerServing}</p>
        <p>
          for {props.guests} guests:
          {(props.guests * props.dishData.pricePerServing).toFixed(2)}
        </p>
      </span>
      <h2>Ingredients:</h2>
      <ul>{props.dishData.extendedIngredients.map(dishIngredientsCB)}</ul>
      <h2>Cooking Instructions:</h2>
      <p>{props.dishData.instructions}</p>
      <a href={props.dishData.sourceUrl}>More information</a> <br />
    </div>
  );
}
