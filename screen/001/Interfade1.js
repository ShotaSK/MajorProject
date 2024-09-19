import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Interfade1() {
    return (
        <View style={{  }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row" }}>
                <Image style={{ width: 80, height: 80 }} source={ require('../../assets/Major/31e74575d3623cf7b37bd81c02b2c8f6-removebg-preview.png')} />
            </View>
        </View>    
    );
}
{/* <Image source={{ uri : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }} style={{ width:50, height:50 }} /> */}
