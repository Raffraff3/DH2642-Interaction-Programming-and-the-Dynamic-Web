import { dishType, menuPrice, sortDishes } from "/src/utilities.js";
import "/src/style.css";

export function SidebarView(props) {
  const sortedDishes = sortDishes([...props.dishes]);
  const totalPrice = (menuPrice(props.dishes) * props.number).toFixed(2);

  function increaseValueACB() {
    props.onNumberChange(props.number + 1);
  }
  function decreaseValueACB() {
    props.onNumberChange(props.number - 1);
  }

  return (
    <div className="debug">
      <button disabled={props.number === 1} onClick={decreaseValueACB}>
        -
      </button>
      <span>{props.number}</span>
      <button onClick={increaseValueACB}>+</button>
      {
        <table>
          <tbody>
            {sortedDishes.map(dishTableRowCB)}
            <tr>
              <td></td>
              <td>Total:</td>
              <td></td>
              <td className="alignRight">{totalPrice}</td>
            </tr>
          </tbody>
        </table>
      }
    </div>
  );

  function dishTableRowCB(dish) {
    const pricePerDish = (dish.pricePerServing * props.number).toFixed(2);

    function removeDishACB() {
      console.log("User removed", dish.title);
      props.onDishRemove(dish);
    }

    function interestedDishACB() {
      console.log("User is Interested in ", dish.title);
      props.onDishInterest(dish);
    }

    return (
      <tr key={/* Reflect on what's a key in array rendering! */ dish.id}>
        <td>
          <button className="removeButton" onClick={removeDishACB}>
            x
          </button>
        </td>
        <td>
          <a href="#/details" onClick={interestedDishACB}>
            {dish.title}
          </a>
        </td>
        <td>{dishType(dish)}</td>
        <td className="alignRight">{pricePerDish}</td>
      </tr>
    );
  }
}
