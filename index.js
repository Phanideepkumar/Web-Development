const users=[
    {
        "name":"John",
        "Gender":"Male",
        "image":"john.png"
    },
    {
        "name":"Jane",
        "Gender":"Female",
        "image":"jane.png"
    }
]
var idx=0;
function toggle(){
    if(idx==0) idx=1;
    else idx=0;
    document.getElementById("user-name").innerHTML=users[idx].name;
    document.getElementById("user-gender").innerHTML=users[idx].Gender;
    document.getElementById("image").src=users[idx].image;
}

async function randomUser(){
    try{
        const response=await fetch("https://randomuser.me/api/");
        const data=await response.json();
        const user=data.results[0];
        document.getElementById("user-name").innerHTML=`${user.name.first} ${user.name.last}`;
        document.getElementById("user-gender").innerHTML=user.gender;
        document.getElementById("image").src=user.picture.large; 
    } catch(error){
        alert("Unable to load a random user. Please try again.");
        console.error(error);
    }
}