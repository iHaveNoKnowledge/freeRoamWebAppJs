import React from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import logoHeader from "../assets/itLogo-1.png";

const TableDocument = () => {
  const [reportedData, setReportedData] = React.useState({
    img: "",
    branch: "",
    contact: "",
  });

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
          <Image src={logoHeader} style={image} />
        </View>

        <View style={tableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi!
          </Text>
        </View>

        <View style={tableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>Column</Text>
        </View>
      </View>
    );
  };

  const createTableRowIT = (x) => {
    return (
      <View style={tableRowStyle}>
        <View style={firstTableColStyle}>
          {/* <Text style={tableCellStyle}>Element</Text> */}
          {createTableRowITDYN(x)}
        </View>
      </View>
    );
  };

  const createTableHeaderITDYN = () => {
    return (
      <View style={tableRowStyle} fixed>
        <View style={firstTableColHeaderStyle}>
          <Image src={logoHeader} style={image} />
        </View>

        <View style={tableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi!
          </Text>
        </View>

        <View style={tableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>Column</Text>
        </View>
      </View>
    );
  };

  const WrapText = (text) => (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {text?.match(/\w+|\W+/g)?.map((seg, i) => (
        <Text key={i}>{seg}</Text>
      ))}
    </View>
  );

  const createTableRowITDYN = (x) => {
    const formattedNumber = (x - (x - 1)).toString().padStart(4, "0");
    switch (true) {
      case x === 1:
        return (
          <View style={tableRowStyle}>
            <View style={firstTableColStyle}>
              <Text style={tableCellStyle}>Element</Text>
            </View>

            <View style={tableColStyle}>
              <Text style={tableCellStyle}>vbvb</Text>
            </View>
          </View>
        );

      case x > 1:
        return (
          <View style={(tableRowStyle, testDisplay)}>
            <View>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ ...inlineStyle, ...inlineOrder }}>
                  <Text>{WrapText("1")}</Text>
                </View>
                <View style={{ ...inlineStyle, ...inlineCode }}>
                  <Text>{WrapText(`XXX-${formattedNumber}`)}</Text>
                </View>
                <View style={{ ...inlineStyle, ...inlineDescr }}>
                  <Text>{WrapText("Description")}</Text>
                </View>
                <View style={{ ...inlineStyle, ...inlineQTY }}>
                  <Text>{WrapText("QTY")}</Text>
                </View>
                <View style={{ ...inlineStyle, ...inlinePrice }}>
                  <Text>{WrapText("Price")}</Text>
                </View>
                <View style={{ ...inlineStyle, ...inlineTotal }}>
                  <Text>{WrapText("Total")}</Text>
                </View>
              </View>
            </View>

            {[...Array(x - 1)].map((table, index) => {
              const formattedNumberx = (index + 2).toString().padStart(4, "0");
              return (
                <View key={index}>
                  <View break={true} style={{ display: "flex", flexDirection: "row" }}>
                    <View style={{ ...inlineStyle, ...inlineOrder }}>
                      <Text>{WrapText(`${2 + index}`)}</Text>
                    </View>
                    <View style={{ ...inlineStyle, ...inlineCode }}>
                      <Text>{WrapText(`XXX-${formattedNumberx}`)}</Text>
                    </View>
                    <View style={{ ...inlineStyle, ...inlineDescr }}>
                      <Text>{WrapText("Description")}</Text>
                    </View>
                    <View style={{ ...inlineStyle, ...inlineQTY }}>
                      <Text>{WrapText("QTY")}</Text>
                    </View>
                    <View style={{ ...inlineStyle, ...inlinePrice }}>
                      <Text>{WrapText("Price")}</Text>
                    </View>
                    <View style={{ ...inlineStyle, ...inlineTotal }}>
                      <Text>{WrapText("Total")}</Text>
                    </View>
                  </View>
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
          {createTableHeaderIT()}
          {createTableRowIT(50)}
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
  // width: "28vh",
  width: "100%",
  borderStyle: "solid",
  borderColor: "#000",
  borderBottomColor: "#000",
  borderWidth: 1,
  backgroundColor: "#0033E6",
  display: "flex",
  justifyContent: "center",
};

const tableColHeaderStyle = {
  // width: "28vh",
  width: "100%",
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
  // width: "28vh",
  width: "100%",
  borderStyle: "solid",
  borderColor: "#000",
  borderWidth: 1,
  borderTopWidth: 0,
  whiteSpace: "normal",
};

const tableColStyle = {
  // width: "28vh",
  width: "100%",
  borderStyle: "solid",
  borderColor: "#000",
  borderWidth: 1,
  borderLeftWidth: 0,
  borderTopWidth: 0,
  whiteSpace: "pre",
};

const tableCellHeaderStyle = {
  margin: 4,
  fontSize: 12,
  fontWeight: "bold",
  width: 160,
};

const inlineStyle = { padding: "10px", fontSize: 10 };
const inlineOrder = { width: "6.5%" };
const inlineCode = { width: "14%" };
const inlineDescr = { width: "37.5%" };
const inlineQTY = { width: "14%" };
const inlinePrice = { width: "14%" };
const inlineTotal = { width: "14%" };

const tableCellStyle = {
  margin: 5,
  fontSize: 10,
  width: 160,
  flexGrow: 0,
  textAlign: "left",
};

const image = {
  marginVertical: 1,
  marginHorizontal: 5,
  backgroundColor: "#0033E6",
};

const testDisplay = {
  margin: 5,
  display: "flex",
};

export default TableDocument;
