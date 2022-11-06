import styled, { css } from 'styled-components'
import { COLORS, SIZES } from '@utils/constants'

const Container = styled.header`
    max-width: 100%;

    .pointer{
        cursor: pointer;
    }
    
    header{
        background-color: ${COLORS.PRIMARY};
        heigth: auto;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
        left: 0;
        top: 0;
        position: fixed;
        
        .header__content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0px auto;
            max-width: 1280px;
        }

        ul{
            text-decoration: none;
            list-style: none;
        }

        ul li a {
            color: ${COLORS.WHITE};
            font-size: 13px;
            font-weight: 600;
            font-family: 'Roboto';
            text-transform: uppercase;
            padding-left: 15px;
            padding-right: 15px;
        }

        ul li a: hover{
            text-decoration: underline;
        }

    }

    @media(max-width: ${SIZES.SM}px) {

    }

`

export default Container