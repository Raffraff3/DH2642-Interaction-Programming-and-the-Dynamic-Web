import { Summary } from "./summaryPresenter.jsx";
import { Sidebar } from "./sidebarPresenter.jsx";
import { Search } from "./searchPresenter.jsx";
import { Details } from "./detailsPresenter.jsx";

// const ReactRoot = observer(   //  will be added in week 3
function ReactRoot(props) {
  return (
    <div>
      <div>
        <Sidebar model={props.model} />
      </div>
      <div>
        <Search model={props.model} />
        <Details model={props.model} />
        <Summary model={props.model} />
      </div>
    </div>
  );
}
// )

export { ReactRoot };
