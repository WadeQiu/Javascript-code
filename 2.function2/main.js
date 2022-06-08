function palindrome(message){
  // wirte your code here
  let reversemessage = message.split('').reverse().join('');
  if(message == reversemessage){
  		console.log(true);
  			  
  }
  else{
  		console.log(false);
  }
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true