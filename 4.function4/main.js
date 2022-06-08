function countWords(message){
  // wirte your code here
  var str = new Array();
  str = message.split(" ");
  console.log(str.length);
}
countWords('Good morning, I love JavaScript.'); // should return 5