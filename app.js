




// click("signin-button",function(){
//   window.location="chat.html";
// });


click ("signin-button",logInUser);

var user1={
  name:"Hardik",
  id:201601089,
  sayHello: function(){
  console.log("hello "+this.name+" your id is "+this.id);
}
};


var user2={
  name:"Abhishek",
  id:201601135,
  sayHello: function(){
  console.log("hello "+this.name+" your id is "+this.id);
}
};

var users=[
  user1,
  user2
];

for(var l=0;l<users.length;l++){
  var user=users[l];
  console.log(user.id);
}

var message=new Object();
message.text="hello";
console.log(message.text);
