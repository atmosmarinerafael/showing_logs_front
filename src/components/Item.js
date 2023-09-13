"use client"

import styled from "styled-components"

const ItemTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px #000000;
`

const BoxProcess = styled.div`
    height: 3rem;
    width: 5rem;
    background-color: ${props => props.cor};
    display: flex;
    justify-content: center;
    align-items: center;
    margin:10px;
    border-radius: 0.5rem;
`

export default function Item() {
    return(
        <ItemTag>
            <BoxProcess cor={"grey"}>
                Teste
            </BoxProcess>
            <BoxProcess cor={"green"}>
                Teste
            </BoxProcess>
            <BoxProcess cor={"red"}>
                Teste
            </BoxProcess>
            <BoxProcess cor={"yellow"}>
                Teste
            </BoxProcess>

        </ItemTag>
    )

}