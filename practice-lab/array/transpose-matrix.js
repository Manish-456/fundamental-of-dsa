const transpose = (matrix) => {
    let noOfCols = matrix.length;
    let noOfRows = matrix[0].length;
    let transposedMatrix = Array.from({length : noOfCols}, () => {
      return new Array(noOfRows).fill(0)
    });
    for(let row = 0; row < matrix.length; row++){
      for(let col = 0; col < matrix.length; col++){
        transposedMatrix[row][col] = matrix[col][row]
      }
    }
    console.log(transposedMatrix)
  }
  
  transpose([[1,2], [3, 4]])

  // input [[1,2],[3,4]] => [[1,3],[2,4]]