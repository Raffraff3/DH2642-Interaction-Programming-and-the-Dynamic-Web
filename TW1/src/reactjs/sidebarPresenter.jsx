import { observer } from "mobx-react-lite";
import { SidebarView } from "/src/views/sidebarView.jsx";

const Sidebar = observer(
  // needed for the presenter to update (its view) when relevant parts of the model change
  function SidebarRender(props) {
    function onNumberChangeACB(newNumber) {
      return props.model.setNumberOfGuests(newNumber);
    }
    function onDishInterestACB(newDish) {
      return props.model.setCurrentDishId(newDish.id);
    }
    function onDishRemoveACB(removeDish) {
      return props.model.removeFromMenu(removeDish);
    }

    return (
      <SidebarView
        number={props.model.numberOfGuests}
        dishes={props.model.dishes}
        onNumberChange={onNumberChangeACB}
        onDishInterest={onDishInterestACB}
        onDishRemove={onDishRemoveACB}
      />
    );
  },
);

export { Sidebar };
