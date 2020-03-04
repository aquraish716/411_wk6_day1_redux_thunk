import React, { Fragment, useState } from 'react'
import {
    IconButton,
    Menu,
    MenuItem
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'


const DeleteCar = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);

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
        <Fragment>
            <IconButton onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            <Menu  anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem style={{height:"50", width:"100"}} onClick={() => handleCloseMenu(props.index)}>DELETE</MenuItem>
            </Menu>
        </Fragment>
    )
}

export default DeleteCar