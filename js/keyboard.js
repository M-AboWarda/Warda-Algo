
document.addEventListener("keyup", e =>{

    if(e.key == "Enter" && (e.path[0].id == "msg" || e.path[0].id == "key")){
        if(isNaN(parseInt(_("#msg").value))){//if the massage is text 
            encrypt();
        }else{// if the massage is not text
            decrypt();
        }
    }
});
