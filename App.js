import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from './component/header';
import TodoItem from './component/toItem';
import AddTodo from './component/addTodo';

export default function App() {

const [todo,setTodo] = useState([
  {text:"buy mayai" , key:'1'},
  {text:"create an app that is cool" , key:'2'},
  {text:"play on the switch" , key:'3'},
]);

// creating delete button

const pressHandler = (key)=> {
  setTodo((prevTodo)=>{
    return prevTodo.filter(todo => todo.key != key)
  });
}

const submitHandler =(text) => {
  setTodo((prevTodo)=>{
    return [
      {text: text , key: Math.random().toString()},
      ...prevTodo
    ];
  })
}

  return (
    <View style={styles.container}>
     <Header/>
     <View style={styles.content}>
      <AddTodo submitHandler={submitHandler}/>
      <View style={styles.list}>
      <FlatList data={todo} 
      renderItem={({item}) => (
        <TodoItem  item={item} pressHandler={pressHandler}/>
  )}/>
      </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
content :{
  padding:40,
},
list:{
  marginTop:20,


}
});
