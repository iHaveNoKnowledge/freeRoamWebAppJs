import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider, FormControl, Input } from "@mui/material";
import { useForm } from "react-hook-form";

export default function AddSN() {
  const { register, handleSubmit, setValue, watch } = useForm();
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
            srp: 1000,
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
  ////onclick สำหรับกด save  ////////////////////////////////////////////////////////////////////
  const handleSave = () => {
    console.log("กด Save!! S/N");
    handleClose();
  };

  let totalPrice = 0;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add SN
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="none">
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent sx={{ width: "71vw", minWidth: "700px" }}>
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
              <Box
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
              </Box>
              <Divider />
              {selectedItem.partData.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    {item.listItems.map((miniItem, miniIndex) => {
                      totalPrice += miniItem.srp * miniItem.selectAmount;
                      return (
                        <React.Fragment key={miniIndex}>
                          <Box
                            // container
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

                          {/* S/N Part */}
                          <Box sx={{ overflow: "auto", maxHeight: "150px" }}>
                            {[...Array(miniItem.selectAmount)].map((_, index3) => {
                              return (
                                <React.Fragment key={index3}>
                                  <Box
                                    // container
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
                                      {...register(`Type${index}Item${miniIndex}SN${index3}`)}
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

              <Box sx={{ display: "flex", mt: "10px" }}>
                <Box sx={{ flexGrow: 9.5, textAlign: "end", mr: "5px" }}>
                  <Box>รวมเงิน</Box>
                  <Box>ภาษีมูลค่าเพิ่ม</Box>
                  <Box>รวมทั้งสิ้น(รวมภาษี)</Box>
                </Box>
                <Box sx={{ flexGrow: 0.5, textAlign: "end" }}>
                  <Box sx={{ pt: "2px" }}>
                    {(totalPrice - totalPrice * (7 / 107))
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Box>
                  <Box sx={{ pt: "2px" }}>
                    {(totalPrice * (7 / 107)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Box>
                  <Box sx={{ pt: "2px" }}>
                    {totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Box>
                </Box>
              </Box>
            </DialogContent>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained" color="error">
              Cancel
            </Button>
            <Button onClick={handleSave} variant="contained" color="success" type="submit">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
