const doDecryption = numbers => {
    let outputMsg = [];
    let codes = [];
    let sq = strToArr(pKey);

    //-- divide all the numbers to array of codes depending on the sequence (sq)--//
    //du kan välja den!!! i genomförande delen
    for(let i = 0; i < numbers.length; i){
        let amountNums = sq[(codes.length % (sq.length))];
        let code = "";
        for(let num = 0; num < amountNums; num++){
            code += `${numbers[i]}`;
            i++;
        }
        codes.push(code);
        //console.log(`${codes.length} % ${(sq.length)} = ${(codes.length % (sq.length))}`);
    }
    //-- loop throw the codes and push the letters to the outputMsg --//
    let isFound;
    for(let i = 0; i < codes.length; i++){
        for(let j = 0; j < KEY.length; j++){
            if(!KEY[j][1][(codes[i].length-1)]){//stupid bugg that is unfixable skip it
                outputMsg.push("*");//the magical star// :( something went wronge
                //console.log(i, codes[i].length-1, codes[i], KEY[j][1]);
                continue;
            }
            for(let k = 0; k < KEY[j][1][(codes[i].length-1)].length; k++){
                if(codes[i] == KEY[j][1][(codes[i].length-1)][k]){
                    //console.log("Match! ", KEY[j][0], codes[i], KEY[j][1][(codes[i].length-1)][k]);
                    outputMsg.push(KEY[j][0]);//the letter
                    break;
                }

            }
            if(isFound){break;}
        }
    }
    console.log(codes);
    console.log(outputMsg);
    return outputMsg;
}