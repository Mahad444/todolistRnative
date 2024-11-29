import React from "react";
import { Text,TouchableOpacity,StyleSheet } from "react-native";

export default function TodoItem ({item , pressHandler}){
    return (
        <TouchableOpacity onPress={() => pressHandler(item.keya)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )

    // keya is the key of the item
    // pressHandler is the function that will be called when the item is pressed
    // item is the item that will be displayed
   
    // code 
     <TouchableOpacity onPress={() => pressHandler(item.keya)}>
        <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
    // the item will be displayed in a TouchableOpacity component
    // when the item is pressed, the pressHandler function will be called with the key of the item as a parameter
    // the key of the item is used to identify the item that was pressed
    {
        keya: '1',
        text: 'buy coffee'
    }
}


const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:18,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10 
    }

})