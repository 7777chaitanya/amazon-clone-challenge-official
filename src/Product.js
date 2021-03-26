import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function Product() {
    return (
        <Container>
            <Title>

                Apple iPad Pro 2020 27.94 cm (11 inch) Wi-Fi Tablet 128 GB, Space Grey
            </Title>

            <Price>
                ₹71,900

            </Price>

            <Rating>
                ⭐⭐⭐⭐⭐

            </Rating>

            <ImageContainer>
            <Image src="https://www.reliancedigital.in/medias/iPad-Pro-11-WIFI-128-GB-SG-2020-MY232HN-A-Tablets-491691574-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NjQyNXxpbWFnZS9qcGVnfGltYWdlcy9oMTAvaDM0LzkyNzA2NzE0NDE5NTAuanBnfDU0ZjIxZmI2OGUzNjFiMDJhN2FlNjM3Y2ZmNDYxZTE5YmVjODA0ZTYyM2Q4OTcwMWM0NmJlN2MzNmJkMzdhNDI" />
            </ImageContainer>

            <AddToCartButton>
                <ShoppingCartIcon />
                <ButtonText>
                Add to Cart
                </ButtonText>
            </AddToCartButton>          

        </Container>
    )
}

export default Product

const Container = styled.div `
    background: white;
    width: 300px;
    max-height: 400px;
    flex: 1;
    padding: 20px;
    margin: 10px;
    display: block;
    align-items: center;
    border-radius: 5px;
    box-shadow: 3px 3px #FD9B06;
     
`

const Title = styled.div `
    font: 12px;
`

const Price = styled.div `
    font-weight:500;
`

const Rating = styled.div `

`

const Image= styled.img `
    max-height: 200px;
    margin-top: 3px;
    object-fit: contain;
    margin: 0 auto;
`

const AddToCartButton = styled.button  `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F1C557;
    width: 200px;
    border-radius: 4px;
    padding: 1px 6px;
    border: 2px solid black;
    font-weight: 500;
    margin: 0 auto;
    height: 40px;
    margin-top: 12px;
    

    :hover{
        background-color: #e28a16;
    }
`

const ButtonText = styled.div `
    flex: 1;
    font-size: 18px;
    font-weight: 600;
    

`

const ImageContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

`