import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { InitialScreen } from './src/Screens/Index'
import SplashScreen from './src/Screens/SplashScreen/SplashScreen'
import Routes from './src/Navigations/Routes'

const App = () => {

  const [SplashTimer, setSplashTimer] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashTimer(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>{
      SplashTimer ? <SplashScreen /> : <Routes />
    }
    </>
  )
}

export default App

const styles = StyleSheet.create({})