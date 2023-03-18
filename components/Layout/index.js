import Navbar from '../Navbar'
import { Container } from '@mui/material';

export default function Layout(props){
    return (
      <>
        <Navbar></Navbar>
        <Container maxWidth="lg">{props.children}</Container>
      </>
    );
}