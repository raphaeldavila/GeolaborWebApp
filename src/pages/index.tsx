import React, { useContext } from "react"
import Header from "@components/Common/Header"
import Table from "@components/Elements/Table"
import Modal from "@components/Elements/Modal"
import ProjectContext from "@context/ProjectContext"

export default function Home() {

  const { isModal } = useContext(ProjectContext)

  const showModal = () => {
    if (isModal) {
      return <Modal />
    }
  }

  return (
    <>
      <Header />
      <Table />
      {showModal()}
    </>
  )
}
