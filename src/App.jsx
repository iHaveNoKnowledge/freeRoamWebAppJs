import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import TableDocument from "./components/TableDocument";
import { Table } from "./components/classes";
import FormDialog from "./components/saveBuildComponent/saveBuildForm";
import AddSN from "./components/ReportCashier/AddSN";
import FormikLoginForm from "./components/forms/reactFormik";

const App = () => {
  const testTable = new Table(["แมว", "หมา"]);
  testTable.displayDimension();

  return (
    <>
      {/* <FormDialog />
      <AddSN />
      <PDFViewer style={viewerStyle}>
        <TableDocument />
      </PDFViewer> */}
      <FormikLoginForm />
      <div>แมว</div>
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
