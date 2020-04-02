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
  //var row = solution.rows();
  var findSolution = function(row) {
    console.log(solution);
    if (row === n) {
      if (!solution.hasAnyRooksConflicts()) {
        return solution.rows();
      }
    }
    for (var x = 0; x <= n - 1; x++) {
      solution.togglePiece(row,x);
      if(!solution.hasAnyRooksConflicts()) {
        findSolution(row+1);
      }
      solution.togglePiece(row,x)
    }
  }
  findSolution(0);
  console.log('get', solution.get('n'));
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //number of possible solutions
  var solution = new Board({n:n});

  var findSolution = function(row) {
    if (row === n) {
      solutionCount++;
      //if (!solution.hasAnyRooksConflicts()) {
        return solution;
      //}
    }
    for (var x = 0; x <= n - 1; x++) {
      solution.togglePiece(row,x);
      if(!solution.hasAnyRooksConflicts()) {
        findSolution(row+1);
      }
      solution.togglePiece(row,x)
    }
  }

  findSolution(0);
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
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
  var solution = new Board({n:n});

  var findSolution = function(row) {
    if (row === n) {
      solutionCount++;
      //if (!solution.hasAnyRooksConflicts()) {
        return solution;
      //}
    }
    for (var x = 0; x <= n - 1; x++) {
      solution.togglePiece(row,x);
      if(!solution.hasAnyQueensConflicts()) {
        findSolution(row+1);
      }
      solution.togglePiece(row,x)
    }
  }

  findSolution(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
