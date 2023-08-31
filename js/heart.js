let pKey; //the private key that should be followed
const encrypt = () => {
    //____________________Reset____________________\\
    pKey = null;

    //____________________Variablels____________________\\

    //____________________Inputs____________________\\
    let userKey  = _("#key").value;
    let userText = _("#msg").value.toLowerCase();
    
    //____________________The ifs____________________\\
    //if there is no text
    if(!userText){return 0}

    // if there is no value for pKey set it to 312
    (userKey)? pKey = userKey : pKey = "314159265359"; 

    //if the key are not only numbers
    let keyInErr = false
    if(isNaN(userKey)){
        alert("The key contains other characters than numbers");
        keyInErr = true;
     }else{ pKey = userKey} 
    if(keyInErr){return 0}

    //if the pkey is more than is consest of 1 or 1s only 
    let isTheDigitsOnlyOnes = true;
    let isContainZero = false;
    for(let i = 0; i < pKey.length; i++){
        if(pKey[i] != "1"){
            isTheDigitsOnlyOnes = false;
        }
        if(pKey[i] == "0"){
            isContainZero = true;
        }
    }

    if(isTheDigitsOnlyOnes || isContainZero){return 0};
    

    console.log("You survived the ifs!");//*debugging

    //____________________Do encryption with the inputs____________________\\
    let outCode = doEncryption(userText);//retering an array of codes (numbers)
    
    //____________________Output____________________\\
    //let p = document.createElement("p");
    //p.textContent = outCode.join("");
    //_("#output").appendChild(p);
    if(outCode.length > 15){
        for(let i = 0 ; i < outCode.length; i++){
            if(i % 30 == 0 && i != 0){
                console.log("add a new line! ([output])");
                outCode.splice(i, 0, "<br/>")
            }
        }
    }
    _("#output").innerHTML = outCode.join("");


    //____________________Reset again____________________\\
    pKey = null;

}
const decrypt = () => {
    //____________________Reset____________________\\
    pKey = null;

    //____________________Variabels____________________\\
    let code;
    let numbers = [];

    //____________________Inputs____________________\\
    let userKey  = _("#key").value;
    let userText = _("#msg").value;
    
    //____________________The ifs____________________\\
    if(userText == "" || userKey == ""){return 0}//the button pressed with empty input/inputs
    //remove spaces if found
    userKey  = strSpaceRemover(userKey);
    //console.log(userKey);//*debugging
    userText = strSpaceRemover(userText);
    (isNaN(userText))? alert("The code contains other characters than numbers") : code = userText; 
    (isNaN(userKey))? alert("The key contains other characters than numbers") : pKey = userKey; 
    
    //return if the user input contains other characters than numbers
    if(!code || !pKey || isNaN(pKey)){
        console.log("the code, the pKey ",code, pKey);//*debugging
        return 0;
    }

    //if the pkey is more than is consest of 1 or 1s only 
    let isTheDigitsOnlyOnes = true;
    let isContainZero = false;
    for(let i = 0; i < pKey.length; i++){
        if(pKey[i] != "1"){
            isTheDigitsOnlyOnes = false;
        }
        if(pKey[i] == "0"){
            isContainZero = true;
        }
    }

    if(isTheDigitsOnlyOnes || isContainZero){return 0};

    console.log("u survived the ifs!");//*debugging

    //convert the string (code) to a regular array called numbers 
    for(let i = 0; i < code.length; i++){
        numbers.push(code[i]);
    }
    
    //____________________Do decryption with the inputs____________________\\
    let outText = doDecryption(numbers);
    
    //____________________Output____________________\\
    //let p = document.createElement("p");
    //p.textContent = outText.join("");
    //_("#output").appendChild(p);
    _("#output").innerHTML = outText.join("");

    //____________________Reset again____________________\\
    pKey = null;
}


/* Minikey */  /*
let KEY = [ 
    ["a",     [  ['1'], ['30','25'], ['704','899'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["b",     [  ['2'], ['28','26'], ['122','799'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["c",     [  ['3'], ['78','27'], ['134','699'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["d",     [  ['4'], ['53','75'], ['135','599'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["e",     [  ['5'], ['99','29'], ['136','010'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["f",     [  ['6'], ['12','30'], ['137','399'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["g",     [  ['9'], ['11','31'], ['237','009'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["h",     [  ['0'], ['64','32'], ['337','199'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["i",     [  [] , ['89','33'], ['437','099'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["j",     [  [] , ['67','34'], ['537','909'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["k",     [  [] , ['63','35'], ['637','919'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["l",     [  [] , ['71','36'], ['737','929'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["m",     [  [] , ['49','37'], ['837','939'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["n",     [  [] , ['94','38'], ['197','024'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["o",     [  [] , ['87','39'], ['127','959'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["p",     [  [] , ['17','40'], ['109','969'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["q",     [  [] , ['93','41'], ['147','979'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["r",     [  [] , ['62','42'], ['335','989'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["s",     [  [] , ['50','43'], ['426','990'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["t",     [  [] , ['24','44'], ['027','991'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["u",     [  [] , ['69','45'], ['115','992'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["v",     [  [] , ['04','90'], ['100','970'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["w",     [  [] , ['46','47'], ['101','993'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["x",     [  [] , ['81','48'], ['130','994'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["y",     [  [] , ['88','49'], ['124','995'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["z",     [  [] , ['74','50'], ['129','996'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["ä",     [  [] , ['61','51'], ['432','997'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["å",     [  [] , ['08','52'], ['753','998'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["ö",     [  [] , ['22','53'], ['244','900'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    [" ",     [  ['7'], ['18','54'], ['148','924'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]],
    ["",      [  ['8'], ['10','55'], ['159','555'] , ['0000','0000','0000'] , ['11111','11111','11111'] ]]
];
*/