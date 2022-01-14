import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Movies from './Movies';
import Viewer from './Viewer';
const Home = () => {
    return (
        <Container className='stylee'>
            <ImageSlider/>
            <Viewer/>
            <Movies/>
        </Container>
    )
}

export default Home
const Container = styled.main`
    min-height:92vh;
    overflow-X:hidden;
    padding:0 calc(3.4vw+5px);
    position:relative;
    &:before{
        background:url("/images/home-background.png") center  center / cover
        no-repeat fixed;
        content:'';
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
    }
    `;
