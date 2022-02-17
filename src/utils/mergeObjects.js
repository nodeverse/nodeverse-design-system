/**
 * mergeObjects will return a single object by merging all the objects that are passed as arguments.
 * @param {objects} objects
 */
function mergeObjects() {
  var finalObject = {},
    objectHolder;

  for (var i = 0; i < arguments.length; i++) {
    objectHolder = arguments[i];
    for (var key in objectHolder) {
      if (
        Object.prototype.toString.call(objectHolder[key]) === "[object Object]"
      ) {
        if (typeof finalObject[key] === "undefined") {
          finalObject[key] = {};
        }
        finalObject[key] = mergeObjects(finalObject[key], objectHolder[key]);
      } else {
        finalObject[key] = objectHolder[key];
      }
    }
  }
  return finalObject;
}
