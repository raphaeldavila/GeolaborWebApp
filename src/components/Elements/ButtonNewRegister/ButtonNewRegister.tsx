import { useContext } from 'react'
import ButtonComponent from './style'
import { FaPlus } from 'react-icons/fa';
import ProjectContext from "@context/ProjectContext"

interface ButtonDto {
    title: string
}

export default function Button({ title }: ButtonDto) {

    const { setModal } = useContext(ProjectContext)

    const changeModal = () => {
        setModal(true)
    }

    return (
        <>
            <ButtonComponent onClick={changeModal}>
                <FaPlus />
                <span>{title}</span>
            </ButtonComponent>
        </>
    )
}