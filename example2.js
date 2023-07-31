//this is the file that you want to push to your github

const data = [{
  name: "robbert",
  age: 40,
  occupation: "physicist"
},
{ name: "andres",
age: 24,
occupation: "bussines"},
{name: "james",
age: 58,
occupation: "manager"},
{name: "Rick",
age: 35,
occupation: "soilder"}]

function showingUsers (users){
  const maping = users.map(user => (user))
  return maping
}

console.log(showingUsers(data))

//now, everything is correct, and you should use the git --ammend comand to rebase your branch locally before to push this branch to your github repository