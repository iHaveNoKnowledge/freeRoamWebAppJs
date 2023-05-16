import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import TableDocument from "./components/TableDocument";

const App = () => {
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
