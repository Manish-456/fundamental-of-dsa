// Write a function that checks whether the given cordinates forms the st.line or not.
function checkStLine(coordinates){
    let [x1, y1] = coordinates[0]
    let [x2, y2] = coordinates[1];
   
    let slope = (y2-y1) / (x2 - x1);
   
    for(let i = 2; i < coordinates.length; i++){
      let [x, y] = coordinates[i];
      if((y - y1) / (x - x1) !== slope){
        return false;
      }
     }
     return true
   }
   
   
   let coordinates = [[1, 2], [2, 3], [4, 5], [5, 6]];
   
   let result  = checkStLine(coordinates)
   console.log(result)