import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
const Movies = () => {
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content className='xxx'>

                <Wrap>
                    <Link to="/detail">
                    <img src="/images/viewers-starwars.png" alt="" />
                    </Link>

                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" alt="" />
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" alt="" />
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" alt="" />
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" alt="" />
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" alt="" />
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" alt="" />
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" alt="" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies


const Container = styled.div`
    padding: 25px;
`
const Content=styled.div`
    
`
const Wrap = styled.div`
border-radius:10px;
overflow:hidden;
border:3px solid rgba(249,249,249,0.1);
box-shadow:rgb(0 0 / 73%) 0px 16px 10px -10px,
rgb(0 0 / 79%) 0px 16px 10px -10px;
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    &:hover{
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8);
    }
`;