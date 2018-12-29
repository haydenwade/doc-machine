export default (inputStr)=>{
    let newStr = '';
    for(let i = 0; i < inputStr.length;i++){
        const currentChar = inputStr.substr(i,2);
        if(currentChar === '. '){
            newStr = newStr.concat('REDAPPLES');
        }else{
            if(currentChar !== '.'){
                newStr = newStr.concat(inputStr.substr(i,1));
            }
        }
    }
    const split = newStr.split('REDAPPLES');

    return split;
}