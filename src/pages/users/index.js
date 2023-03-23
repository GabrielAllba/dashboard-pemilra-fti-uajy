import { Box, Card } from '@mui/material'
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
      {
        id: 4,
        no: 4 ,
        nama: "Gabriel Allba",
        angkatan: "2021",
        prodi: "Informatika",
        npm: "210711150",
        email: "210711150@students.uajy.ac.id",
      },
      {
        id: 5,
        no: 5 ,
        nama: "Gabriel Allba",
        angkatan: "2021",
        prodi: "Informatika",
        npm: "210711150",
        email: "210711150@students.uajy.ac.id",
      },
      {
        id: 6,
        no: 6 ,
        nama: "Gabriel Allba",
        angkatan: "2021",
        prodi: "Informatika",
        npm: "210711150",
        email: "210711150@students.uajy.ac.id",
      },
      {
        id: 7,
        no: 7 ,
        nama: "Gabriel Allba",
        angkatan: "2021",
        prodi: "Informatika",
        npm: "210711150",
        email: "210711150@students.uajy.ac.id",
      },
      {
        id: 8,
        no: 8 ,
        nama: "Gabriel Allba",
        angkatan: "2021",
        prodi: "Informatika",
        npm: "210711150",
        email: "210711150@students.uajy.ac.id",
      },
      {
        id: 9,
        no: 9 ,
        nama: "Gabriel Allba",
        angkatan: "2021",
        prodi: "Informatika",
        npm: "210711150",
        email: "210711150@students.uajy.ac.id",
      },
      {
        id: 12,
        no: 12,
        nama: "Gabriel Allba",
        angkatan: "2021",
        prodi: "Informatika",
        npm: "210711150",
        email: "210711150@students.uajy.ac.id",
      },
      {
        id: 11,
        no: 11 ,
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
          <Card variant='outlined'>
            <DataTable columns={columns} data={data} />
          </Card>
        </Box>
      </Layout>
    );
}

export default Users