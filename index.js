// Code your solution here
function findMatching(name, string){
  return name.filter(match => match.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string){
  return array.filter(match => match.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

function matchName(array, string){
  return array.filter(something => something.name === string)
}