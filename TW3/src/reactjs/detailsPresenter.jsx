import { observer } from "mobx-react-lite";
import { DetailsView } from "../views/detailsView.jsx";
import { SuspenseView } from "../views/suspenseView.jsx";

const Details = observer(
  // needed for the presenter to update (its view) when relevant parts of the model change
  function DetailsRender(props) {
    const state = props.model.currentDishPromiseState;

    if (!state.data) {
      return <SuspenseView promise={state.promise} error={state.error} />;
    }
    function isCurrentDishCB(dish) {
      return dish.id === state.data.id;
    }
    function onAddToMenuACB() {
      return props.model.addToMenu(state.data);
    }

    return (
      <DetailsView
        dishData={state.data}
        guests={props.model.numberOfGuests}
        isDishInMenu={Boolean(props.model.dishes.find(isCurrentDishCB))}
        onAddToMenu={onAddToMenuACB}
      />
    );
  },
);

export { Details };
