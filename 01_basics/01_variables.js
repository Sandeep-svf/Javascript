const accountId = 14453 //Can't chnage it's value.
let accountEmial = "aarav@gmail.com"    // scope issue fix 
var accountPassword = "aarav12345"  // caused scope issue.
accountCity = "Varanasi"    // Not prefered but varibale can be assign like this.
let accountState;   // give output "undefined"

// accountId = 45; // Not allowed
accountEmial = "newaarav@gmail.com"
accountPassword = "newPassword12345"
accountCity="newCityVaranasi"

console.log(accountId)
/*
Prefere not use var -> because of issue in block scope and funcitonal scope.
*/
console.table([accountId,accountEmial,accountPassword,accountCity,accountState])