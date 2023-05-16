import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import TableDocument from "./components/TableDocument";

const App = () => {
  class Table {
    constructor(colNames = [], rows = 0) {
      this.colNames = colNames;
      this.rows = rows;
    }

    displayDimension() {
      const colsAMT = this.colNames.length;
      let rowAMT;
      if (typeof rows === "number") {
        rowAMT = this.rows;
      } else if (Array.isArray(this.rows)) {
        rowAMT = this.rows.length;
      }

      console.log("TableDimension: Header: ", colsAMT, ", Row:", rowAMT);
    }
  }

  const testTable = new Table(["name", "age"], 3);
  testTable.displayDimension();

  return (
    <PDFViewer style={viewerStyle}>
      <TableDocument />
    </PDFViewer>
    // <TableDocument />
  );
};

const viewerStyle = {
  display: "block",
  margin: "0 auto",
  width: "70vw",
  height: "90vh",
};

export default App;
