var peoples = ["Misbah","Azan","Abdullah"]
let peoples_Len = peoples.length

for (let i = 0; i < peoples_Len; i++) {
    console.log("%s, Mani invite's you to diner ",peoples[i])
}
//Modifie array
peoples[1] = "hunain"
console.log("\n")
//again print array
for (let i = 0; i < peoples_Len; i++) {
    console.log("%s, Mani invite's you to diner ",peoples[i])
}