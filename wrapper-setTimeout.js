// Crea wrappers de setTimeout (timeoutPromise)
// con promesas de modo que se puedan usar como se muestra a continuación:
//
// ```
// timeoutPromise(1000).then(function () {
//     console.log('timed out');
// });
// ```

// Implementación:

const timeoutPromise = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

timeoutPromise(5000).then(function () {
  console.log("timed out");
});
