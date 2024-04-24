
import { View, Text, SafeAreaView, StyleSheet, Button, Image, ImageBackground } from "react-native"
import Home from "./components/Home"
import { useState } from "react"


//  Csss : inline , stylesheet , multiple Css 

// const image = uri()
function App() {

  // const [img, setImg] = useState("")
  // const Presss = () => {
  //   console.log("Preesed button")
  //   setImg("https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg")
  // }




  return (
    <>
      <View style={css.main}>
        <View style={css.view}></View>
        <View style={css.view2}></View>
        <View style={css.view3}></View>
        <View style={css.view4}></View>
      </View>
    </>
  )
}

const css = StyleSheet.create({
  main: {
    backgroundColor: "green",
    marginTop:100,
    flex:1,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    flexWrap:"wrap-reverse"
  },
  view: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    // margin:10,
    // flex:2
  },
  view2: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    // margin:10,
    // flex:1
  },
  view3: {
    width: 50,
    height: 50,
    backgroundColor: "yellow",
    // margin:10,
    // flex:2
  },
  view4: {
    width: 50,
    height: 50,
    backgroundColor: "pink",
    // margin:10,
    // flex:1,
  }
})

export default App