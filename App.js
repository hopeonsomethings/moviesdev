import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput,Image,TouchableHighlight,SafeAreaView, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';

//tab navigator
const Tab = createBottomTabNavigator();


///pages for bottom tabs

function chats() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center',}}>
      <View style={{justifyContent: 'center', alignItems: 'center',width:400,height:75,marginTop:30,backgroundColor:"black"}}>
    

      </View>

      {/* Here You should have a function returning a list of object with all the messages 
          related to this user...
      */}
     <SafeAreaView>
      <ScrollView>
      <TouchableHighlight onPress={()=>{console.log("chatOpen")}}>
        <View style={styles.chatContainer}>
        <Image
                  style={{height:65,width:65,marginLeft:30,marginTop:10,borderRadius:1000}}
                  source={require('./images/anonymous3.jpg')}
               />
               <Text style={{fontSize:25,paddingTop:24,paddingLeft:10}}>Trinity---</Text>
          </View>
        </TouchableHighlight>
        
        <TouchableHighlight onPress={()=>{console.log("chatOpen")}}>
        <View style={styles.chatContainer}>
        <Image
                  style={{height:65,width:65,marginLeft:30,marginTop:10,borderRadius:1000}}
                  source={require('./images/Screen-Shot-2013-06-13-at-9.30.04-PM.png')}
               />
               <Text style={{fontSize:25,paddingTop:24,paddingLeft:10}}>HopeCli</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>{console.log("chatOpen")}}>
        <View style={styles.chatContainer}>
        <Image
                  style={{height:65,width:65,marginLeft:30,marginTop:10,borderRadius:1000}}
                  source={require('./images/b5de66dd2499c48e44801c2c51dacb9f.jpg')}
               />
               <Text style={{fontSize:25,paddingTop:24,paddingLeft:10}}>ASTRA</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>{console.log("chatOpen")}}>
        <View style={styles.chatContainer}>
        <Image
                  style={{height:65,width:65,marginLeft:30,marginTop:10,borderRadius:1000}}
                  source={require('./images/b5de66dd2499c48e44801c2c51dacb9f.jpg')}
               />
               <Text style={{fontSize:25,paddingTop:24,paddingLeft:10}}>ASTRA</Text>
          </View>
        </TouchableHighlight>
        
      </ScrollView>
    </SafeAreaView>
      
    </View>
  );
}

// tommorow
/* <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
         
      </ScrollView>
    </SafeAreaView> */

function people() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>people</Text>
    </View>
  );
}
// create navigators
const Drawer = createDrawerNavigator();


/// functions for create
let username;
let password;
let rpassword;
let PIN;
let usernameCollector  = (text)=>{
    username = text;
}
let passwordCollector = (text)=>{
     password = text;
}
let RepasswordCollector = (text)=>{
    rpassword = text;
}

let PinCollector = (text)=>{
     PIN = text;
}
let createAccount = ()=>{
   /// code .. for ajax create Account.....
       
let obj  =  {
  Username:username,
  password:password,
  rpassword:rpassword,
  pin:PIN
}

   axios({
    method: 'post',
    url: 'http://cineprivado.com/appcontainer/verify.php', params:obj ,  headers: {'Content-Type': 'application/json'}})
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });









}

/// login functions and variables
let savedUsername;
let savedPasseword;

let memeberUsernameCollector = (text)=>{
    savedUsername = text;
}
let memberpasswordCollector  = (text)=>{
     savedPasseword = text;
}
let collectAndSendData = ()=>{
  console.log(savedUsername + " " + savedPasseword);
}
export default function App() {
  const [isActive,setActive]  = useState(0);
   if(isActive ==  3){
    return (
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Chats" component={chats} />
        <Tab.Screen name="People" component={people} />
      </Tab.Navigator>
    </NavigationContainer>
    );
   }else if(isActive == 1){
      return(
        <View style={styles.container}>
               <Image
                  style={styles.tinyLogo}
                  source={require('./images/secondone.png')}
               />
           <Text>Create Your account</Text>
           <TextInput
                style={styles.inner}
                onChangeText={text => usernameCollector(text)}
                placeholder="Username"
           />
               <TextInput
                style={styles.inner}
                onChangeText={text => passwordCollector(text)}
                placeholder="password"
          />
           <TextInput
                style={styles.inner}
                onChangeText={text => RepasswordCollector(text)}
                placeholder="Re - password"
          />
          <TextInput
                style={styles.inner}
                onChangeText={text => PinCollector(text)}
                placeholder="PiN"
          />
          <View style={styles.middle}>
            
            <TouchableHighlight onPress={()=>{setActive(0)}}>
        <View style={styles.con}>
          <Text style={{color:"white"}}>Back</Text>
        </View>
      </TouchableHighlight>
          <TouchableHighlight onPress={()=>{
            createAccount()}}>
        <View style={styles.con}>
            <Text style={{color:"white"}}>Create</Text>
          </View>
        </TouchableHighlight>
         </View>
            
        </View>
    );
   }else if(isActive == 2){
    return(
      <View style={styles.container}>
            <Image
                  style={styles.tinyLogo}
                  source={require('./images/secondone.png')}
               />
         {/* <Text>Login</Text> */}
         <TextInput  style={styles.inner} placeholder='username' onChangeText={text=>memeberUsernameCollector(text)} />
         <TextInput  style={styles.inner} placeholder='password' onChangeText={text=>memberpasswordCollector(text)} />
         <View style={styles.middle}>
           <TouchableHighlight onPress={()=>{setActive(0)}}>
        <View style={styles.con}>
          <Text style={{color:"white"}}>Back</Text>
        </View>
      </TouchableHighlight>
          <TouchableHighlight onPress={()=>{setActive(3)
             collectAndSendData()}}>
        <View style={styles.con}>
            <Text style={{color:"white"}}>Send</Text>
          </View>
        </TouchableHighlight>
         </View>

      </View>
      );
   }else if(isActive == 0){
    return(
      <View style={styles.container}>
            <Image
                  style={styles.tinyLogo}
                  source={require('./images/secondone.png')}
               />
         <View style={styles.middle}>
         <TouchableHighlight onPress={()=>{setActive(1)}}>
        <View style={styles.con}>
          <Text style={{color:"white"}}>Create</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={()=>{setActive(2)}}>
        <View style={styles.con}>
          <Text style={{color:"white"}}>Login</Text>
        </View>
      </TouchableHighlight>
         </View>  
      </View>
      );
   }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle:{
    flexDirection:"row",
    marginTop:10
  },
  buttons:{
    marginLeft:80,
    width:100
  },con:{
    width:100,
    height:30,
    backgroundColor:"black",
    alignItems:"center",
    marginLeft:10,
    paddingTop:4,
    borderRadius:100,
    marginTop:10
  },
  inner:{
    height:40,
    width:100,
    marginTop:10
  },
  // chat header  for chats response
  chatContainer:{
    height:80,
    width:400,
    backgroundColor:"white",
    flexDirection:"row",
    borderBottomColor:"black",
    borderTopColor:"black",
    borderWidth:0.5
  }, scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  }
});
