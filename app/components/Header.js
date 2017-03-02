import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const MenuIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </SvgIcon>
);
const Header = React.createClass ({
    getInitialState: function() {
        return {open: false};
    },
    style: {
        appbar: {
            position: "fixed", top: 0, zIndex: 1200
        },
        link: {
            textDecoration: "none"
        },
        button: {
            position: "relative", paddingLeft: 16, paddingRight: 16,
            marginRight: 10, marginTop: 5,
            color: 'rgba(0, 0, 0, 0.87)'
        }

    },
    handleToggle:function(){
        this.setState({open: !this.state.open})
    },
    handleClose :function () {
         this.setState({open: false})
    },
    render(){
         // let title='会喝水的鱼';
        if (this.props.admin) {
            title = "Blog   Admin   Panel";

            this.style.appbar.background = '#616161';
        } else {
            this.style.appbar.background = "rgb(0,188,212)"
        }
        return(
            <div>
            <AppBar
                style={this.style.appbar}
                iconElementLeft={
                    <IconButton  onTouchTap={this.handleToggle} >
                        <MenuIcon />
                    </IconButton>

                }
                iconElementRight={
                                <IconButton
                                    iconStyle={{color: "white"}}
                                    iconClassName="muidocs-icon-custom-github"
                                    href="https://github.com/lwcmgowl/react"
                                    linkButton={true}
                                />
                }

                zDepth={0}
            />
            <Drawer
                docked={false}
                width={260}
                open={this.state.open}
                style={{zindex:1300}}
                onRequestChange={(open) => this.setState({open})}
                    >
                    <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
            </Drawer>
            </div>
        )

    }
});

export default Header;
// class Header extends React.Component {
//     render() {
//         return (
//             <div>Hello World</div>
//         )
//     }
// }
// export default Header;