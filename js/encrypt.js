const doEncryption = (userText) => {

   let letters = [];//array of user input characters
    
    _("#key").value = pKey;//show the key to the user
    //divid the text to array of letters and make the pKey longer than the text
    for(letter of userText){
        letters.push(letter);
    }
    console.log(letters);
    let sq = strToArr(pKey);
    let outputCode = getCodes(letters, sq);
    console.log(outputCode);

    //test it if it is decryptable
    let testCode = `${outputCode.join("")}`;
    let decrypted = doDecryption(testCode);

    //if the letters array and the decrypted output code array are not identical then try again
    if(!isIdentical(letters, decrypted)){
        let newoutput;
        for(let i = 0; i < 9; i++){// 9 times
            console.log("try num: ",i+2);
            outputCode = getCodes(letters, pKey);
            testCode = `${outputCode.join("")}`
            decrypted = doDecryption(testCode);
            (isIdentical(letters, decrypted))? newoutput = outputCode: 0;
            if(newoutput){break};
        }
        if(!newoutput){    
            outputCode = ["Något gick fel! :(<br>Försökt med en annan nyckel eller ett kortate medelande..."]
        }
    }

    return outputCode;
}
const getCodes = (letters, sq) =>{
    let outArr = [];

    for(let i = 0; i < letters.length; i++){

        for(let j = 0; j < KEY.length; j++){
            if(letters[i] == KEY[j][0]){
                let code = convertToCode(i, j, sq);
                //console.log(letters.length, letters[i]);//*Debugging
                while(!code){

                    outArr.push("8");//the nothing ""
                    letters.splice(i, 0, "");//letters.length++
                    i++;//back to the same letter with differant index 
                    code = convertToCode(i, j, sq);//get a new code the sequence will change
                    //console.log(letters.length, letters[i]);//*Debugging
                }
                outArr.push(code);
                
            }
        } 
    }
    return outArr;
    }

const convertToCode = (i, j, sq) => {
    let amountDigits = sq[(i % (sq.length))];
    //console.log(`${i} % ${(sq.length)} = ${(i % (sq.length))}`);
    //console.log(KEY[j][0], amountDigits, KEY[j][1][(amountDigits -1)]);
    let newCode = rand(KEY[j][1][(amountDigits -1)]);
    return newCode;
    
}