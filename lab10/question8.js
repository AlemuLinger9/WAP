const result = (function(exports, module){

    exports = module.exports;

    exports.firstname = 'John';

    module.exports.lastname = 'Smith';

    exports = {

        getFullName: function(){

            console.log('John Smith')

        }

    }

    return module.exports;

}).apply(null, [null, {exports: {}}]);

console.log(result);

// This is IIFE representation of a function. The function is wrapped so that it can be executed immedetly.
// Using apply(), the method is called using arguments, null for this, null for exports, and an object for module.
//then, exports and module.exports points in the same object.
//firstname and lastname will be added as a property on the object.
// then, exports object will refer a getFullname function.
// Finally, the module.exports object ({firstname: John, lastname: Smith}) will be returned.
//So the the result will contain the returned object and will output:
