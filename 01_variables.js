const accountId = 123456789;
let accountEmail = "Suhas9022@gmail.com";
var accountPassword = "1234";
accountCity = "Pune"; // This will work in non-strict mode, but not recommended
let accountState 
// accountId = 2;  // not allowed, as accountId is a constant

/*

    Prefer not to use var
    because it has function scope and can lead to unexpected behavior.
    Use let or const instead.
    let is block-scoped and can be reassigned.
    const is block-scoped and cannot be reassigned.

*/

accountEmail = "Suhas9022@gmail.com";
accountPassword = "12345";
accountCity = "Mumbai"; // This will work, but not recommended

// console.log(accountId);

console.table({accountId, accountEmail, accountPassword, accountCity,accountState});