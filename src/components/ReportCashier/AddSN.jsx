import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider, Input } from "@mui/material";

export default function AddSN() {
  const [open, setOpen] = React.useState(false);
  const [inputData, setInputData] = React.useState({
    buildedName: "",
    customerName: "",
    customerTel: "",
    salerName: "",
  });
  const { buildedName, customerName, customerTel, salerName } = inputData;
  const [selectedItem, setSelectedItem] = React.useState({
    partData: [
      {
        category: "CPU",
        typeMax: 1,
        typeAmount: 0,
        listItems: [
          {
            id: "1",
            code: "CR6-001042",
            description:
              "GIGABYTE AORUS RADEON RX6900XT XTREME WATERFORCE WB 16GB GDDR6 256 bit CL 19-31/8/22",
            selectAmount: 1,
            srp: 77900.0,
            promotionPrice: 77900.0,
          },
        ],
      },
      {
        category: "Mainboard",
        typeMax: 1,
        typeAmount: 0,
        listItems: [
          {
            id: "5",
            code: "CR4-000751",
            description: "GIGABYTE Z590 AORUS TACHYON DDR4 LGA1200 CL 19-31/8/22",
            selectAmount: 1,
            srp: 16100.0,
            promotionPrice: 7990,
          },
        ],
      },
      {
        category: "RAM",
        typeMax: 4,
        typeAmount: 0,
        listItems: [
          {
            id: "21",
            code: "ME1-000994",
            description: "KINGSTON FURY IMPACT 8GB (8X1/3200) DDR4 (KF432S20IB/8) NB",
            selectAmount: 2,
            srp: 1150,
            promotionPrice: 950,
          },
          {
            id: "292",
            code: "ME1-000993",
            description: "KINGSTON FURY BEAST16GB (8X2/3200) DDR4 (KF432C16BBK2/16)",
            selectAmount: 2,
            srp: 2190,
            promotionPrice: 1990,
          },
        ],
      },
    ],
  });

  ////onclick เปิด Form ////////////////////////////////////////////////////////////////////
  const handleClickOpen = () => {
    setOpen(true);
    ///ล้างค่า สำหรับทดสอบ
    setInputData((prev) => {
      return { ...prev, buildedName: "", customerName: "", customerTel: "", salerName: "" };
    });
  };

  ////onclick ปิด Form ////////////////////////////////////////////////////////////////////
  const handleClose = () => {
    setOpen(false);
  };
  ////onclick สำหรับกด save SPEC ////////////////////////////////////////////////////////////////////
  const handleSave = () => {
    console.log("กด Save!!", buildedName);
    setInputData((prev) => {
      return {
        ...prev,
        buildedName: buildedNameInput,
        customerName: custNameInput,
        customerTel: custTelInput,
        salerName: salerNameInput,
      };
    });

    setBuildedNameInput("");
    setSalerNameInput("");
    setCustNameInput("");
    setCustTelInput("");
    handleClose();
  };

  ////BuildedName Input ไม่ต้องมี valid
  const [buildedNameInput, setBuildedNameInput] = React.useState("");
  ////SalerName Input ไม่ต้องมี valid
  const [salerNameInput, setSalerNameInput] = React.useState("");
  ////CustName Input ไม่ต้องมี valid
  const [custNameInput, setCustNameInput] = React.useState("");
  ////Phone Num Input Validation///////////////////////////////
  const [custTelInput, setCustTelInput] = React.useState("");
  const [btnSwitch, setBtnSwitch] = React.useState(false);

  const validate = (value) => {
    const pattern9 = /^0[2,3,4,5,7]\d{7}$/;
    const pattern10 = /^(06|08|09)\d{8}$/;
    if (pattern9.test(value)) {
      console.log("เบอร์บ้าน");
      setBtnSwitch(true);
    } else if (pattern10.test(value)) {
      console.log("เบอร์มือถือ");
      setBtnSwitch(true);
    } else {
      console.log("ไม่ใช่เบอร์ละ");
      setBtnSwitch(false);
    }

    return "";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const patternInt = /^[0-9\b]+$/;
    const dataValidation = patternInt.test(value);

    if (e.target.id === "cusTelInput") {
      console.log("แกกำลังกรอกเบอร์โทรศัพท์ ");
      if (value === "" || dataValidation) {
        setCustTelInput(value);
        setInputData((prev) => {
          return { ...prev, customerTel: value };
        });
      }
    } else if (e.target.id === "custNameInput") {
      console.log("แกกำลังกรอกชื่อลูกค้า");
      setCustNameInput(value);
    } else if (e.target.id === "salerNameInput") {
      setSalerNameInput(value);
    } else if (e.target.id === "buildedName") {
      setBuildedNameInput(value);
    }
  };

  React.useEffect(() => {
    validate(custTelInput);
  }, [custTelInput]);

  const digitDisplay = custTelInput.length > 1 ? "Digits" : "Digit";

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add SN
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="none">
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent sx={{ width: "71vw" }}>
          {/* <DialogContentText>Enter Your Build Name</DialogContentText> */}
          <DialogContentText
            sx={{ backgroundColor: "#414151", fontSize: 18, color: "#e6e6e6", px: "10px" }}
          >
            Add S/N
          </DialogContentText>
          <DialogContent
            sx={{
              borderLeft: "10px solid #0033E6",
              backgroundColor: "#4141",

              flexDirection: "column",
            }}
          >
            <DialogContentText
              container
              sx={{
                display: "flex",
                fontSize: 16,
                color: "#3d3d3d",
                textAlign: "center",
              }}
            >
              <Box sx={{ flexGrow: 0.2, width: "4.5%" }}>No.</Box>
              <Box sx={{ flexGrow: 0.3, width: "14%" }}>Code</Box>
              <Box sx={{ flexGrow: 1, width: "50.5%" }}>Description</Box>
              <Box sx={{ flexGrow: 0.2, width: "7%" }}>QTY</Box>
              <Box sx={{ flexGrow: 0.2, width: "11%" }}>Price</Box>
              <Box sx={{ flexGrow: 0.2, width: "13%" }}>Total</Box>
            </DialogContentText>
            <Divider />
            {selectedItem.partData.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {item.listItems.map((miniItem, miniIndex) => {
                    return (
                      <React.Fragment key={miniIndex}>
                        <Box
                          container
                          sx={{ display: "flex", textAlign: "center", my: "10px", fontSize: 14 }}
                        >
                          <Box sx={{ flexGrow: 0.2, width: "4.5%" }}>
                            {miniIndex < 1 ? index + 1 : <></>}
                          </Box>
                          <Box sx={{ flexGrow: 0.3, width: "14%" }}>{miniItem.code}</Box>
                          <Box sx={{ flexGrow: 1, width: "50.5%" }}>{miniItem.description}</Box>
                          <Box sx={{ flexGrow: 0.2, width: "7%" }}>{miniItem.selectAmount}</Box>
                          <Box sx={{ flexGrow: 0.2, width: "11%" }}>{miniItem.srp}</Box>
                          <Box sx={{ flexGrow: 0.2, width: "13%" }}>
                            {miniItem.srp * miniItem.selectAmount}
                          </Box>
                        </Box>
                        <Box sx={{ overflow: "auto", maxHeight: "150px" }}>
                          {[...Array(miniItem.selectAmount)].map((item3, index3) => {
                            return (
                              <React.Fragment key={index3}>
                                <Box
                                  container
                                  sx={{
                                    display: "flex",
                                    textAlign: "center",
                                    my: "4.5px",
                                    ml: "5.5vw",
                                  }}
                                >
                                  <TextField
                                    size="small"
                                    id="filled-basic"
                                    label="S/N"
                                    variant="filled"
                                    sx={{ zoom: "80%", width: "450px" }}
                                  />
                                </Box>
                              </React.Fragment>
                            );
                          })}
                        </Box>
                        <Divider />
                      </React.Fragment>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </DialogContent>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error">
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="success">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
