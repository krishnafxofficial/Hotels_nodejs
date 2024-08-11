function countVowels(str, callback){
    let count = 0;
    for(let i= 0;i<str.length;i++){ // forOf loop => for(let char of str){console.log(char)}
      if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
        count++;
      }
    }
    console.log(count);
    callback(); 
}

module.exports = countVowels;