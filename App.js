import React from 'react';
import { StyleSheet, Text, View, CheckBox, Image, TextInput, TouchableHighlight, Alert, KeyboardAvoidingView, StatusBar } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      email: '',
      password: '',
      showEErr: true,
      showPErr: true,
    }
  }

  validateE(text)
  {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    
    if(reg.test(text) === false)
    {
      this.setState({email:text,showEErr:false})
    }
    else 
    {
      this.setState({email:text,showEErr:true})
      
    }
  }
  validateP(text)
  {
    let reg = text.length.toString();
    if(reg < 6 || reg > 12 && test(text) === 'password')
    {
      this.setState({password:text,showPErr:false})
    }
    else 
    {
      this.setState({password:text,showPErr:true})
    }
  }

  validateuser()
  {
    if(this.state.email === 'email@email.com' && this.state.password === 'password')
    {
      Alert.alert('Login Success!');
    }
    else
    {
      Alert.alert('Incorrect Email or Password!');
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="position" enabled>
        <StatusBar barStyle="light-content" />
        <View style={styles.top}>
          <Image source={require('./logo.png')} />
        </View>
        <View style={styles.center}>
        <Text style={styles.TxtDes}>Email</Text>
          <TextInput 
            onChangeText = {(text)=>this.validateE(text)}
            style={styles.box}
            placeholder="Input email address"
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            underlineColorAndroid="transparent"
          />
          <Text style={[styles.CrctMsg, !this.state.showEErr? styles.ErrMsg:null]}>not correct format for email address</Text>
          <Text style={styles.TxtDes}>Password</Text>
          <TextInput 
            onChangeText = {(text)=>this.validateP(text)}
            style={styles.box}
            returnKeyType="go"
            underlineColorAndroid="transparent"
            secureTextEntry
            textContentType = "emailAddress"
            placeholder="Input password"/>
          <Text style={[styles.CrctMsg, !this.state.showPErr? styles.ErrMsg:null]}>please use at least 6 - 12 characters </Text>
          <CheckBox value={this.state.checkR? }/> <Text>Remember Me</Text>
        </View>
        <View style = {styles.bottom}>
          <TouchableHighlight style = {styles.buttonContainer}
            underlayColor = "#a771f7"
            onPress={()=>{this.validateuser()}}
            textContentType = "password"
            disabled= {true,!this.state.showEErr || !this.state.showPErr? true: false}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  center: {
    height: '30%',
    padding: 15
  },
  box: {
    paddingLeft:10,
    width: '100%',
    borderColor: '#8B49DD',
    borderWidth: 2,
    borderRadius:4,
    fontStyle:'italic',
  },
  TxtDes: {
    fontWeight: '200',
    fontSize: 24
  },
  CrctMsg: {
    color: 'transparent'
  },
  ErrMsg: {
    fontSize: 14,
    color: 'red',
    fontStyle: 'italic'
  },
  bottom: {
    height: '20%',
    padding: 10
  },
  buttonContainer: {
    backgroundColor: '#8B49DD',
    borderRadius: 4,
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 24
  }
});
