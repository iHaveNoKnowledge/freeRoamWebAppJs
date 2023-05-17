export class Table {
  /**
   * Create a new Table object.
   * @param {any[]} colNames - The column names. เช่น ["name", "age"] = 2cols
   * @param {number|any[]} rows - The number of rows or an array of rows. ใส่เลขจะได้จำนวนrow, ใส่ array จะนับจำนวน row จาก array.length
   * @returns {Table} The new Table object.
   */
  constructor(colNames = [], rows = 0 || []) {
    this.colNames = colNames;
    this.rows = rows;
  }

  displayDimension() {
    const colsAMT = this.colNames.length;
    let rowAMT;
    if (typeof this.rows == "number") {
      rowAMT = this.rows;
    } else if (Array.isArray(this.rows)) {
      rowAMT = this.rows.length;
    }

    console.log("TableDimension: Header: ", colsAMT, ", Row:", rowAMT);
  }
}
