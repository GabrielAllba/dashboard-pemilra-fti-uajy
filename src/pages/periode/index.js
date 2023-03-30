import { Grid } from "@mui/material";
import Layout from "../../../components/Layout";
import DataTable from "react-data-table-component";
import { useState } from "react";
import React, { useEffect } from "react";
import FourthButton from "../../../components/FourthButton";


const Periode = () => {
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
      cell: (row) => <p style={{fontWeight: 'bold'}}>{row.periode}</p>,
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

  
  return (
    <Layout>
      <Grid container spacing={2}>
        
            <Grid item xs={12} sm={12} md={12} key="1">
              <div className="box_custom">
                <h2>Periode</h2>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} key="1">
              <div className="box_custom">
                <h2 style={{ margin: "1rem 0" }}>Periode</h2>
                <DataTable pagination columns={columns} data={periode} />
              </div>
            </Grid>
            
            
          
      </Grid>
    </Layout>
  );
};

export default Periode;
