var users=["admin","employe","manager","worker","staff"]
for(let i = 0;i<users.length;i++){
    if(users[i]=='admin'){
        console.log("Hello admin, would you like to see a status report?")
    }
    else if(users[i]=='employe'){
        console.log("Hello %s, thank you for logging in again.",users[i])
    }
    else if(users[i]=='manager'){
        console.log("Hello %s, thank you for logging in again.",users[i])
    }
    else if(users[i]=='worker'){
        console.log("Hello %s, thank you for logging in again.",users[i])
    }
    else if(users[i]=='staff'){
        console.log("Hello %s, thank you for logging in again.",users[i])
    }
}
