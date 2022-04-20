import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components';
import { SetaBaixo } from '../Components/SetaBaixo/SetaBaixo';
import { TresPontos } from '../Components/TresPontos/TrePontos';

const BackGround = styled.View`
flex: 1;
background-color: #757575;

`;

const TopBar = styled.View`
background-color: #757575;
`;
const Title = styled.Text`
color: #fff;

`;
const SubTitle = styled.Text`
color: #fff;

`;

export function PlayerScreen(){

    return(
        <BackGround>
            <TopBar>
                <SetaBaixo />
                <Title>Titulo da página</Title>
                <SubTitle>subtitulo da página</SubTitle>   
                <TresPontos/>        
            </TopBar>
        </BackGround>
    )
}
