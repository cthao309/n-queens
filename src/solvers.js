/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution; //a single solution

  solution = new Board({n:n});

  console.log('solution => ', n, solution);

  var row = solution.rows();

  var findSolution = function(board) {
  //recursive stubs
    //base case:
    if ((board.hasAnyColConflicts() || board.hasAnyRowConflicts()) || board.get('n') < 3) {
        //invalid board
            //board less than 3
            //pieces violate a rule
                //=> return undefined/error
                return undefined;
    }

    //do work:
    var rows = board.rows();
    var lastRow = -1;
    var size = board.get('n');
    for (var x = 0; x <= rows.length - 1; x++) {
      //find row last placed piece
      if (rows[x].indexOf(1) !== -1) {
        lastRow = x;
      }
    }
    if (lastRow !== size - 1) {
      //go to next row
      var activeRow = board.get(lastRow + 1);
        for (var i = 0; i <= size - 1; i++) {
        //place a piece at each position
          board.togglePiece(lastRow+1, i);
          findSolution(board);
          board.togglePiece(lastRow+1, i);
        }
    //recurse over each new board
    }
    return board;
  }


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  solution = findSolution(solution);
  return !(solution.hasAnyColConflicts() && solution.hasAnyRowConflicts());
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //number of possible solutions

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = []; //a single solution

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //number of solutions

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
