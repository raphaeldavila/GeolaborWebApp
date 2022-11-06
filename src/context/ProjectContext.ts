import React, { Dispatch, SetStateAction } from "react"

interface props {
  isModal: Boolean
  setModal: Dispatch<SetStateAction<Boolean>>
  isContent: any
  setContent: Dispatch<SetStateAction<any>>
}

const ProjectContext = React.createContext({} as props)

export default ProjectContext
