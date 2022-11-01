function factorial(n){
    let answer= 1;
      for(let i=2;i<=n;i++){
        answer *=i;
      }
      return answer;
    }  
  
  console.log(
    factorial(6)
    );