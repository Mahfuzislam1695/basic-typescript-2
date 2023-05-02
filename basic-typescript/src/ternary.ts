//ternary operator

const age:number = 23;

const isAdult = age>=18 ? "Yes" : "No";
console.log(isAdult);

// Nullish coalescing operator
// Null and undefined
const isAuthenticateUser = undefined;
const userName = isAuthenticateUser ?? "Guest"
console.log(userName);

///
type Phero = {
  name: string;
  age: number;
  address: {
    city: "Dhaka",
    road: "uttora",
    home?: '',
  }
}
const hero: Phero = {
  name: "mahfuz",
  age: 23,
  address: {
    city: "Dhaka",
    road: "uttora",
  }
}
// console.log({hero});

const home = hero?.address?.home ?? "No home" // Default 'No home'
console.log({home});