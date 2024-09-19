import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
export default function Interfade2() {
    return (
        <View style={{ justifyContent : "space-between" }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row" ,justifyContent : 'center'}}>
                <Image style={{ width: 600, height: 280 }} source={{ uri : 'https://www.comingsoon.net/wp-content/uploads/sites/3/2024/02/Twisters-2024-Is-it-Prequel.jpg' }} /> 
            </View>
            <View style={{ flexDirection : "row", justifyContent : "center" ,marginTop : 20}}>
                <View style={{ flexDirection : "row"}}>
                    <FontAwesome style={{marginRight : 20}} name="circle" size={15} color="orange" />
                    <FontAwesome style={{marginRight : 20}} name="circle" size={15} color="white" />
                    <FontAwesome style={{marginRight : 20}} name="circle" size={15} color="white" />
                    <FontAwesome style={{marginRight : 20}} name="circle" size={15} color="white" />
                </View>
    </View>
        </View>    
    );
}
{/* <Image source={{ uri : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }} style={{ width:50, height:50 }} /> */}
