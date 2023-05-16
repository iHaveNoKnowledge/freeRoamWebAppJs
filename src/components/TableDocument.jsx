import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";

const TableDocument = () => {
<<<<<<< HEAD
=======
  const [reportedData, setReportedData] = React.useState({
    img: "",
    branch: "",
    contact: "",
  });

<<<<<<< HEAD
>>>>>>> parent of 3d07800 (update)
=======
>>>>>>> parent of 3d07800 (update)
  const createTableHeader = () => {
    return (
      <View style={tableRowStyle} fixed>
        <View style={firstTableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>Column</Text>
        </View>

        <View style={tableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>Column</Text>
        </View>

        <View style={tableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>Column</Text>
        </View>

        <View style={tableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>Column</Text>
        </View>

        <View style={tableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>Column</Text>
        </View>
      </View>
    );
  };

  const createTableRow = () => {
    return (
      <View style={tableRowStyle}>
        <View style={firstTableColStyle}>
          <Text style={tableCellStyle}>Element</Text>
        </View>

        <View style={tableColStyle}>
          <Text style={tableCellStyle}>Element</Text>
        </View>

        <View style={tableColStyle}>
          <Text style={tableCellStyle}>Element</Text>
        </View>

        <View style={tableColStyle}>
          <Text style={tableCellStyle}>Element</Text>
        </View>

        <View style={tableColStyle}>
          <Text style={tableCellStyle}>Element</Text>
        </View>
      </View>
    );
  };

  const createTableHeaderIT = () => {
    return (
      <View style={tableRowStyle} fixed>
        <View style={firstTableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>Column</Text>
        </View>

        <View style={tableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>Column</Text>
        </View>

        <View style={tableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>Column</Text>
        </View>
      </View>
    );
  };

  const createTableRowIT = () => {
    return (
      <View style={tableRowStyle}>
        <View style={firstTableColStyle}>
          <Text style={tableCellStyle}>Element</Text>
        </View>

        <View style={tableColStyle}>
          <Text style={tableCellStyle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, dolore.
          </Text>
        </View>

        <View style={tableColStyle}>
          <Text style={tableCellStyle}>Element</Text>
        </View>
      </View>
    );
  };

  const createTableHeaderITDYN = () => {
    return (
      <View style={tableRowStyle} fixed>
        <View style={firstTableColHeaderStyle}>
          <Image src={logoHeader} style={image} />
>>>>>>> parent of 3d07800 (update)
        </View>

        <View style={tableColStyle}>
          <Text style={tableCellStyle}>Element</Text>
        </View>

        <View style={tableColStyle}>
          <Text style={tableCellStyle}>Element</Text>
        </View>
      </View>
    );
  };

  const createTableRowITDYN = (x) => {
    switch (true) {
      case x === 1:
        return (
          <View style={tableRowStyle}>
            <View style={firstTableColStyle}>
              <Text style={tableCellStyle}>Element</Text>
            </View>
          </View>
        );

      case x > 1:
        return (
          <View style={tableRowStyle}>
            <View style={firstTableColStyle}>
              <Text style={tableCellStyle}>Element</Text>
            </View>

            {[...Array(x - 1)].map((table, index) => {
              return (
                <View style={tableColStyle} key={index}>
                  <Text style={tableCellStyle}>Element</Text>
                </View>
              );
            })}
          </View>
        );

      default:
        break;
    }
  };

  return (
    <Document>
      <Page style={pageStyle} size="A4" orientation="portrait">
        <View style={tableStyle}>
          {createTableHeaderITDYN()}
          {createTableRowITDYN(1)}
          {createTableRowIT()}
        </View>
      </Page>
    </Document>
  );
};

const pageStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  paddingTop: 16,
  paddingHorizontal: 40,
  paddingBottom: 56,
};

const tableStyle = {
  display: "table",
  width: "auto",
};

const tableRowStyle = {
  flexDirection: "row",
  display: "flex",
};

const firstTableColHeaderStyle = {
  width: "28vh",
  borderStyle: "solid",
  borderColor: "#000",
  borderBottomColor: "#000",
  borderWidth: 1,
  backgroundColor: "#bdbdbd",
  display: "flex",
  justifyContent: "center",
};

const tableColHeaderStyle = {
  width: "28vh",
  borderStyle: "solid",
  borderColor: "#000",
  borderBottomColor: "#000",
  borderWidth: 1,
  borderLeftWidth: 0,
  backgroundColor: "#bdbdbd",
  display: "flex",
  justifyContent: "center",
};

const firstTableColStyle = {
  width: "28vh",
  borderStyle: "solid",
  borderColor: "#000",
  borderWidth: 1,
  borderTopWidth: 0,
};

const tableColStyle = {
  width: "28vh",
  borderStyle: "solid",
  borderColor: "#000",
  borderWidth: 1,
  borderLeftWidth: 0,
  borderTopWidth: 0,
};

const tableCellHeaderStyle = {
  margin: 4,
  fontSize: 12,
  fontWeight: "bold",
  marginLeft: "auto",
  marginRight: "auto",
};

>>>>>>> parent of 3d07800 (update)
const tableCellStyle = {
  margin: 5,
  marginLeft: "auto",
  marginRight: "auto",
  fontSize: 10,
  display: "flex",
  flexWrap: "wrap",
  whiteSpace: "normal",
};

const image = {
  marginVertical: 1,
  marginHorizontal: 50,
  backgroundColor: "#0033E6",
};

export default TableDocument;
