function alphabetSort(message){
  // wirte your code here
  var arr = message.split("");
  var arr1 = arr.sort();
  var str = arr1.join("");
  console.log(str);
}
alphabetSort('hello'); // should return 'ehllo'