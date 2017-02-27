import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

const Header = React.createClass ({
    PropTypes: {
        admin: React.PropTypes.boolean
    },
    contextTypes: {
        router: React.PropTypes.func.isRequired
    },
    style: {
        appbar: {
            position: "fixed", top: 0, zIndex: 1400
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
    render(){
        // let title='会喝水的鱼';
        if (this.props.admin) {
            title = "Blog   Admin   Panel";

            this.style.appbar.background = '#616161';
        } else {
            this.style.appbar.background = "rgb(0,188,212)"
        }
        return(
            <AppBar
                style={this.style.appbar}
                iconElementRight={
                    <div> {(() => {
                            return (<div>
                                <IconButton
                                    iconStyle={{color: "white"}}
                                    iconClassName="muidocs-icon-custom-github"
                                    href="https://github.com/lwcmgowl/react"
                                    linkButton={true}
                                />
                            </div>);
                    })()}</div>
                }
                zDepth={0}
            />

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