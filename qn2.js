function reverse(arr){
  var a=[];
  for(var i=arr.length-1;i>=0;i--){
    a.push(arr[i]);
  }
  return a;
}
//console.log(reverse([1,2,3,4]));
function reverse1(arr){
  var temp=[];
  for(var i=0;i< Math.floor(arr.length / 2); i++) {
temp=arr[i];
    arr[i]=arr[arr.length - 1 - i];
    arr[arr.length -1 - i] =temp;
  }
  return arr;
} 
