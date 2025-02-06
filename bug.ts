function printName(name?: string): void {
  if (name) {
    console.log(name);
  } else {
    console.log('No name provided');
  }
}

printName(); // This will work fine
printName('John Doe'); // This will also work fine

// However, the following will cause a runtime error if used with --strictNullChecks
let myName: string | null = null;
printName(myName); // Error: Argument of type 'string | null' is not assignable to parameter of type 'string'.