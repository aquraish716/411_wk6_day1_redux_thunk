import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const tableStyle = {
    minWidth: 650,
    color:'green'
  };
  


const Import = (props) => {
    //fill out this component
const [anchorEl, setAnchorEl] = React.useState(null);

const handleClick = event => {
    setAnchorEl(event.currentTarget);
};

const handleClose = () => {
    setAnchorEl(false);
};

const handleCloseMenu = (index) => {
    props.deleteMake(index)
    handleClose()
    
}
  
    
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
                {props.makes.map((make, index) => (
                    <TableRow key={make.MakeId}>
                        <TableCell align="right">{make.MakeId}</TableCell>
                        <TableCell align="right">{make.MakeName}</TableCell>
                        <TableCell align="right">
                            <IconButton onClick={handleClick}>
                                <MoreVertIcon />
                            </IconButton>
                            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClick={handleCloseMenu}>
                                <MenuItem style={{height:"50", width:"100"}}>DELETE</MenuItem>
                            </Menu>
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
