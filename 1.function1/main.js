function reverseString(message){
  // wirte your code here
  var temp = [];
  for (i=message.length-1; i>=0; i--) {
  	temp.push(message[i]);
  }
  message = temp.join("");
  console.log(message);
}
reverseString('hello'); // should return 'olleh'