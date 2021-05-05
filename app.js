var firstName = prompt('What is Your First Name')
var email = prompt ('Enter Your email')
var hobby = prompt ('What would you like to do?')
console.log (firstName +' '+ hobby)
if (hobby=== 'sleep'){
  document.write ('<h5>'+'You Are Lazy'+ '</h5>')
} else {
  document.write ('Have a Nice Day ' + firstName )
}

confirm ('Click yes to donate 1000$')