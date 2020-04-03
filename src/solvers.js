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
  var findSolution = function(row) {
    if (row === n) {
      return solution;
    }
    for (var x = 0; x <= n - 1; x++) {
      solution.togglePiece(row,x);
      if(!solution.hasAnyRooksConflicts()) {
        return findSolution(row+1);
      }
      solution.togglePiece(row,x)
    }
  }
  solution = findSolution(0);
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //number of possible solutions
  var solution = new Board({n:n});

  var findSolution = function(row) {
    if (row === n) {
      solutionCount++;
      return solution;
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
  var solution;
  solution = new Board({n:n});
  var findSolution = function(row) {
    if (row === n) {
      return solution;
    }
    for (var x = 0; x <= n - 1; x++) {
      solution.togglePiece(row,x);
      if(!solution.hasAnyQueensConflicts()) {
        return findSolution(row+1);
      }
      solution.togglePiece(row,x)
      if (x === n - 1 && solution.hasAnyQueensConflicts()) {
        console.log('we got here');
        return solution;
      }
    }
    // return solution;
  }
  solution = findSolution(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //number of solutions
  var solution = new Board({n:n});

  var findSolution = function(row) {
    if (row === n) {
      solutionCount++;
      return solution;
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
