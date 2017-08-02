function range(start,end,step){
  var arr=[];
  if(!step){
    step=1;
  }
  if(start<=end){
    for(start;start<=end;start+=step){
      arr.push(start);
    }
  }
  else{
    for(start;start>=end;start--){
      arr.push(start);
    }
  }
  return (arr);
}

function sum(arr){
  var sum=0;
  for(var i=0;i<=arr.length;i++){
      sum+=arr[i];
      }
      return (sum);
}
