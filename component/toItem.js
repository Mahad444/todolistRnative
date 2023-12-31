import React from "react";
import { Text,TouchableOpacity,StyleSheet } from "react-native";

export default function TodoItem ({item , pressHandler}){
    return (
        <TouchableOpacity onPress={() => pressHandler(item.keya)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )

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