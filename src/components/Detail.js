import React from 'react'
import styled from 'styled-components'
const Detail = () => {
    return (
        <Container>
            <Background>
                <img src="/images/login-background.jpg" alt="" />
            </Background>
            <ImageTitle>
                <img src="/images/viewers-starwars.png" alt="" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span style={{color:"#000"}} >PLAY</span>
                </PlayButton>
                <TrailerButton>
                        <img src="/images/play-icon-white.png" alt="" />
                        <span  >Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="" />
                </GroupWatchButton>
            </Controls>
            <SubTitles>
                2018 7m Family,kids,Animation
            </SubTitles>
            <Description>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt necessitatibus quis pariatur. Eius officiis, vel id, nesciunt optio, quaerat aliquid recusandae atque qui blanditiis itaque a repellat fugiat porro asperiores.
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
  min-height:92vh;
  padding:0 25px;
  position:relative;
`

const Background = styled.div`
   position:fixed;
   top:0;
   left:0;
   bottom:0;
   right:0; 
   z-index:-1;
   opacity:0.8;
   img{
       width:100%;
       height:100%;
       object-fit:cover;
   }
`
const ImageTitle= styled.div`
   height:30vh;
   width:35vw;
   min-height:170px;
   min-width:200px;
  img{
      width:100%;
      height:100%;
      object-fit:contain;
  } 
`;

const Controls= styled.div`
  display:flex;
  align-items:center;
`
const PlayButton = styled.button`
  border-radius:4px;
  outline:none;
  font-size:15px;
  border:none;
  display:flex;
  align-items:center;
  height:56px;
  background:rgb(249,249,249);
  padding:0 24px;
  margin-right:22px;
  letter-spacing:1.8px;
  cursor:pointer;
  &:hover{
      background:rgb(198,198,198);
  }
`;
const TrailerButton = styled(PlayButton)`
background:rgba(0,0,0,0.3);
border:1px solid #fff;
color:rgb(249,249,249) !important;
text-transform:uppercase;
`;
const AddButton = styled.button`
    margin-right:16px;
    width:44px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:2px solid #fff;
    background-color:rgba(0,0,0,0.6);
    cursor:pointer;
    span{
        font-size:30px;
    }
`;
const GroupWatchButton = styled(AddButton)`
    background:rgb(0,0,0);
`;
const SubTitles=styled.div`
    color:#fff;
    font-size:15px;
    min-height:20px;
    margin-top:26px;
`;
const Description =styled.div`
    line-height:1.4;
    font-size:20px;
    margin-top:16px;
`;