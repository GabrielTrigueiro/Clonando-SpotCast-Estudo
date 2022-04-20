import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

export function SetaBaixo(){
    return(
        <TouchableOpacity>
            <Icon name='caret-down-sharp' size={25}  color={'white'}/>
        </TouchableOpacity>
    )
}