import styled, { css } from 'styled-components'
import { COLORS, SIZES, BUTTONS } from '@utils/constants'

interface Props {
    model: 'Edit' | 'Delete'
}

const ButtonComponent = styled.button<Props>`
    display: flex;
    align-items: center;
    background-color:  ${props => props.model === 'Edit' ? BUTTONS.EDIT : BUTTONS.DELETE};
    color: ${props => props.model === 'Edit' ? COLORS.BLACK : COLORS.WHITE};
    border: none;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 3px;
    font-family: 'Roboto';
    text-transform: uppercase;
    font-weight: 600;
    margin-right: 10px;

    &:hover{
        box-shadow: 0 11px 21px ${COLORS.TERTIARY};
        cursor: pointer;
        background-color: ${props => props.model === 'Edit' ? COLORS.SECOND : BUTTONS.DELETE};
    }

    span{
        padding-left: 5px;
        font-size: 11px;
        display: none;
    }

    @media(max-width: ${SIZES.SM}px) {

    }
`
export default ButtonComponent