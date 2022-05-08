import React, { useState } from "react";
import { StyleSheet, Text, StatusBar ,Button, View, ScrollView, SafeAreaView, Alert, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {

  const[taskInput, setTextInput] = useState("");

  const[tasks,setTask] = useState([
    {name: "do 5000 steps"},
    {name: "do 10 000 steps"},
    {name: "work in the garden"}
  ]);

  function AddTask(){
    //alert("You addded " + taskInput)
    if(taskInput != ""){
      setTask([...tasks, { name: taskInput } ])
    }
    console.log(tasks)
  }

  function RemoveTask(index){
    //alert('item deleted')
    setTask([...tasks.slice(0, index), ...tasks.slice(index+1)])
  }



  return (
    
    <View style={styles.container}>

      
      <SafeAreaView>

        <View>  
          <StatusBar  
            backgroundColor = "#11101d" 
            barStyle = "light-content"   
          />  
        </View> 


      <ScrollView style={styles.tasksScroll}>
        <View style={styles.tasksListCont}>
        { tasks.map((item, index)=>{
        return(
          <View key={index} style={styles.taskCont}>
            <Text style={styles.taskTxt}>{item.name}</Text>
            {/* <TouchableOpacity
            style={styles.removeBtn}
            onPress={() => RemoveTask(index)}
            underlayColor='#fff'
            > */}
              {/* <Text style={styles.btnText}>Remove</Text> */}
            <Icon.Button name="remove" backgroundColor="transparent" onPress={() => RemoveTask(index)}></Icon.Button>
            {/* </TouchableOpacity> */}
            </View>
        )
        })}
        </View>
      </ScrollView>
      </SafeAreaView>

        <View style={styles.navContainer}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.inputCont}>
            <TextInput 
            style={styles.taskInput}
            onChangeText={setTextInput}
            value={taskInput}
            placeholder={'Please type here…'}
            placeholderTextColor="#303150"
            />
          </View>
          </TouchableWithoutFeedback>

          <TouchableOpacity
              style={styles.addTaskBtn}
              onPress={() => AddTask()}
              underlayColor='#fff'>
              <Text style={styles.btnText}>Add task</Text>
          </TouchableOpacity>
        </View>

      
    </View>
    
    
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#11101d'
  },
  tasksScroll:{
    height: '77%'
  },
  tasksListCont: {
    alignItems:'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  navContainer:{
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: 30,
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'center',
    height: '20%'
  },
  addTaskBtn:{
    marginRight:40,
    marginLeft:40,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#545cff',
    borderRadius:6,
    width: 200
  },
  removeBtn:{
    backgroundColor: "#545cff",
    color: "white",
    height: '100%',
    width: 100,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    alignItems:'center',
    justifyContent: 'center'
  },
  btnText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10,
      fontSize: 15
  },
  taskCont: {
    backgroundColor:'#191933',
    marginBottom: 5,
    width: '90%',
    height: 80,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between'
  },
  taskTxt:{
    color: 'white',
    marginLeft:30,
    fontSize: 15
  },
  inputCont:{
    width: '70%'
  },
  taskInput:{
    padding: 20,
    marginBottom: 10,
    fontSize: 15,
    backgroundColor: '#191933',
    color: '#fff',
    borderRadius: 10
  }
});
