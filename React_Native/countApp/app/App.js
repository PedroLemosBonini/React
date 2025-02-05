import { useState } from "react"
import { StyleSheet, Text, View, Button } from "react-native"

export default function App(){
    const[count, setCount] = useState(0);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Clique para Contar: {count}</Text>
            <Button
            title="Clique"
            onPress={()=> setCount(count+1)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#964b00',
        alignItems:'center',
        justifyContent:'center'
    },

    text: {
        fontSize:50
    }
})