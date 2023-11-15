
const getName = require('./q5pattern1');

getName();

/**
 * The require() returns an object having a method called getName inside it. So 
 * we can not call an object as a function. So, if we execute the code we will get an error.
 * we can fix it by calling a method like 
 * getName.getName();
 * 
 */