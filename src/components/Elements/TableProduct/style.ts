import styled, { css } from 'styled-components'
import { BUTTONS, COLORS, SIZES } from '@utils/constants'

const Container = styled.header`
    max-width: 100%;
    margin-top: 150px;

    .pointer{
        cursor: pointer;
    }

    .content__table{
        align-items: center;
        margin: 0px auto;
        max-width: ${SIZES.LG}px;
        background-color: ${COLORS.WHITE};
        border-radius: 10px;
        padding: 25px;
        box-shadow: 0 11px 21px ${COLORS.TERTIARY};

        .content__table_filter{
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            background-color: ${COLORS.SECOND};
            align-items: center;
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 15px;
            padding-bottom: 15px;
            border-radius: 5px;

            .content__table_filter_start{
                display: flex;
                flex-direction: column;
            }

            h2{
                font-size: 14px;
                font-weight: 600;
                text-transform: uppercase;
                font-family: Roboto, sans-serif;
                color: ${COLORS.BLACK};
                margin: 0;
            }

            h4{
                margin: 0;
                padding-top: 8px;
                font-size: 11px;
                font-weight: 600;
                text-transform: uppercase;
                font-family: Roboto, sans-serif;
                color: #3f4d73;                
            }
        }

        .content__table_overflow{
            overflow:auto;
            max-height: 400px;
        }

        .content__table_action{
            display: flex;
            justify-content: end;
        }

        table{
            width: 100%;
            border: none;
            border-collapse: collapse;
        }

        tr{
            text-align: left;
        }

        tr th{
            background-color: ${COLORS.WHITE};
            color: ${COLORS.BLACK};
            padding-top: 15px;
            padding-bottom: 15px;
            font-family: 'Roboto';
            text-transform: uppercase;
            font-size: 13px;
            padding-left: 10px;
            font-weight: 600;
            border-bottom: 1px solid ${COLORS.SECOND};
        }

        tr td{
            padding-top: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid ${COLORS.SECOND};
            font-family: 'Roboto';
            text-transform: uppercase;
            font-size: 13px;
            padding-left: 10px;
        }

        tr:hover{
            background-color: ${COLORS.SECOND}
        }

        .content__table_button{
            display: flex;
        }

    }

    @media(max-width: ${SIZES.SM}px) {

    }
`

export const Bread = styled.h4`
    margin: 0;
    padding-top: 8px;
    font-weight: 900;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    color: #3f4d73;
    font-size: 18px;
    display: flex;
    align-items: center;
    
    a{
        font-size: 11px;
    }

    a: hover{
        text-decoration: underline;
    }
`

export const ButtonDelete = styled.button`
    background-color: ${BUTTONS.DELETE};
    color: #5e081c;
    padding: 8px 20px 8px 20px;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    border: none;
    border-radius: 3px;
    margin-top: 20px;
    font-weight: 600;
    font-size: 12px;

    &: hover{
        box-shadow: 0 11px 21px ${COLORS.TERTIARY};
        cursor: pointer;
    }
`

export default Container