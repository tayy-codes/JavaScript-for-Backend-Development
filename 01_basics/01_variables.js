const accountID = 144553
let accountEmail = "tayy@google.com" 
var accountPassword= "Team Black"
accountCity= "Kashipur"           //can declare and reserve memory

// accountID = 2        // not allowed as accountID is a constant. (Ctrl + /) for cmnt

accountEmail = "tayyeba@gmail.com"
accountPassword = "Code Red"
accountCity = "Delhi" 

let accountState;
console.log(accountID);

/*
Prefer not to use var 
because of issues with block scope and functional scope  
*/
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

