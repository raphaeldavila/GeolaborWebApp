import ButtonComponent from './style'
import { FaEye, FaTrashAlt } from 'react-icons/fa';

interface ButtonDto {
    title: string
    type: 'Edit' | 'Delete'
}

export default function Button({ title, type }: ButtonDto) {
    return (
        <>
            <ButtonComponent model={type}>
                {type === "Edit" ? <FaEye /> : <FaTrashAlt />}
                <span>{title}</span>
            </ButtonComponent>
        </>
    )
}