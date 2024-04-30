
import { View, Text, SafeAreaView, StyleSheet, Button, Image, ImageBackground, ActivityIndicator } from "react-native"
import Home from "./components/Home"
import { useEffect, useState } from "react"
import Slider from "./components/Slider"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"


//  Csss : inline , stylesheet , multiple Css 

// const image = uri()
function App() {

  // const [img, setImg] = useState("")
  // const Presss = () => {
  //   console.log("Preesed button")
  //   setImg("https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg")
  // }


  // let [initailvalue, setValue] = useState("")
  // let [initailvalue1, setValue1] = useState("Somendra")
  // console.log(initailvalue)
  // function chnageState(){
  //   setValue(initailvalue * 3)
  // }

  // function chnageState1(){
  //   setValue1("dev")
  // }


  // useEffect(() => {
  //   handleApi()
  // },[])

  // const handleApi = async () => {
  //   const data =  await fetch("https://fakestoreapi.com/products/2")
  //   let dt = await data.json()
  //   setValue(dt)
  // }

  const Stack = createNativeStackNavigator()

  return (
    <>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="navbar" component={Navbar} />
          <Stack.Screen name="about" component={About} />
          <Stack.Screen name="contact" component={Contact} />
        </Stack.Navigator>
      </NavigationContainer>











      {/* <Slider/> */}
      {/*  <View style={css.main}>
        <View style={css.view}></View>
        <View style={css.view2}></View>
        <View style={css.view3}></View>
        <View style={css.view4}></View>
      </View>*/}

      {/* <View style={{marginTop:100,}}>
        <Text>{initailvalue}</Text>
        <Text>{initailvalue1}</Text>
        <Button
        title="click"
        onPress={()=>{chnageState(),chnageState1()}}
        color={"red"}
        />
      </View> */}

    </>
  )
}


const css = StyleSheet.create({
  main: {
    backgroundColor: "green",
    marginTop: 100,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap-reverse"
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