var firstName = prompt('First Name')
var email = prompt ('Your email')
var hobby = prompt ('What would you like to do?')
console.log (firstName +' '+ hobby)
if (hobby=== 'sleep'){
  document.write ('<h5>'+'You Are Lazy'+ '</h5>')
} else {
  alert ('Have a Nice Day ' + firstName )
}

confirm ('Click yes to donate 1000$')