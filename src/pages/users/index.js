import { Box } from '@mui/material'
import {Grid} from '@mui/material'
import classes from './index.module.css'
import Layout from '../../../components/Layout'
import {CardContent} from '@mui/material'
import CustomTableContainer from '../../../components/CustomTableContainer'
import RoleItem from '../../../components/RoleItem'
import ThirdButton from '../../../components/ThirdButton'
import SecondaryButton from '../../../components/SecondaryButton'
import DataTable from "react-data-table-component";

import React from 'react'
const Users = () => {
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

    const data = [
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
        nama: "Gabriel Allba",
        angkatan: "2021",
        prodi: "Informatika",
        npm: "210711150",
        email: "210711150@students.uajy.ac.id",
      },

    ];
    return (
      <Layout>
        <Box style={{ padding: "1rem" }}>
          
                
                  <DataTable columns={columns} data={data} />
                
              
        </Box>
      </Layout>
    );
}

export default Users