import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Interfade1 from './001/Interfade1';
import Interfade2 from './001/Interfade2';
import Interfade3 from './001/Interfade3';
import Interfade4 from './001/Interfade4';
import Useflatlist from './002/Useflatlist';
import Listmovie from './002/Listmovie';
import Interfade5 from './001/Interfade5';
import Login from './001/Login';
export default function Main1() {
    return (
        <ScrollView>
            <View style={{ flex: 1 ,backgroundColor : 'black' }}>
                <Interfade1/>
                <Interfade2/>
                <Interfade3/>
                <Interfade4/>
                <Useflatlist/>
                <Login/>
                <Interfade5/>
                <Listmovie/>
                
            </View>
        </ScrollView>
    );
}
