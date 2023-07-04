import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from './component/header';
import TodoItem from './component/toItem';

export default function App() {

const [todo,setTodo] = useState([
  {text:"buy coffee" , key:'1'},
  {text:"create an app" , key:'2'},
  {text:"play on the switch" , key:'3'},
]);

// creating delete button

const pressHandler = (key)=> {
  setTodo((prevTodo)=>{
    return prevTodo.filter(todo => todo.key != key)
  });
}

  return (
    <View style={styles.container}>
     <Header/>
     <View style={styles.content}>
      {/* form */}
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
    backgroundColor: '#fff',
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
