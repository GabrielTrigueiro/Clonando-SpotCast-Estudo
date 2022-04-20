import React from 'react';
import styled from 'styled-components';
import { SetaBaixo } from '../Components/SetaBaixo/SetaBaixo';
import { TresPontos } from '../Components/TresPontos/TrePontos';
import LinearGradient  from 'react-native-linear-gradient'

const Background = ({children}) => {
    return(
        <LinearGradient
            colors={['#464769', '#1b1A1f']}
            style={{flex:1,}}>
            {children}
        </LinearGradient>
    )
}

const TopBar = styled.View`
flex-direction: row;
margin-top: 10px;
`;
TopBar.Left = styled.View`
flex: 1;
padding-left: 16px;
justify-content:center;
`;
TopBar.Middle = styled.View`
flex: 2;
align-items: center;
`;
TopBar.Right = styled.View`
flex: 1;
padding-right: 16px;
align-items: flex-end;
justify-content:center;
`;
TopBar.Title = styled.Text`
color:white;
text-transform:uppercase;
`;
TopBar.SubTitle = styled.Text`
color:white;
font-weight: bold;
`;

export function PlayerScreen(){
    return(
    <Background>
        <TopBar>
            <TopBar.Left>
                <SetaBaixo />
            </TopBar.Left>

            <TopBar.Middle>
                <TopBar.Title>
                    Titulo da página
                </TopBar.Title>
                <TopBar.SubTitle>
                    Subtitulo da página 
                </TopBar.SubTitle>
            </TopBar.Middle>                
            <TopBar.Right>
                <TresPontos/>        
            </TopBar.Right>
        </TopBar>
    </Background>
    )
}
