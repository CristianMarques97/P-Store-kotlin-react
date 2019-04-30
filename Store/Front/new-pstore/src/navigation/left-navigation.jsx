import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import UserInfoNavigation from './user-info-navigation';


import { connect } from 'react-redux';
import UserLogin from './navigation-login/login-user';


class LeftNavigation extends Component {

    render() {
        return (
            <div>
                {this.props.auth ? this.loggedUserMenu : this.loginMenu}
            </div>
        );
    }

    loginMenu = (
        <div>
            <UserLogin />
        </div>
    );


    loggedUserMenu = (
        <div>
            <UserInfoNavigation />
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
};

export default connect(mapStateToProps)(LeftNavigation);