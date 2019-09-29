import React, {Component} from 'react'
import logo from "./logo.svg";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

function Header(props){
    const [anchorEl, setAnchorEl] = React.useState(null);
    function handleClick(event){
        setAnchorEl(event.currentTarget);
    }
    function localHandleClose(){
        setAnchorEl(null);
    }

    return (
      <div>
        <header className="App-header">
          <h1>
            <img src={logo} className="App-logo" alt="logo" />
            Christopher O'Bannon
          </h1>
          <Button
            className="menuButton"
            variant="contained"
            color="secondary"
            onClick={handleClick}
          >
            Menu
          </Button>
          <Menu
            className="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={localHandleClose}
          >
            <MenuItem
              className="menu"
              component={Link}
              to="/"
              onClick={localHandleClose}
            >
              Home
            </MenuItem>
            <MenuItem
              className="menu"
              component={Link}
              to="/contact"
              onClick={localHandleClose}
            >
              Contact Information
            </MenuItem>
            <MenuItem
              className="menu"
              component={Link}
              to="/portfolio"
              onClick={localHandleClose}
            >
              My Portfolio
            </MenuItem>
          </Menu>
        </header>
      </div>
    );
}


// class Header extends Component {
// render(){
// return (
//   <div>
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//     </header>
//   </div>
// );
// }
// }


export default Header;