"use client"

import styled from "styled-components"
import logo from "../../public/images/logo_atm.png"
import Image from "next/image"

const HeaderTag = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
`

export default function Header() {
    return(
        <HeaderTag>
            <Image src={logo}/>
        </HeaderTag>
        
    )
}