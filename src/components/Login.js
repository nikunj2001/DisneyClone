import React from 'react'
import styled from 'styled-components'
const Login = () => {
    return (
        <Container>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" />
                    <SignUp>
                        GET ALL THERE
                    </SignUp>
                <Description>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque facere distinctio beatae earum architecto reiciendis rerum ducimus enim eveniet odio?
                </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" />

                </CTA>

        </Container>
    )
}

export default Login


const Container= styled.div`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    height:92vh;
    &:before{
        background-position:top;
        background-size:cover;
        background-repeat:no-repeat;
        content:'';
        position:absolute;
        top:0;
        left:0;
        right:0;
        opacity:0.7;
        bottom:0;
        z-index:-1;
    }
`
const CTA=styled.div`
    max-width:650px;
    padding:80px 40px;
    width:80%;
    display:flex;
    flex-direction:column;
`;
const CTALogoOne = styled.img``;
const CTALogoTwo = styled.img`
    margin-top:18px;
`;
const SignUp = styled.a`
    width:100%;
    background-color:#0063e5;
    font-weight:bold;
    padding:17px 0;
    color:#f9f9f9;
    border-radius:4px;
    text-align:center;
    font-size:18px;
    cursor:pointer;
    transition:all 250ms ;
    letter-spacing:1.5px;
    margin-top:10px;
    margin-bottom:14px;
    &:hover{
        background:#0483ee;
    }
`
const Description = styled.p`
        font-size:11px;
        letter-spacing:1.5px;
        text-align:center;
        line-height:1.5;
`;