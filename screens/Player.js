import React, {useState} from 'react';
import Slider from '@react-native-community/slider';
import styled from 'styled-components';
import { SetaBaixo } from '../Components/SetaBaixo';
import {Play}  from '../Components/Play';
import { TresPontos } from '../Components/TresPontos';
import LinearGradient  from 'react-native-linear-gradient'

//Área da tela inteira chamando tudo
const Background = ({children}) => {
    return(
        <LinearGradient
            colors={['#464769', '#1b1A1f']}
            style={{flex:1,}}>
            {children}
        </LinearGradient>
    )
}

//Área da top Bar
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

//Área do Cover e do player
const ScreenArea = styled.View`
flex:1;
padding:0px 32px 32px 32px;
`;
const CoverArea = styled.View`
//background: red;
flex:4;

`;
CoverArea.Image = styled.Image`
flex:1;
width:100%;
`;
const PlayerArea = styled.View`
flex:2;
justify-content: flex-end;
`;

PlayerArea.Title = styled.Text`
color:#fff;
font-size:24px;
text-align:center;
`;
PlayerArea.Autor = styled.Text`
color:#BBBBBB;
font-size:16px;
text-align:center;
`;

const Controls = styled.View`
align-items:center;
justify-content:center;
flex-direction: row;
flex-wrap: wrap;
`;
Controls.Play = styled.TouchableOpacity`

`;

Controls.Slider = styled.View`
flex-basis:100%;
flex-direction: row;
flex-wrap:wrap;
justify-content: space-between;
`;
Controls.Slider.CurrentTime = styled.Text`
color:#BBBBBB;
`;
Controls.Slider.TotalTime = styled.Text`
color:#BBBBBB;
`;

const AudioSlider = styled(Slider)`
flex-basis:100%;
`;


export function PlayerScreen(){
    const [segundos, setSegundos] = useState(0)

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

        <ScreenArea>
            <CoverArea>
                <CoverArea.Image
                    resizeMode="contain"
                    source={{uri: "https://place-hold.it/750x750"}}/>
            </CoverArea>

            <PlayerArea>

                <PlayerArea.Title>
                    Titulo do que ta tocando
                </PlayerArea.Title>

                <PlayerArea.Autor>
                    Nome do autor do que ta tocando
                </PlayerArea.Autor>

                <Controls>

                    <Controls.Slider>
                        <AudioSlider
                        minimunValue={0}
                        maximumValue={100}
                        thumbTintColor="#FFFFFF"
                        maximumTrackTintColor="#777777"
                        minimumTrackTintColor="#1DD65F"
                        valuer={segundos}
                        onValueChange={(value) => {
                            setSegundos(value)
                        }}
                        />
                        <Controls.Slider.CurrentTime>
                            {segundos}
                        </Controls.Slider.CurrentTime>
                        <Controls.Slider.TotalTime>
                            52:07
                        </Controls.Slider.TotalTime>
                    </Controls.Slider>

                    <Controls.Play>
                        <Play/>
                    </Controls.Play>
                </Controls>

            </PlayerArea>
        </ScreenArea>
    </Background>
    )
}
