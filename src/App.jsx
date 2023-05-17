import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import TableDocument from "./components/TableDocument";
import { Table } from "./components/classes";
import FormDialog from "./components/saveBuildComponent/saveBuildForm";

const App = () => {
  const testTable = new Table(["แมว", "หมา"]);
  testTable.displayDimension();

  return (
    <>
      <FormDialog />
      <PDFViewer style={viewerStyle}>
        <TableDocument />
      </PDFViewer>
    </>
  );
};

const viewerStyle = {
  display: "block",
  margin: "0 auto",
  width: "70vw",
  height: "90vh",
};

export default App;
