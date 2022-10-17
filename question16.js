var peoples = ["Misbah","Azan","Abdullah"]
let peoples_Len = peoples.length

/*for (let i = 0; i < peoples_Len; i++) {
    console.log("%s, Mani invite's you to diner ",peoples[i])
}*/
//Modifie array
peoples[1] = "hunain"
console.log("\n")
//again print array
for (let i = 0; i < peoples_Len; i++) {
    console.log("%s, Mani invite's you to diner ",peoples[i])
}
console.log("We found a new bigger table")
peoples.unshift("Azan")
peoples.push("Husnain")
peoples.splice(2, 0, "Omer");
console.log("\n")
for (let i = 0; i < 6; i++) {
    console.log("%s, Mani invite's you to diner ",peoples[i])
}