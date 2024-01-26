//----------Solution 1----------//
// Speed:   75ms 51.21%
// Memory:  56.06mb 5.07%

function isValidSudoku(board: string[][]): boolean {
  let columns: string[][] = [[], [], [], [], [], [], [], [], []];
  let boxes: string[][] = [[], [], [], [], [], [], [], [], []];

  for (let indexRow = 0; indexRow < board.length; indexRow++) {
    let rowValues = board[indexRow].filter((a) => a !== ".");
    const rowSet = new Set(rowValues);
    if (rowValues.length !== rowSet.size) return false;

    for (
      let indexColumn = 0;
      indexColumn < board[indexRow].length;
      indexColumn++
    ) {
      //Put values into columns
      let x = columns[indexColumn].push(board[indexRow][indexColumn]);

      //Put values into boxes
      if (indexRow < 3) {
        if (indexColumn < 3) {
          boxes[0].push(board[indexRow][indexColumn]);
        } else if (indexColumn > 5) {
          boxes[2].push(board[indexRow][indexColumn]);
        } else {
          boxes[1].push(board[indexRow][indexColumn]);
        }
      } else if (indexRow > 5) {
        if (indexColumn < 3) {
          boxes[6].push(board[indexRow][indexColumn]);
        } else if (indexColumn > 5) {
          boxes[8].push(board[indexRow][indexColumn]);
        } else {
          boxes[7].push(board[indexRow][indexColumn]);
        }
      } else {
        if (indexColumn < 3) {
          boxes[3].push(board[indexRow][indexColumn]);
        } else if (indexColumn > 5) {
          boxes[5].push(board[indexRow][indexColumn]);
        } else {
          boxes[4].push(board[indexRow][indexColumn]);
        }
      }
    }
  }

  for (let column of columns) {
    column = column.filter((a) => a !== ".");
    const columnSet = new Set(column);
    if (column.length !== columnSet.size) return false;
  }

  for (let box of boxes) {
    box = box.filter((a) => a !== ".");
    const boxSet = new Set(box);
    if (box.length !== boxSet.size) return false;
  }

  return true;
}

const validSudoku = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const inValidSudoku = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(validSudoku)); //true
console.log(isValidSudoku(inValidSudoku)); //false
