import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import List from './List.js';

export default class Login extends React.Component{
 constructor(props){
     super(props);
     this.state = {
         username: "",
         password: "",
         changeView: false
     };
 }
    _onPress(){
        var that=this;
        if(that.state.username==that.state.password){
            this.setState({
                changeView: true
            });
        }else{
            alert("unauthenticated");
        }
    }
 render() {
     if(!this.state.changeView){
        return (
        <View style={styles.container}>
            <TextInput
            onChangeText={(username) => this.setState({username})}
            style={styles.textContainer}
            value  = {this.state.username}
            placeholder="username"
            />
            <TextInput
            onChangeText={(password) => this.setState({password})}
            style={styles.textContainer}
            value  = {this.state.password}
            placeholder="password"
            />
            <View style={styles.loginButtonContainer}>
                <TouchableOpacity onPress={this._onPress.bind(this)} style={styles.loginButton}><Text style={styles.textStyle}>Login</Text></TouchableOpacity>
            </View>
        </View>
    );
     }else{
         return(
             <List></List>
         );
     }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ED',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  textContainer: {
    flex:0.1
  },
  loginButtonContainer: {
      flex: 0.1
  },
  loginButton: {
        flex: 0.4,
        backgroundColor: '#14A7AC',
        alignItems: 'center',
        justifyContent: 'center'
    },
  textStyle: {
        flex: 0.8,
        color: 'green'
    }
});