 const encode = (plainText) => {
    const consecutiveChars = /([\w\s])\1*/g;
    return plainText.replace(consecutiveChars, (match) =>
      match.length > 1 ? match.length + match[0] : match[0],
    );
  };
  
   const decode = (encodedText) => {
    const countAndChar = /(\d+)(\w|\s)/g;
    return encodedText.replace(countAndChar, (match, repeats, char) =>
      new Array(Number(repeats) + 1).join(char),
    );
  };

  let txt = "mmmmaaaannnniiiisssshhh";
  console.log(encode(txt))

  // *********************************************************** //
  function smallerNumbersThanCurrent (nums){
    let result = [];
    for(let i = 0; i < nums.length; i++){
        let count = 0;
      for(let j = 0; j < nums.length; j++){
         if(nums[i] > nums[j]){
            count ++;
         }
      }
      result.push(count);
    }
    return result;
  }
  
  console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
  
  //[8,1,2,2,3] Output: [4,0,1,1,3] 


  // Unicode generator

  function unicodeGenerator(emoji){
    let unicode = emoji.charCodeAt(0);
    return `Unicode of ${emoji} is U+${unicode.toString(16)}`
   }
   
   let unicode = unicodeGenerator('🐔');
   console.log(unicode)