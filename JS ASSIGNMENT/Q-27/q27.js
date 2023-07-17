
for (let i=0 ; i<=100 ; i++){
    for(let j = i-1; j>0;j--){
        if(i % j ==0){
            if (j==1){
                console.log(`${i} is a prime number`);
            }
            else{
                console.log(`${i} is not a prime number`);
                break;
            }
        }
    }
}