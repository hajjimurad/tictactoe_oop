/**
* Created by murad on 08/10/15.
*/

define('board',['knockout'],function(ko){

    function Board(size)
    {
        this._size = size;
        var cells = new Array(this._size * this._size);
        for(var i=0;i<this._size * this._size;i++) {
            cells[i] = ko.observable(0);
        }

        this.getSize = function() {
            return this._size;
        };

        /*
         * Get if cell is used
         */
        this.isCellEmpty = function(x,y) {
            return this.getCell(x,y) === undefined;
        };

        /*
         * Sets info to cell
         */
        this.setCell = function(x,y,status) {

            if(cells[(x-1) * this._size + (y-1)]() !== 0)
                throw "Cell already specified exception";

            cells[(x-1) * this._size + (y-1)](status);
        };

        /*
         * Get cell info
         */
        this.getCell = function(x,y) {
            return cells[(x-1) * this._size + (y-1)]();
        };

        /*
         * Array of cells
         */
        this.getBoardInfo = function() {
            return cells;
        }
    };

    //var boardModule = {
    //    init : Board
    //};
    //
    //return boardModule;

    return Board;
});