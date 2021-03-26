import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import { db } from './firebase'

function Home() {
    return (
        <Container>
            <Banner>
                
            </Banner>

            <Content>
                <Product />
                <Product />
                <Product />

            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div `
    width: 1500px;
    margin: 0 auto;
`

const Banner = styled.div ` 
    /* background-image: url("https://i.imgur.com/SYHeuYM.jpeg"); */
    background-image: url("https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/OnePlus_Launch/9R/D21233128_OnePlus_PreLaunch_Lemonade_Design_SIM_Tall_hero_1500x600._CB656964076_.jpg");
    background-position: center;
    min-height: 600px;
    background-size: cover;
    /* mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); */
    z-index: 1;
`

const Content = styled.div `
    /* background-color: white; */
    margin-top: -320px;
    z-index: 100;
    display: flex;
   

`