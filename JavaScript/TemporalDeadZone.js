// What is TDZ (Temporal Dead Zone)?
// Temporal Dead Zone is the time between when a variable is declared (using let or const) and when it is initialized.

// During this time, accessing the variable causes a ReferenceError.
// a is in the TDZ from the start of the block until the line let a = 5; is executed.


console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 5;
