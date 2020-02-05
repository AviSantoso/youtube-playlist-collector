module.exports = (objectToDecorate: object, extensionFunction: Function) => {
    const wrapperObject: object = {};
    const objectKeys = Object.keys(wrapperObject);

    objectKeys.forEach(key => {
        const value = objectToDecorate[key];
        if (typeof value == "function") {
            const myFunc: Function = value;
            wrapperObject["key"] = function () {

            }
        }
    });

}