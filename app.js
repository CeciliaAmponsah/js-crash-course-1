// Declaring a Variable
//keyword identifier/variableName = value
let firstName = ("Ama");
let lastName = ("Amponsah");
let age = 25 ;
let isSingle = true;
let siblings =["star", "Esi"]
let other = {
 favouriteColor: "gold",
 favoritesport: "soccer",
 favouritFruit: "apple", 
}  
const fullName = firstName + " " + lastName; // concatenation
console.log(fullName);
mySelf = `My name is ${firstName} ${lastName}`;
console.log(mySelf);

// STRINGS
let sentence = "this is a story about Ama Amponsah in Blind Spot"
console .log(sentence.length);
console.log(sentence.split("Ama"));
console.log(sentence.replace("Ama" ,"Amponsah"))
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.startsWith("The"));
console.log(sentence.endsWith("sport"));
console.log(sentence.includes(""));

//ARRAY
let days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
console.log(days.length);
days.push("Friday");
console.log(days); 
console.log(days.pop());
days.unshift("Sunday");
console.log(days);
console.log(days.shift());
console.log(days.indexOf("Friday"));
console.log(days[5]);// retrieving data
days[0] = "Sunday"; // 
console.log(days);


// OBJECT
let person = {
    firstName: "Ama",
    lastName:"Amponsah" ,
    age:25 ,

};
console.log(person["firstName"]);
console.log(person.firstName);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));