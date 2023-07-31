//lets start this example with a data structure

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
occupation: "manager"}]

//Now, we are going to map all the items from the data structure
function showingUsers (users){
  const maping = users.map(user => (user))
  return maping
}

//And finally, show the result through a console.log
console.log(showingUsers(data))

//normally if this is correct you should push this to your github repository, but, lets imagine that you forgot to add another person on the data array and you already pushed this branch, now let's see the example2.js file