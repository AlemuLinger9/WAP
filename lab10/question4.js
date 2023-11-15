var message = 'Hello World';

function logMessage() {
    console.log(this);

    console.log(this.message);

}

logMessage();
/**
 * When we execute it in browser, the value of this will be windows. So, because the message is declared using
 * var keyword, it will be placed on the window. In that case, the message "Hello World" will be displyed on the console.
 * However, if we execute it using node, the value of this will be global. but, the variable message
 * will not be placed on the global. because the node keeps variables locally even declared using var keyword.
 */