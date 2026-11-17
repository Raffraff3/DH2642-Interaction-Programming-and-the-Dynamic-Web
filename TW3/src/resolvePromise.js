export function resolvePromise(prms, promiseState) {
  promiseState.promise = prms;
  promiseState.data = null;
  promiseState.error = null;

  if (prms === null || prms === undefined) {
    return;
  } else {
    prms.then(dataACB).catch(errorACB);
  }
  function dataACB(data) {
    if (promiseState.promise === prms) {
      promiseState.data = data;
    }
  }

  function errorACB(error) {
    if (promiseState.promise === prms) {
      promiseState.error = error;
    }
  }
}
