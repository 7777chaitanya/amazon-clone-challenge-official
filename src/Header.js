import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {
    
    Link
  } from "react-router-dom";

function Header() {
    return (
        <Container>
            <Link to="/home">
                <HeaderLogo>
                    <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png?fbclid=IwAR3s0VAgSZNznVrjugfW5lSbco3Egw1Tnalpf1VQ48_ND8KnwnvED3kms7s"} alt="amazon-logo" />

                </HeaderLogo>
            </Link>
            <HeaderOptionAddress>
                <LocationIcon>
                    <LocationOnIcon />
                </LocationIcon>
                <Options>
                    <OptionLineOne>Deliver to Chaitanya</OptionLineOne>
                    <OptionLineTwo>Select Your Address</OptionLineTwo>
                </Options>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type='text' />

                <HeaderSearcIconContainer>
                    <SearchIcon />
                </HeaderSearcIconContainer>
         
            </HeaderSearch>
            <HeaderNavItems>
                <HeaderOption>
                    <OptionLineOne>Hello, Chaitanya.</OptionLineOne>
                    <OptionLineTwo>Accounts & Lists<ArrowDropDownIcon /></OptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>&Orders</OptionLineTwo>
                </HeaderOption>

                
                <HeaderCart> 
                    <Link to="/cart">
                        <AddShoppingCartIcon />
                        <CartCount>0</CartCount>
                    </Link>
                </HeaderCart>
                
                
            </HeaderNavItems>

            
        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-between;

`
const HeaderLogo = styled.div`
    img{
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 11px;
        padding: 10px 8px;
        :hover{
            border: 1px solid white;
            border-radius: 4px;
        }
    }
`
const HeaderOptionAddress = styled.div`
        
        color: #D6D6D6;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 9px;
        margin-left: 11px;
        :hover{
            border: 1px solid white;
            border-radius: 4px;
        }
`

const OptionLineOne = styled.div`

`
const OptionLineTwo = styled.div`
    display: flex;
    font-weight: 700;
`

const HeaderSearch = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin-left: 11px;
    :focus-within{
        box-shadow: 0 0 0 3px #F90;
        border-radius: 4px;
    }
    
`

const HeaderSearchInput = styled.input`
    flex-grow: 1;
    height: 40px;
    border-radius: 4px 0px 0px 4px;
    border-style: none;
    :focus {
        outline: none;
    }
`

const HeaderSearcIconContainer = styled.div`
    background-color: #F3A847; 
    color: #333333;
    width: 45px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 4px 4px 0px;
    :hover{
        background-color: #FD9B06;
    }

`

const CartCount = styled.div`
    padding-left: 4px;
    border: none;
`

const HeaderNavItems = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 11px;
`

const HeaderOption = styled.div`
    align-items: center;
    padding: 0px 9px;
    color: #D6D6D6;
    :hover{
        border: 1px solid white;
        border-radius: 4px;
    }
`

const HeaderCart = styled.div`
    display: flex;
    align-items: center;
    color: #D6D6D6;
    justify-content: center; 
    margin-right: 11px;
    
    :hover{
        border: 1px solid white;
        border-radius: 4px;
        
    }
    a{
        text-decoration: none;
        color:#D6D6D6;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 9px;
        font-size: 20px;
        
    }
`

const Options = styled.div` `

const LocationIcon = styled.div `
    padding-top: 25px;
    
    `


