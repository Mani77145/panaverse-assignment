function make_sandwich(sand){
    console.log("\nI'll make you a great sandwich:")
    for(i=0;i<sand.length;i++){
        console.log("...adding %s to your sandwich.",sand[i])
    }
    console.log("Your sandwich is ready!")
}
var sand = ['roast beef', 'cheddar cheese', 'lettuce', 'honey dijon']
make_sandwich(sand)
var sand = ['peanut butter', 'strawberry jam']
make_sandwich(sand)