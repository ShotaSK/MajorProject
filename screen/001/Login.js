import React from 'react';
import { Button, Image, Text, View } from 'react-native';
export default function Login() {
    return (
        <View style={{ padding : 10 }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row" ,marginLeft : 20}}>
                <Text style={{ fontSize : 30,color : "white",backgroundColor:"#FFCC66",borderRadius: 10 }}>โปรเเกรมหน้า</Text> 
            </View>
        </View>    
    );
}
{/* <Image source={{ uri : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }} style={{ width:50, height:50 }} /> */}
