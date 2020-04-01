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
  var solution = []; //a single solution
  var bigN = n;
  //recursive function -- takes a board, num Pieces to be placed,
  var findSolution = function(board, remainingRooks) {
    //base case = board is valid
    if (remainingRooks === 0 && board.length === bigN) {
      //board is valid if n === rooks on board && no violation
      return board;
    }
    //do work = add another piece to each remaining pos in row
    for (var x = 0; x < board.length; x++) {
      //find last filled position in a board.
      var lastPos = board[x].lastIndexOf(1);
      //if (lastPos !== -1) {//this row is filled
        //for each remaining space OF THE FOLLOWING ROW, insert a child Node with position.
        for (var y = 0; y <= n - 1; x++) {
          //if this board is valid.  return it.
          var newPlacement = new Array(n);
          console.log(newPlacement);
          newPlacement[y] = 1;
          findSolution(newPlacement, n-1)
          //else recurse on the board you created.
        }
      //}
    }
  }
  solution = findSolution([],n);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
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
