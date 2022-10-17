var peoples = ["Misbah","Azan","Abdullah"]
let peoples_Len = peoples.length

//Modifie array
peoples[1] = "hunain"
console.log("\n")
//print the number of people in this array
console.log("When we Invite a people first time: ",peoples.length)

//Adding some new members
peoples.unshift("Azan")
peoples.push("Husnain")
peoples.splice(2, 0, "Omer");

//print the number of people in this modified array
console.log("\nWhen we Invite 3 more people at diner: ",peoples.length)

//Pop the 4 members in the array
peoples.pop()
peoples.pop()
peoples.pop()
peoples.pop()

//again print the number of people in this modified array
console.log("\nWhen the table is full and we remove 4 people: ",peoples.length)

//again pop 2 more peopbles
peoples.pop()
peoples.pop()

//again print the number of people in this modified array
console.log("\nWhen All peoples gone: ",peoples.length)
