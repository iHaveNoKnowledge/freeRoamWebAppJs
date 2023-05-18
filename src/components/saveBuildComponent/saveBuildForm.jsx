import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [collector, setCollector] = React.useState("");
  const [inputName, setInputName] = React.useState({
    buildedName: "",
    customerName: "",
  });
  const { buildedName, customerName } = inputName;
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
            selectAmount: 1,
            srp: 1150,
            promotionPrice: 950,
          },
        ],
      },
    ],
  });

  const handleClickOpen = () => {
    setOpen(true);
    setInputName((prev) => {
      return { ...prev, buildedName: "" };
    });
    setCollector("");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    console.log("กด Save!!", buildedName);
    setCollector(buildedName);
    handleClose();
  };
  // น่าจะไม่ต้องใช้ ตอนแรกว่าจะใช้ อิงว่า event มาจาก ชื่อ ref อะไร แต่ปัจจุบัน ใช้ e.target.id แทน รอลบเลย ถ้า id มัน works
  //   const buildedNameInput = React.useRef();
  //   const cusNameInput = React.useRef();
  //   const cusTelInput = React.useRef(); ^0[2-9]\d{7}$

  const [custNameInput, setCustNameInput] = React.useState("");
  const [custTelInput, setCustTelInput] = React.useState("");
  const [btnSwitch, setBtnSwitch] = React.useState(false);

  ///Validation Parts///////////////////////////////
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
    console.log("เช็คของ", e.target.id);
    const value = e.target.value;
    const patternInt = /^[0-9\b]+$/;
    const dataValidation = patternInt.test(value);
    if (e.target.id === "cusTelInput") {
      console.log("แกกำลังกรอกเบอร์โทรศัพท์ ");
      if (value === "" || dataValidation) {
        setCustTelInput(value);
      }
      // validate(value);
    } else {
      console.log("แกกำลังกรอกอย่างที่ไม่ใช่เบอร์โทรศัพท์");
      setCustNameInput(value);
      // validate(value);
    }
  };

  React.useEffect(() => {
    validate(custTelInput);
  }, [custTelInput]);

  const digitDisplay = custTelInput.length > 1 ? "Digits" : "Digit";

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Save
      </Button>
      <Box>Stateมีค่า= {collector ? collector : "ว่าง"}</Box>

      <Dialog open={open} onClose={handleClose}>
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent sx={{ width: "34vw" }}>
          {/* <DialogContentText>Enter Your Build Name</DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="buildedName"
            label="กรอกชื่อของ Set คอมประกอบ"
            type="text"
            fullWidth
            variant="standard"
            value={buildedName}
            onChange={(e) => {
              setInputName((prev) => {
                return { ...prev, buildedName: e.target.value };
              });
            }}
          />
          <DialogContent sx={{ borderLeft: "50px dashed #0033E6", backgroundColor: "#4141" }}>
            <DialogContentText sx={{ backgroundColor: "#414151", fontSize: 18, color: "#e6e6e6" }}>
              ข้อมูลติดต่อลูกค้า
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="cusNameInput"
              label="ชื่อ"
              type="email"
              fullWidth
              variant="standard"
              value={custNameInput}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="cusTelInput"
              label={
                <Box>
                  เบอร์ติดต่อ{" "}
                  {custTelInput.length !== 0 ? (
                    <>
                      {custTelInput.length} {digitDisplay}
                    </>
                  ) : (
                    ""
                  )}
                </Box>
              }
              type="email"
              fullWidth
              variant="standard"
              value={custTelInput}
              onChange={handleChange}
            />
          </DialogContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button error disabled={!btnSwitch} onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
