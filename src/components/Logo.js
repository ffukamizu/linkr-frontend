import React from "react";
import { styled } from "styled-components";
export default function Logo(){
    return(
        <SCLogoBox>
            <SCLogoName>linkr</SCLogoName><br></br>
            <SCLogoDesc>save, share and discover<br></br> the best links on the web</SCLogoDesc>
        </SCLogoBox>
    );
}

const SCLogoBox = styled.div`
    box-sizing:border-box;
    width:62%;
    height:100%;
    background-color:#151515;
    padding-top:300px;
    color:white;
    padding-left:10%;
`;

const SCLogoName = styled.span`
    color: #FFF;
    font-family: Passion One;
    font-size: 106px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 5.3px; 
`;

const SCLogoDesc = styled.span`
    font-family: Oswald;
    font-size: 43px;
    font-style: normal;
    font-weight: 700;
    line-height: normal; 
`;