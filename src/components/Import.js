import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container} from '@material-ui/core'
import DeleteCar from '../containers/DeleteCar'

const tableStyle = {
    minWidth: 650,
    color:'green'
  };
  


const Import = (props) => {
    //fill out this component

    return (
        <div>
        <Container style={{width:'75%', marginTop:'60px'}}>
        <h2 style={{color:'blue'}}>COUNT: {props.makes.length}</h2>
        <Button onClick={props.fetchMakes} variant='contained' color='primary'>Import</Button>
        <Table aria-label="simple table" style={tableStyle}>
            <TableHead>
                <TableRow>
                    <TableCell align="right">ID</TableCell>
                    <TableCell align="right">Make</TableCell>
                    <TableCell align="right">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.makes.map((make, idx) => (
                    <TableRow key={make.MakeId}>
                        <TableCell align="right">{make.MakeId}</TableCell>
                        <TableCell align="right">{make.MakeName}</TableCell>
                        <TableCell align="right">
                            <DeleteCar index={idx} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </Container>
        </div>
    )
}

export default Import
