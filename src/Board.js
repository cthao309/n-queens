// This file is a Backbone Model (don't worry about what that means)
// It's part of the Board Visualizer
// The only portions you need to work on are the helper functions (below)

(function() {

  window.Board = Backbone.Model.extend({

    initialize: function (params) {
      if (_.isUndefined(params) || _.isNull(params)) {
        console.log('Good guess! But to use the Board() constructor, you must pass it an argument in one of the following formats:');
        console.log('\t1. An object. To create an empty board of size n:\n\t\t{n: %c<num>%c} - Where %c<num> %cis the dimension of the (empty) board you wish to instantiate\n\t\t%cEXAMPLE: var board = new Board({n:5})', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: grey;');
        console.log('\t2. An array of arrays (a matrix). To create a populated board of size n:\n\t\t[ [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...] ] - Where each %c<val>%c is whatever value you want at that location on the board\n\t\t%cEXAMPLE: var board = new Board([[1,0,0],[0,1,0],[0,0,1]])', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: grey;');
      } else if (params.hasOwnProperty('n')) {
        this.set(makeEmptyMatrix(this.get('n')));
      } else {
        this.set('n', params.length);
      }
    },

    rows: function() {
      return _(_.range(this.get('n'))).map(function(rowIndex) {
        return this.get(rowIndex);
      }, this);
    },

    togglePiece: function(rowIndex, colIndex) {
      this.get(rowIndex)[colIndex] = + !this.get(rowIndex)[colIndex];
      this.trigger('change');
    },

    _getFirstRowColumnIndexForMajorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex - rowIndex;
    },

    _getFirstRowColumnIndexForMinorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex + rowIndex;
    },

    hasAnyRooksConflicts: function() {
      return this.hasAnyRowConflicts() || this.hasAnyColConflicts();
    },

    hasAnyQueenConflictsOn: function(rowIndex, colIndex) {
      return (
        this.hasRowConflictAt(rowIndex) ||
        this.hasColConflictAt(colIndex) ||
        this.hasMajorDiagonalConflictAt(this._getFirstRowColumnIndexForMajorDiagonalOn(rowIndex, colIndex)) ||
        this.hasMinorDiagonalConflictAt(this._getFirstRowColumnIndexForMinorDiagonalOn(rowIndex, colIndex))
      );
    },

    hasAnyQueensConflicts: function() {
      return this.hasAnyRooksConflicts() || this.hasAnyMajorDiagonalConflicts() || this.hasAnyMinorDiagonalConflicts();
    },

    _isInBounds: function(rowIndex, colIndex) {
      return (
        0 <= rowIndex && rowIndex < this.get('n') &&
        0 <= colIndex && colIndex < this.get('n')
      );
    },


/*
         _             _     _
     ___| |_ __ _ _ __| |_  | |__   ___ _ __ ___ _
    / __| __/ _` | '__| __| | '_ \ / _ \ '__/ _ (_)
    \__ \ || (_| | |  | |_  | | | |  __/ | |  __/_
    |___/\__\__,_|_|   \__| |_| |_|\___|_|  \___(_)

 */
    /*=========================================================================
    =                 TODO: fill in these Helper Functions                    =
    =========================================================================*/

    // ROWS - run from left to right
    // --------------------------------------------------------------
    //
    // test if a specific row on this board contains a conflict
    hasRowConflictAt: function(rowIndex) {
<<<<<<< HEAD
      // grab the row by rowIndex
      let row = this.get(rowIndex);

      // console.log('row by rowIndex => ', row);
      /*
        [0, 1, 0, 0]
        [0, 0, 0, 1]
        [1, 0, 0, 0]
        [0, 0, 1, 0]
      */

      // counter declaration
      let counter = 0;

      // loop through to see if there is more than one indeces is true
      for(let i = 0; i < row.length; i++) {
        if(row[i]) {
          counter++;
        }
      }

      // check to see if there is a value of 1 in the array, return a boolean
      return counter > 1; // fixme
=======
      var targetRow = this.attributes[rowIndex];
        if(targetRow) {
          //console.log('targetRow:',targetRow);
          if (targetRow.indexOf(1) !== targetRow.lastIndexOf(1)) {
            return true;
          }
          return false;
        }
>>>>>>> solo
    },

    // test if any rows on this board contain conflicts
    hasAnyRowConflicts: function() {
<<<<<<< HEAD
      // grab the chess board size
      let chessBoardSize = this.get('n');

      // console.log('board size => ', chessBoardSize)

      // loop through the length of the board
      for(let i = 0; i < chessBoardSize; i++) {
        // check each row if there is a conflict
        if(this.hasRowConflictAt(i)) {
          return this.hasRowConflictAt(i)
        }
      }

      return false; // fixme
=======
      var size = this.attributes.n;
      var board = this.rows();
      for (var x = 0; x <= board.length - 1; x++) {
        if (this.hasRowConflictAt(x)) {
          return true;
        }
      }
      return false;
>>>>>>> solo
    },



    // COLUMNS - run from top to bottom
    // --------------------------------------------------------------
    //
    // test if a specific column on this board contains a conflict
    hasColConflictAt: function(colIndex) {
<<<<<<< HEAD
      // grab the size of the table
      let chessBoardSize = this.get('n');

      // declaration of counter
      let counter = 0;

      // loop through the size
      for(let i = 0; i < chessBoardSize; i++) {
        // retreive the row
        let row = this.get(i);

        // check if there is a value in that column through the colIndex
        if(row[colIndex]) {
          counter++;
        }
        // console.log(row, row[colIndex], counter);
      }

      // return true if there are more than one value in the same column => column conflict
      return counter > 1; // fixme
=======
      // let column = this.get(colIndex);
      let rows = this.rows();
      let conflicts = 0;
      for (var i = 0; i < rows.length; i++) {
        conflicts += rows[i][colIndex];
      }
      if (conflicts > 1) {
        return true;
      }
      return false; // fixme
>>>>>>> solo
    },

    // test if any columns on this board contain conflicts
    hasAnyColConflicts: function() {
<<<<<<< HEAD
      // grab the chess board size
      let chessBoardSize = this.get('n');

      // loop through each row
      for(let i = 0; i < chessBoardSize; i++) {
        // check if there is a conflict in the column
        if(this.hasColConflictAt(i)) {
          return true;
        }
      }

=======
      var size = this.attributes.n;
      for (var x = 0; x <= size - 1; x++) {
        if (this.hasColConflictAt(x)) {
          return true;
        }
      }
>>>>>>> solo
      return false; // fixme
    },



    // Major Diagonals - go from top-left to bottom-right
    // --------------------------------------------------------------
    //
    // test if a specific major diagonal on this board contains a conflict

    /*
    [1, 0, 0, 0]
    [0, 1, 0, 0]
    [0, 0, 1, 0]
    [0, 0, 0, 1]

    or

    (?: ignored case because fail test by row conflict method)
    [0, 0, 0, 1]
    [0, 0, 1, 0]
    [0, 1, 0, 0]
    [1, 0, 0, 0]

    // execution of loop
    this.get(i = 0):

    xp -> [1,  0,  0,  0]
          yp

    increment xp+1, yp+1
          [1, 0, 0, 0]
    xp -> [0, 1, 0, 0]
              yp


    */

    hasMajorDiagonalConflictAt: function(majorDiagonalColumnIndexAtFirstRow) {
<<<<<<< HEAD
      // grab the chess board size
      let chessBoardSize = this.get('n');

      // // declaration of counter
      let counter = 0;

      let xPointer = 0;
      let yPointer = majorDiagonalColumnIndexAtFirstRow;

      // loop through the table
      while(xPointer < chessBoardSize && yPointer < chessBoardSize) {
        // get the row by index
        let row = this.get(xPointer);

        // console.log(`a value at ${row} \n[${xPointer},${yPointer}] ${row[yPointer]}\n counter: ${counter}`);

        if(row[yPointer]) {
          counter++;
        }

        let newXpointer = xPointer;
        let newYpointer = yPointer;

        while(newXpointer < chessBoardSize) {

          // let row = this.get(newXpointer);
          console.log(`a value at ${row} \n[${newXpointer},${newYpointer}] ${row[yPointer]}\n counter: ${counter}`);
          if(row[yPointer]) {
            counter++;
          }
          newXpointer++;
          newYpointer++;
        }

        xPointer++;
        yPointer++;
      }

      console.log('return major diagonal => ' , counter > 1)

=======
      let chessBoardSize = this.get('n');
      let counter = 0;
      let xPointer = 0;
      let yPointer = majorDiagonalColumnIndexAtFirstRow;
      while(xPointer < chessBoardSize && yPointer < chessBoardSize) {
        let row = this.get(xPointer);
        if(row[yPointer]) {
          counter++;
        }
        xPointer++;
        yPointer++;
      }
      console.log('return major diagonal => ' , counter > 1)
>>>>>>> solo
      return counter > 1; // fixme
    },

    // test if any major diagonals on this board contain conflicts
    hasAnyMajorDiagonalConflicts: function() {
<<<<<<< HEAD
      // grab the chess board size
      let chessBoardSize = this.get('n');
      var board = _.toArray(this.attributes);
      board.pop();
      console.log('gameBoard', board)

      let counter = 0;

      // passing column index
      for (let i = 1-chessBoardSize; i < chessBoardSize; i++) {
        if (this.hasMajorDiagonalConflictAt(i)) {
          counter++;
        }
      }

      return counter > 1; // fixme
=======
      console.log('majorDiagonalTest');
      for (var x = 0 - this.attributes.n; x <= this.attributes.n - 1; x++) {
        console.log(x);
        if (this.hasMajorDiagonalConflictAt(x)) {
          return true;
        }
      }
      return false; // fixme
>>>>>>> solo
    },



    // Minor Diagonals - go from top-right to bottom-left
    // --------------------------------------------------------------
    //
    // test if a specific minor diagonal on this board contains a conflict
    hasMinorDiagonalConflictAt: function(minorDiagonalColumnIndexAtFirstRow) {
      return false; // fixme
    },

    // test if any minor diagonals on this board contain conflicts
    hasAnyMinorDiagonalConflicts: function() {
      return false; // fixme
    }

    /*--------------------  End of Helper Functions  ---------------------*/


  });

  var makeEmptyMatrix = function(n) {
    return _(_.range(n)).map(function() {
      return _(_.range(n)).map(function() {
        return 0;
      });
    });
  };

}());
