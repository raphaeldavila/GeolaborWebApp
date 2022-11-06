import styled, { css } from 'styled-components'
import { COLORS, SIZES, BUTTONS } from '@utils/constants'


const ButtonComponent = styled.button`
    display: flex;
    align-items: center;
    background-color:  ${COLORS.WHITE};
    color: ${COLORS.PRIMARY};
    border: none;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 3px;
    font-family: 'Roboto';
    text-transform: uppercase;
    font-weight: 600;
    margin-right: 10px;

    &:hover{
        cursor: pointer;
        box-shadow: 0 11px 21px ${COLORS.TERTIARY};
    }

    span{
        padding-left: 5px;
        font-size: 12px;
    }

    @media(max-width: ${SIZES.SM}px) {

    }
`
export default ButtonComponent