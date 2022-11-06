import styled, { css } from 'styled-components'
import { COLORS, SIZES } from '@utils/constants'

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
            padding-top: 10px;
            padding-bottom: 10px;
            border-radius: 5px;

            .content_table_filter_button{
                display: flex;
            }

            h2{
                font-size: 14px;
                font-weight: 600;
                text-transform: uppercase;
                font-family: Roboto, sans-serif;
                color: ${COLORS.BLACK};
            }
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

        .content__table_reference{
            color: ${COLORS.BLACK};
            font-weight: 600;
            cursor: pointer;
        }

        .content__table_button{
            display: flex;
        }

    }

    @media(max-width: ${SIZES.SM}px) {

    }
`

export const Refresh = styled.button`
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
`

export default Container