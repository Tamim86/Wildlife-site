var name = prompt (' Please enter your first name')
var passWord = prompt ('Please enter your Password')
function wrongPass (){
  while (passWord !== '678910') {
    alert ('Wrong! Try Again')
    console.log ('Try Again')
    passWord = prompt ('Please enter your Password')

  }
}
 
document.write ('Welcome' + ' ' + name);
wrongPass();
var favAnim = prompt('Please pick your Favorite Animal')
var image = ''
var rate = prompt ('Rate our website from 1-10?')

function favorite(){
if (favAnim == 'Horse'){
  image = '<img src= "https://vid.alarabiya.net/images/2017/09/02/039d0037-72b5-4401-b0ef-6f8cfa471c0f/039d0037-72b5-4401-b0ef-6f8cfa471c0f.jpg">'
}
  else if (favAnim == 'Lion'){
    image = '<img src= "https://www.thesun.co.uk/wp-content/uploads/2020/11/crop-13290526.jpg" style = " width:200px;height:120px;">'
  }
    else { 
      document.write(' Your Favorite Animal is not available')
  }
  document.write (image)
}
favorite()

for(i='2'; i <= rate; i++){
  document.write(image) 
  
}