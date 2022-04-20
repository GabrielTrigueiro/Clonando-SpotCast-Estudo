import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

export function TresPontos(){
    return(
        <TouchableOpacity>
            <Icon name='ellipsis-vertical-sharp' size={25} color={'white'}/>
        </TouchableOpacity>
    )
}