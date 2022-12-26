import React, { useEffect } from "react"
import { PropTypes } from "@mui/material"
import Head from "next/head"
import { ThemeProvider } from "@mui/material"
import CssBaseline from "@mui/material"
import theme from '../src/theme'
import '../styles/globals.css'

export default function App(props){
  const { Component, pageProps } = props

  // useEffect(()=>{
  //   const jssStyles = document.querySelector('#jss-server-side')
  //   if(jssStyles){
  //     jssStyles.parentElement.removeChild(jssStyles)
  //   }
  // },[])

  return (
    <>
      <Head>
        <title>XLO Clone</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"></meta>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

// App.propTypes ={
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// }
