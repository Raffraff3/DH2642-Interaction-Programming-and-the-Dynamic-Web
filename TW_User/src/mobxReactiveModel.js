import "/src/teacherFetch.js"; // protection against fetch() in infinite loops
import { observable, configure, autorun, reaction } from "mobx";
import { model } from "./DinnerModel";
import { connectToPersistence } from "/src/firestoreModel.js";

configure({ enforceActions: "never" }); // we don't use Mobx actions in the Lab

export const reactiveModel = observable(model);
reactiveModel.doSearch(reactiveModel.searchParams);

autorun(sideEffectACB);
function sideEffectACB() {
  reactiveModel.currentDishEffect();
}
connectToPersistence(reactiveModel, reaction);
// ------ for Lab debug purposes ----------
// making the reactive model available at the browser JavasScript Console
window.myModel = reactiveModel;

// making some example dishes available
import { dishesConst } from "/src/dishesConst.js";
window.dishesConst = dishesConst;

//myModel.addToMenu(dishesConst[2]); //You can test with more/different dishes
