function printName(name?: string): void {
  if (name) {
    console.log(name);
  } else {
    console.log('No name provided');
  }
}

function isString(value: any): value is string {
    return typeof value === 'string';
}

let myName: string | null = null;

if (isString(myName)) {
  printName(myName);
} else {
  printName();
}

myName = "Jane Doe";
if (isString(myName)) {
  printName(myName);
} else {
  printName();
}

// Alternative solution using optional chaining
printName(myName ?? undefined); 