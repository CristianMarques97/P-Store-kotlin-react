import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { SERVER_ADDRESS } from '../../request-config';
import { LOGIN } from '../../request-config';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import userLogin from '../../actions/logged-user-actions';
import userAuthlogin from '../../actions/auth-actions'
import {REQUEST_ERR_01} from '../../request-config';
class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            userEmail: "",
            password: "",
            userEmailError: false,
            passwordError: false,
            loginErrorDialog: false,
            successLoginDialog: false,
        }
    }

    handleClickShowPassword() {
        this.setState({
            showPassword: !this.state.showPassword,
        });
    };

    handleErrorDialogOpen() {
        this.setState({loginErrorDialog: !this.state.loginErrorDialog });
      };
      closeErrorDialog() {
        this.handleErrorDialogOpen();
        this.errorMessage = "";
      }

      handleSuccessDialogOpen() {
            this.setState({
                successLoginDialog: !this.state.successLoginDialog,
            })
      };

      handleSuccessDialogClose() {
        this.setState({
            successLoginDialog: !this.state.successLoginDialog,
        },this.onAuthChange(true))
  };

    errorMessage = "";
    successMessage = "";
    render() {
        return (
            <div>
                <Dialog
                    open={this.state.loginErrorDialog}
                    onClose={() => this.handleErrorDialogClose()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Falha Ao Realizar log-in
          </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.errorMessage}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.closeErrorDialog()} color="primary">
                            Ok
            </Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={this.state.successLoginDialog}
                    onClose={() => this.handleSuccessDialogClose()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Bem-vindo
          </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.successMessage}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.handleSuccessDialogClose()} color="primary">
                            Ok
            </Button>
                    </DialogActions>
                </Dialog>
                <span>Bem-vindo</span>
                <span>Insira seus dados para entrar:</span>
                <TextField
                    id="user-email"
                    error={this.state.userEmailError}
                    label="E-mail"
                    value={this.state.userEmail}
                    onChange={event => {
                        this.setState({
                            userEmail: event.target.value,
                            userEmailError: false
                        })
                    }}
                    margin="normal"
                />
                <FormControl>
                    <InputLabel htmlFor="login-password">Senha: </InputLabel>
                    <Input
                        id="login-password"
                        error={this.state.passwordError}
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={event => {
                            this.setState({
                                password: event.target.value,
                                passwordError: false
                            })
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={() => this.handleClickShowPassword()}
                                >
                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button
                    variant="contained"
                    size="medium"
                    onClick={() => this.loginRequest()}>
                    <AccountCircle />
                    Login
                  </Button>
            </div>
        );
    }

    validateLoginRequest() {
        let isValid = true
        // eslint-disable-next-line 
        if (this.state.userEmail == "" || this.state.userEmail == null) {
            isValid = false;
            this.setState({
                userEmailError: true,
            })
        }
        // eslint-disable-next-line 
        if (this.state.password == "" || this.state.password == null) {
            isValid = false;
            this.setState({
                passwordError: true,
            })
        }
        if (isValid)
            return true;

        return false;
    }

    loginRequest() {
        console.log(this.props)
        if (!this.validateLoginRequest())
            return;

        fetch(SERVER_ADDRESS + LOGIN, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify({
                email: this.state.userEmail,
                senha: this.state.password,
            })
        })
            .then(Response => {
                console.log(Response);
                // eslint-disable-next-line 
                if(Response.status == 404 || Response.status == 500 || Response.status == 400)
                    throw Response;
                return Response.json();
            })
            .then(response => {                                
                this.onUserLogin(response); 
                this.successMessage = "Você entrou com sucesso. Bem-vindo: " + this.props.userlogin.lastname;
                this.handleSuccessDialogOpen();

            })
            .catch(err => {
                err.json().then(errorMessage => {     
                    this.errorMessage = errorMessage.message;
                    this.handleErrorDialogOpen();
                })  
            })
            .catch(err => {                
                this.errorMessage = REQUEST_ERR_01;
                this.handleErrorDialogOpen();
            })
            .finally(this.clearInput())
    }

    clearInput() {
        this.setState({
            userEmail: "",
            password: "",
        })
    }


    onUserLogin(user) {
        this.props.onUserLogin(user);
      }

      onAuthChange(authAction) {
          this.props.onAuthChange(authAction);
      }
}

const mapStateToProps = (state, props) => {
    return {
      userlogin: state.userLogin,
      auth: state.auth,
    }
  };
  
  const mapActionsToProps = (dispatch, props) => {
      return bindActionCreators({
        onUserLogin: userLogin,
        onAuthChange: userAuthlogin,
      }, dispatch);
  }
  

export default connect(mapStateToProps, mapActionsToProps)(UserLogin);