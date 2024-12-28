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