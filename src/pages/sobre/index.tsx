import React from "react";
import Header from '../../components/Common/Header/Header'
import styled from "styled-components";

const Container = styled.div`
    margin-top: 80px;
    color: red;
`


function Sobre() {
    return (
        <>
            <Header />
            <Container>
                <h1>Página sobre</h1>
            </Container>
        </>
    )
}

export default Sobre