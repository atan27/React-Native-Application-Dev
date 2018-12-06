import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'

const App = () => {
   return (
      <View style = {styles.container}>
         <TouchableOpacity>
            <Text style = {styles.text}>
               Press Me!
            </Text>
         </TouchableOpacity>
      </View>
   )
}
export default App

const styles = StyleSheet.create ({
   container: {
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
   },
   text: {
      borderWidth: 1,
      padding: 25,
      borderColor: 'black',
      backgroundColor: 'white'
   }
})