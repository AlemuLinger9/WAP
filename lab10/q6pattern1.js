// pattern1.js
//exports and module.exports points at same object
exports.getFirstname = function () {

    console.log('Josh');

}; // add getFirstname element to the object

exports = {

    getLastname: function(){

        console.log('Edward');

    }

} // export will point to this object // no more equal to module.exports

module.exports = function (){

    console.log('Josh Edward');

} // the value of module.eports changed to method. it is not object anymore/of course methods are also objects/