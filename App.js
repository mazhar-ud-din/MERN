import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import Routes from './src/Navigations/Routes'
import SplashScreen from './src/Screens/SplashScreen/SplashScreen'
import store from './src/redux/store'

const App = () => {

  const [SplashTimer, setSplashTimer] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashTimer(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Provider store={store}>
        {
          SplashTimer ? <SplashScreen /> : <Routes />
        }

        {/* <FlashMessage
          position={'top'}
          titleStyle={{
            fontFamily: fontFamily.medium,
            fontSize: textScale(14)
          }} /> */}
      </Provider>
    </>
  )
}

export default App

const styles = StyleSheet.create({})