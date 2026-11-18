// initialize Firebase app
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// uncomment the following lines when you have your firebaseConfig. Understand what the lines are doing!
import { firebaseConfig } from "/src/firebaseConfig.js";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
window.db = db;
/*const firestoreDoc = doc(db, "test collection", "test document");
setDoc(firestoreDoc, { dummyField: "dummyValue" }, { merge: true }).catch(
  console.error,
);*/
// make doc and setDoc available at the Console for testing
window.doc = doc;
window.setDoc = setDoc;

/* Replace NN with your TW2_TW3 group number! */
const COLLECTION = "dinnerModel20";

// TODO: read the code above
// TODO: export the function connectToPersistence, it can be empty for starters
export function connectToPersistence(model, watchFunction) {
  model.ready = false;
  const firestoreDoc = doc(db, COLLECTION, "dinnerModel");

  getDoc(firestoreDoc).then(updateACB).catch(errorACB);

  function updateACB(snapshot) {
    const data = snapshot.data();
    if (data.numberOfGuests !== undefined) {
      model.numberOfGuests = data.numberOfGuests;
    } else {
      model.numberOfGuests = 2;
    }
    if (data.dishes !== undefined) {
      model.dishes = data.dishes;
    } else {
      model.dishes = [];
    }
    if (data.currentDishId !== undefined) {
      model.currentDishId = data.currentDishId;
    } else {
      model.currentDishId = null;
    }
    model.ready = true;
  }

  function errorACB(error) {
    console.log("Error:" + error);
  }

  function persistPropertiesACB() {
    return [model.numberOfGuests, model.dishes, model.currentDishId];
  }

  function saveModelACB() {
    if (model.ready) {
      const firestoreData = {
        numberOfGuests: model.numberOfGuests,
        dishes: model.dishes,
        currentDishId: model.currentDishId,
      };
      setDoc(firestoreDoc, firestoreData, { merge: true });
    }
  }
  watchFunction(persistPropertiesACB, saveModelACB);
}
