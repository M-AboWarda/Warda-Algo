const _ = e => {
    return document.querySelector(e);
}
//pick a random number between min and max or pick a random element from an array
const rand = (min,max)=>{
    //----if one argument only (random array object)----
    if(!max){
        if(typeof(min) == "object"){
            let index;
            if(min.length -1 == 0){//if the array contains one element
                index = 0;
            }else{
                index = rand(0, min.length -1);
            }
            return min[index]; 
        }
    }
    //----regular random num between min and max----
    else {
        return Math.floor((Math.random() * (max + 1 - min)) + min);
    }
}
//----convert a string to array of characters----
const strToArr = str =>{
    let arr = [];
    if(!isNaN(str)){
        for(let i = 0; i < str.length; i++){
            arr.push(str[i]);
        }
    }
    return arr;
}
//
const strSpaceRemover = str => {
    let output = "";
    arr = [];
    for(let i = 0; i < str.length; i++){
        arr.push(str[i])
    }
    for(let i = arr.length; i >= 0; i--){
        (arr[i] == " ")?arr.splice(i, 1) : 0;
    }
    for(let i = 0; i < arr.length; i++){output += `${arr[i]}`}
    return output;
}
//check if the first array the same as the second array 
const isIdentical = (arr1, arr2) => {
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] != arr2[i]){
            return false;
        }
    }
    return true;
}