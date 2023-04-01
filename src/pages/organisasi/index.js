import { Grid } from "@mui/material";
import Layout from "../../../components/Layout";
import DataTable from "react-data-table-component";
import { useState } from "react";
import React, { useEffect } from "react";
import FourthButton from "../../../components/FourthButton";
import classes from "./index.module.css";
import { Box } from "@mui/material";
import {FormControl, InputLabel, Select} from "@mui/material";
import {MenuItem} from "@mui/material";
const Organisasi = () => {
  const [periode, setPeriode] = useState([]);
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Periode",
      selector: (row) => row.periode,
      sortable: true,
      cell: (row) => <p style={{ fontWeight: "bold" }}>{row.periode}</p>,
    },
    {
      name: "Organisasi",
      selector: (row) => row.organisasi,
      sortable: true,
      cell: (row) => (
        <div style={{ margin: "1rem 0" }}>
          {row.organisasi.map((org, i) => (
            <div key={i} style={{ margin: ".5rem 0" }}>
              <FourthButton>
                <div>{org}</div>
              </FourthButton>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const dataperiode = [
    {
      id: 1,
      periode: "2021/2022",
      organisasi: ["HIMAFORKA", "SEMA", "HIMSI", "HMTI"],
    },
    {
      id: 2,
      periode: "2022/2023",
      organisasi: ["HIMAFORKA", "SEMA"],
    },
  ];

  useEffect(() => {
    setPeriode(dataperiode);
  }, []);

   const [age, setAge] = React.useState("");

   const handleChange = (event) => {
     setAge(event.target.value);
   };

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} key="1">
          <div className="box_custom">
            <h2>Organisasi</h2>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} key="1">
          <div className="box_custom">
            <h2 style={{ margin: "1rem 0" }}>Organisasi</h2>
            <DataTable pagination columns={columns} data={periode} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} key="1">
          <div className="box_custom">
            <form
              action="/send-data-here"
              method="post"
              className={classes.form}
            >
              <label className={classes.label} htmlFor="sdfd">
                <h2 className={classes.label_inner}>Organisasi</h2>
              </label>
              <Box sx={{ minWidth: 120 }}>
                <FormControl size="small" fullWidth>
                  <InputLabel id="demo-simple-select-label">Periode</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Periode"
                    onChange={handleChange}
                  >
                    <MenuItem value={2022}>2022</MenuItem>
                    <MenuItem value={2023}>2023</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <div className={classes.form_label}>
                <input
                  className={classes.input}
                  type="text"
                  id="nama_organisasi"
                  name="nama_organisasi"
                  placeholder="Nama organisasi"
                />
              </div>
              <div className={classes.form_label}>
                <button className={classes.submit} type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Organisasi;
