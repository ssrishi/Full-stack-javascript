fetch("https://api.kanye.rest")
.then(function(response){   
    return response.json()
})
.then(function(data){
    console.log(`${data.quote}`);
})
.catch(function(){
    console.log("Error!! Please Check Your Connection");
})
