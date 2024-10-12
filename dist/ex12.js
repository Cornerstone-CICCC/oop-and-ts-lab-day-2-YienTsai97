"use strict";
// Create a function `renameKeys` that accepts an object and a mapping of key renames.
// The function should return a new object where the keys are renamed according to the map.
// Return type: a new object with renamed keys.
function renameKeys(obj, keyMap) {
    // const newObj = Object.keys(obj).reduce(
    //     (acc, key) => ({
    //         ...acc,
    //         ...{ [keyMap[key] || key]: obj[key] }
    //     }),
    //     {}
    // )
    // const newObj:object = {}
    // Object.entries(obj).forEach(([key, value]) => {
    //     let newKey = key
    //     if (keyMap[key]) {
    //         newKey = keyMap[key]
    //     }
    //     newObj[newKey] = value
    // })
    // const newObj:object = {}
    // for (let key in obj) {
    //     let newKey = key
    //     if (keyMap[key]) {
    //         newKey = keyMap[key]
    //     }
    //     newObj[newKey] = obj[key]
    // }
    const newObj = {};
    for (let key in obj) {
        newObj[keyMap[key] || key] = obj[key];
    }
    console.log(newObj);
}
// Expected output:
renameKeys({ name: "Alice", age: 30 }, { name: "fullName" });
// { fullName: "Alice", age: 30 }
