import {Grid} from '@mui/material'
import Layout from '../../../components/Layout'
import DataTable from "react-data-table-component";
import { useState } from 'react'
import React, { useEffect } from 'react'
import ProdiAnalytics from '../../../components/ProdiAnalytics'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Users = () => {
  const [dataInforVoter, setDataInforVoter] = useState([])
  const [dataTekdusVoter, setDataTekdusVoter] = useState([]);
  const [dataSiVoter, setDataSiVoter] = useState([]);

  const [selector, setSelector] = useState("User yang sudah login")

    const columns = [
      {
        name: "No",
        selector: (row) => row.no,
        sortable: true,
      },
      {
        name: "Nama",
        selector: (row) => row.nama,
        sortable: true,
      },
      {
        name: "Angkatan",
        selector: (row) => row.angkatan,
        sortable: true,
      },
      {
        name: "Prodi",
        selector: (row) => row.prodi,
        sortable: true,
      },
      {
        name: "NPM",
        selector: (row) => row.npm,
        sortable: true,
      },
      {
        name: "Email",
        selector: (row) => row.email,
        sortable: true,
      },
    ];

    const infor_vote = [
      {
        id: 1,
        no: 1 ,
        nama: "Gabriel Allba",
        angkatan: "2021",
        prodi: "Informatika",
        npm: "210711150",
        email: "210711150@students.uajy.ac.id",
      },
      {
        id: 2,
        no: 2 ,
        nama: "A",
        angkatan: "2022",
        prodi: "A",
        npm: "A",
        email: "A@students.uajy.ac.id",
      },
      {
        id: 3,
        no: 3 ,
        nama: "Gabriel Allba",
        angkatan: "2021",
        prodi: "Informatika",
        npm: "210711150",
        email: "210711150@students.uajy.ac.id",
      },
      {
        id: 10,
        no: 10 ,
        nama: "Gabriel Allba",
        angkatan: "2021",
        prodi: "Informatika",
        npm: "210711150",
        email: "210711150@students.uajy.ac.id",
      },
    ];

    const tekdus_vote = [
      {
        id: 1,
        no: 1,
        nama: "Gabriel Allba",
        angkatan: "2021",
        prodi: "Informatika",
        npm: "210711150",
        email: "210711150@students.uajy.ac.id",
      },
    ];

    const si_vote = [
      {
        id: 1,
        no: 1,
        nama: "Gabriel ",
        angkatan: "2021",
        prodi: "Informatika",
        npm: "210711150",
        email: "210711150@students.uajy.ac.id",
      },
    ];

    useEffect(() => {
      setDataInforVoter(infor_vote)
      setDataTekdusVoter(tekdus_vote)
      setDataSiVoter(si_vote)
    },[])

    const data_infor_vote = [
      {
        name: "Riel",
        pv: 2,
      },
      {
        name: "2022",
        pv: 3,
      },
      {
        name: "2023",
        pv: 8,
      },
    ];

    const data_tekdus_vote = [
      {
        name: "Riel",
        pv: 1,
      },
      {
        name: "2022",
        pv: 2,
      },
      {
        name: "2023",
        pv: 5,
      },
    ];
    const data_infor = [
      {
        name: "Riel",
        pv: 25,
      },
      {
        name: "2022",
        pv: 63,
      },
      {
        name: "2023",
        pv: 18,
      },
    ];

    const data_tekdus = [
      {
        name: "Riel",
        pv: 15,
      },
      {
        name: "2022",
        pv: 23,
      },
      {
        name: "2023",
        pv: 58,
      },
    ];
    


    const handleChange = (event) => {
      setSelector(event.target.value);
    };

    return (
      <Layout>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={6} key="1">
            <div className="box_custom">
              <FormControl size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">Selector</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selector}
                  label="Periode"
                  onChange={handleChange}
                >
                  <MenuItem value={"User yang sudah login"}>User yang sudah login</MenuItem>
                  <MenuItem value={"User yang sudah vote"}>User yang sudah vote</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
          {selector == "User yang sudah vote" && (
            <>
              <Grid item xs={12} sm={12} md={12} key="1">
                <div className="box_custom">
                  <h2>User yang sudah vote</h2>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={8} key="1">
                <div className="box_custom">
                  <h2 style={{ margin: "1rem 0" }}>Informatika</h2>
                  <DataTable pagination columns={columns} data={dataInforVoter} />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={4} key="4">
                <ProdiAnalytics data={data_infor_vote}></ProdiAnalytics>
              </Grid>
              <Grid item xs={12} sm={12} md={8} key="1">
                <div className="box_custom">
                  <h2 style={{ margin: "1rem 0" }}>Teknik Industri</h2>

                  <DataTable pagination columns={columns} data={dataTekdusVoter} />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={4} key="4">
                <ProdiAnalytics data={data_tekdus_vote}></ProdiAnalytics>
              </Grid>
            </>
          )}
          {selector == "User yang sudah login" && (
            <>
              <Grid item xs={12} sm={12} md={12} key="1">
                <div className="box_custom">
                  <h2>User yang sudah login</h2>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={8} key="1">
                <div className="box_custom">
                  <h2 style={{ margin: "1rem 0" }}>Informatika</h2>

                  <DataTable pagination columns={columns} data={dataInforVoter} />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={4} key="4">
                <ProdiAnalytics data={data_infor}></ProdiAnalytics>
              </Grid>
              <Grid item xs={12} sm={12} md={8} key="1">
                <div className="box_custom">
                  <h2 style={{ margin: "1rem 0" }}>Teknik Industri</h2>
                  <DataTable pagination columns={columns} data={dataTekdusVoter} />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={4} key="4">
                <ProdiAnalytics data={data_tekdus}></ProdiAnalytics>
              </Grid>
            </>
          )}
        </Grid>
      </Layout>
    );
}

export default Users