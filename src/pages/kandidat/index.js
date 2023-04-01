import { Grid } from "@mui/material";
import Layout from "../../../components/Layout";
import DataTable from "react-data-table-component";
import { useState } from "react";
import React, { useEffect } from "react";
import FourthButton from "../../../components/FourthButton";
import classes from "./index.module.css";
import { Box } from "@mui/material";
import { FormControl, InputLabel, Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import ThirdButton from "../../../components/ThirdButton";

const Kandidat = () => {
  const [kandidat, setKandidat] = useState([]);
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Organisasi",
      selector: (row) => row.organisasi,
      sortable: true,
      cell: (row) => <p style={{ fontWeight: "bold" }}>{row.organisasi}</p>,
    },
    {
      name: "Kandidat",
      selector: (row) => row.kandidat,
      sortable: true,
      cell: (row) => (
        <div style={{ margin: "1rem 0" }}>
          {row.kandidat.map((k, i) => (
            <div key={i} style={{ margin: ".5rem 0" }}>
              <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center' }}>
                <FourthButton>
                  <div>{k}</div>
                </FourthButton>
                <div style={{display: "flex", flexWrap: 'wrap', justifyContent: 'center'}}>
                  <div style={{margin: '0 .5rem'}}>
                    <ThirdButton>
                      <div>edit</div>
                    </ThirdButton>
                  </div>
                  <ThirdButton>
                    <div>hapus</div>
                  </ThirdButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const dataKandidat = [
    {
      id: 1,
      organisasi: "HIMAFORKA",
      kandidat: ["RIEL", "AYAS", "VILLA", "BILLY"],
    },
    {
      id: 2,
      organisasi: "SEMA",
      kandidat: ["KANDIDAT 1", "KANDIDAT 2"],
    },

  ];

  useEffect(() => {
    setKandidat(dataKandidat);
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
            <h2>Kandidat</h2>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} key="1">
          <div className="box_custom">
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
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={8} key="1">
          <div className="box_custom">
            <h2 style={{ margin: "1rem 0" }}></h2>
            <DataTable pagination columns={columns} data={kandidat} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} key="1">
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
                  <InputLabel id="demo-simple-select-label">
                    Organisasi
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Periode"
                    onChange={handleChange}
                  >
                    <MenuItem value={2022}>HIMAFORKA</MenuItem>
                    <MenuItem value={2023}>SEMA</MenuItem>
                    <MenuItem value={2023}>HIMSI</MenuItem>
                    <MenuItem value={2023}>HMTI</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <div className={classes.form_label}>
                <input
                  className={classes.input}
                  type="text"
                  id="nomer_kandidat"
                  name="nomer_kandidat"
                  placeholder="Nomer kandidat"
                />
              </div>
              <div className={classes.form_label}>
                <input
                  className={classes.input}
                  type="text"
                  id="nama_kandidat"
                  name="nama_kandidat"
                  placeholder="Nama Kandidat"
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

export default Kandidat;
