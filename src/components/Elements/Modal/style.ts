import styled, { css } from 'styled-components'
import { BUTTONS, COLORS, SIZES } from '@utils/constants'

type ButtonProps = {
    content: 'confirmation' | 'reset'
}

const Container = styled.div`
    width: 100%;
    background-color: ${COLORS.WHITE};
    box-shadow: 0px 0px 10px 0px ${COLORS.TERTIARY};
    height: auto;
    z-index: 999;
    position: fixed;
    left: 0;
    bottom: 0;

    .modal__close{
        position: relative;

        .modal__close_icon{
            cursor: pointer;
            position: absolute;
            right: 10px;
            top: 5px;
        }
    }

`
export const Content = styled.div`
    max-width: ${SIZES.LG}px;
    margin: 0px auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 30px 30px 30px;
    font-family: "Roboto";
    font-size: 14px;

    .content__title_modal{
        h2{
            font-size: 18px;
            text-transform: uppercase;
            color: ${COLORS.PRIMARY};
            margin: 0;
            font-weight: 900;
        }

        p{
            margin: 0;
            padding-top: 5px;
            font-size: 14px;
        }
    }

    .content__title_modal{
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    p{
        font-size: 12px;
    }
`
export const Confirmation = styled.div`
    margin: 0px auto;
    max-width: ${SIZES.LG}px;
    padding: 0px 25px 20px 25px;   
    display: flex;
    justify-content: end;
    margin-top: -15px;

    .content__confirmation{
        display: flex;
    }

`
export const ButtonConfirmation = styled.button<ButtonProps>`
    color: ${COLORS.BLACK};
    background-color: ${props => props.content === "confirmation" ? BUTTONS.CONFIRMATION : BUTTONS.EDIT};
    border: none;
    padding: 8px 25px 8px 25px;
    margin: 0px 5px 0px 5px;
    font-family: "Roboto";
    font-size: 12px;
    text-transform: uppercase;
    border-radius: 3px;
    font-weight: 600;
    cursor: pointer;
`

export default Container