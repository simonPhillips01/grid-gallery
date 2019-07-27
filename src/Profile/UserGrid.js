import React from 'react';
import styled from 'styled-components';
import {ProfileImage} from './ProfileImage';

const UserGridStyled = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 50px;
    gap: 15px;
    grid-template-areas: "photo name"
                        "photo label"
                        "photo description";
    @media (max-width: 990px) {
        grid-template-areas: "photo name"
                            "photo label ."
                            "photo description ."
    }
`

export const MiniUserGrid = styled.div`
    display: grid;
    justify-content: left;
    grid-template-columns: auto auto;
    gap: 10px;
`

const Photo = styled.div`
    grid-area: photo;
`

const Name = styled.div`
    grid-area: name;
    font-size: 35px;
    align-self: center;
`

const Label = styled.div`
    grid-area: label;
    @media (max-width: 990px) {
        padding-left: 25px;
    }
`

const Description = styled.div`
    grid-area: description;
    max-width: 400px;
    @media (max-width: 990px) {
        padding-left: 25px;
        grid-column: 1 / 3;
    }
`
export default function() {
    return <UserGridStyled> 
        <Photo><ProfileImage/></Photo>
        <Name>Grid Gallery</Name>
        <Label><strong> 400 </strong> Followers </Label>
        <Description>
        In the future, indoor plant growth is predicted both in Eastern and Western Europe. Urbanisation, growing interest in sustainability, ethical living and sustainability, the increasing popularity of internet retailing and discounters, as well as the ageing population are set to re-shape the European gardening market.
        </Description>
        </UserGridStyled>
}