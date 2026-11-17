import { observer } from "mobx-react-lite";
import { SearchFormView } from "../views/searchFormView";
import { SearchResultsView } from "../views/searchResultsView";
import { SuspenseView } from "../views/suspenseView.jsx";

const Search = observer(
  // needed for the presenter to update (its view) when relevant parts of the model change
  function SearchRender(props) {
    const state = props.model.searchResultsPromiseState;
    function SearchRenderCB() {
      if (!state.promise || !state.data) {
        return <SuspenseView promise={state.promise} error={state.error} />;
      }
      return (
        <SearchResultsView
          searchResults={state.data}
          onDishClick={onDishClickACB}
        />
      );
    }
    function onTextChangeACB(text) {
      props.model.setSearchQuery(text);
    }
    function onTypeChangeACB(type) {
      props.model.setSearchType(type);
    }
    function onClickSearchACB() {
      props.model.doSearch(props.model.searchParams);
    }
    function onDishClickACB(dish) {
      props.model.setCurrentDishId(dish.id);
    }

    return (
      <>
        <SearchFormView
          dishTypeOptions={["starter", "main course", "dessert"]}
          text={props.model.searchParams.query}
          type={props.model.searchParams.type}
          onTextChange={onTextChangeACB}
          onTypeChange={onTypeChangeACB}
          onClickSearch={onClickSearchACB}
        />
        {SearchRenderCB()}
      </>
    );
  },
);
export { Search };
