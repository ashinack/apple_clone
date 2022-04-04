function validate(event){
    event.preventDefault();
    var apple=document.getElementById("apple").value;
    var password=document.getElementById("pass").value;
    
    if(apple=="12345" && password=="ashina"){
        location.replace(" https://ashinack.github.io/apple_clone/index.html")
    }else{
        alert("enter valid id & password")
    }
    
}