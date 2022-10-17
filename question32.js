var current_users=["ali","rana","fahad","aun","ahmed"]
var new_users=["ali","rana","bilal","huzi","dula"]

for(let i = 0;i<current_users.length;i++){
    for(let j = 0;j<new_users.length;j++){
        if(new_users[i]==current_users[j]){
            console.log("person will need to enter a new username.")
        }
    }
    console.log("the username is available..")
}

