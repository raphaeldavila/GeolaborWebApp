import React, { useContext } from "react"
import Header from "@components/Common/Header"
import styled from "styled-components";
import TableProduct from "@components/Elements/TableProduct"

const Container = styled.div`
    margin-top: 80px;
    color: red;
`
export default function View() {
    return (
        <>
            <Header />
            <TableProduct />
        </>
    )
}
