import React, { useState } from 'react'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import Head from '../components/Common/Head'
import type { AppProps } from 'next/app'
import ProjectContext from '@context/ProjectContext'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }: AppProps) {

  const [isModal, setModal] = useState<Boolean>(false)
  const [isContent, setContent] = useState<any>(false)

  return (
    <>
      <ProjectContext.Provider value={{ isModal, setModal, isContent, setContent }}>
        <Head />
        <ToastContainer
          position="top-center"
          hideProgressBar
          autoClose={3000}
        />
        <Component {...pageProps} />
      </ProjectContext.Provider>
    </>
  )
}
