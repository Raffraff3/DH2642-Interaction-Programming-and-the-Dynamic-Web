import { Summary } from "./summaryPresenter.jsx";
import { Sidebar } from "./sidebarPresenter.jsx";
import { Search } from "./searchPresenter.jsx";
import { Details } from "./detailsPresenter.jsx";
import { SuspenseView } from "/src/views/suspenseView.jsx";
import { observer } from "mobx-react-lite";
import { createHashRouter, RouterProvider } from "react-router-dom";

function makeRouter(model) {
  return createHashRouter([
    { path: "/", element: <Search model={model} /> },
    { path: "/search", element: <Search model={model} /> },
    { path: "/summary", element: <Summary model={model} /> },
    { path: "/details", element: <Details model={model} /> },
  ]);
}

const ReactRoot = observer(
  //  will be added in week 3
  function ReactRoot(props) {
    if (!props.model.ready) {
      return <SuspenseView promise="dummy promise" />;
    }
    return (
      <div className="flexParent">
        <div className="sidebar">
          <Sidebar model={props.model} />
        </div>
        <div className="mainContent">
          <RouterProvider router={makeRouter(props.model)} />
        </div>
      </div>
    );
  },
);

export { ReactRoot };
