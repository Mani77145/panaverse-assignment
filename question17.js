var peoples = ["Misbah","Azan","Abdullah"]
let peoples_Len = peoples.length

//Modifie array
peoples[1] = "hunain"
console.log("\n")

//Adding some new members
peoples.unshift("Azan")
peoples.push("Husnain")
peoples.splice(2, 0, "Omer");

//Print with new members
for (let i = 0; i < 6; i++) {
    console.log("%s, Mani invite's you to diner ",peoples[i])
}

console.log("\nSorry we are late we have only 2 peoples place now\n")

//Pop the 4 members in the array
console.log("Sorry %s Table is full so you are not invited",peoples.pop())
console.log("Sorry %s Table is full so you are not invited",peoples.pop())
console.log("Sorry %s Table is full so you are not invited",peoples.pop())
console.log("Sorry %s Table is full so you are not invited\n",peoples.pop())

//print array
for (let i = 0; i < 2; i++) {
    console.log("%s, Mani invite's you to diner ",peoples[i])
}

//again pop 2 more peopbles
console.log("\nSorry %s Table is full so you are not invited",peoples.pop())
console.log("Sorry %s Table is full so you are not invited\n",peoples.pop())

//print empty array
console.log(peoples)
