import React from 'react'
import styled from "styled-components";
const Header = () => {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a href="">
                    <img src="/images/home-icon.svg" />    
                    <span>HOME</span>
                </a>    
                <a href="">
                    <img src="/images/search-icon.svg" />    
                    <span>SEARCH</span>
                </a>    
                <a href="">
                    <img src="/images/watchlist-icon.svg" />    
                    <span>WATCHLIST</span>
                </a>    
                <a href="">
                    <img src="/images/original-icon.svg" />    
                    <span>ORIGINAL</span>
                </a>    
                <a href="">
                    <img src="/images/movie-icon.svg" />    
                    <span>MOVIES</span>
                </a>    
                <a href="">
                    <img src="/images/series-icon.svg" />    
                    <span>SERIES</span>
                </a>    
            </NavMenu>
            <UserImg src="" />
        </Nav>
    )
}

export default Header;
const Nav = styled.nav`
    height:70px;
    overflow-X:hidden;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 36px;
`;
const Logo = styled.img`
    width:80px;
`
const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        text-decoration:none;
        outline:none;
        cursor:pointer;

        img{
            height:20px;
            
        }  
        span{
            font-size:13px;
            letter-spacing:1.42px;
            position:relative;
            &:after{
                content:'';
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform-origin:left center;
                transform:scaleX(0);
                transition:.5s all ease;
            }
        }
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }
    
`
const UserImg = styled.div`
    width:48px;
    height:48px;
    border-radius:50%;
    cursor:pointer;
    border:2px solid #fff;
`