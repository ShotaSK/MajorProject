import React from 'react';
import { View, Text, FlatList, StyleSheet,Image } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
export default function Interfade4() {

    const MOVES = [
        { id: '1', title: 'Movie 1', image:'https://newseries-hd.tv/wp-content/uploads/2024/07/A-Quiet-Place-Day-One-2024-e1719910047467.webp' },
        { id: '2', title: 'Movie 2',image:'https://lumiere-a.akamaihd.net/v1/images/dp3_fight_poster-_1_sheet_4aaaf2ab.jpeg'  },
        { id: '3', title: 'Movie 3', image:'https://s359.kapook.com/r/600/auto/pagebuilder/eeba050d-8abd-4d37-b9f3-7e9ff88ed1cf.jpg' },
        // เพิ่มข้อมูลที่นี่
      ];
      const MovieItem = ({ title, image }) => (
        <View style={styles.item}>
          <Image source={{ uri: image }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
      );
      
      const App = () => {
        const renderItem = ({ item }) => (
          <MovieItem title={item.title} image={item.image} />
        );
      
        return (
          <FlatList
            data={MOVES}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2} // การจัดเรียงแบบ 2 คอลัมน์
            contentContainerStyle={styles.container}
          />
        );
      };
      
      const styles = StyleSheet.create({
        container: {
          padding: 10,
        },
        item: {
          flex: 1,
          margin: 5,
          backgroundColor: '#eee',
          borderRadius: 8,
          overflow: 'hidden',
          alignItems: 'center',
        },
        image: {
          width: '100%',
          height: 150,
          borderRadius: 8,
        },
        title: {
          fontSize: 16,
          fontWeight: 'bold',
          marginVertical: 5,
        },
      });
}
      
//     return (
//         <View style={{ flexDirection: "row",padding : 5}}>
//         <View style={{padding : 5 }}>
//             {/* View ก้อนที่ 1  */}
//             <View style={{ flexDirection: "column"}}>
//                 <Image style={{ width: 150, height: 238 , borderRadius : 10}} source={{ uri : 'https://newseries-hd.tv/wp-content/uploads/2024/07/A-Quiet-Place-Day-One-2024-e1719910047467.webp' }} /> 
//                 <Text style={{ fontSize : 20 , color : 'gray'}}>มิ.ย.2567</Text>
//                 <Text  style={{ fontSize : 30 , color : 'white'}} >ดินเเดนไร้เสียง</Text>
//             </View>
//             <View style={{ flexDirection: "row"}}>
//             <Text style={{textAlign:'center',textAlignVertical:'center',fontSize : 15 ,color : 'white',backgroundColor : 'gray',width: 70, height: 25, borderRadius: 25 / 2 ,justifyContent:'flex-start',alignItems:'center',marginRight : 10}}>Drama</Text>
//             <Text style={{textAlign:'center',textAlignVertical:'center',fontSize : 15 ,color : 'white',backgroundColor : 'gray',width: 70, height: 25, borderRadius: 25 / 2 ,justifyContent:'flex-start',alignItems:'center'}}>Horor</Text>
//             </View>
//         </View>
//         <View style={{padding : 5 }}>
//             {/* View ก้อนที่ 2  */}
//             <View style={{ flexDirection: "column"}}>
//                 <Image style={{ width: 150, height: 238 , borderRadius : 15}} source={{ uri : 'https://newseries-hd.tv/wp-content/uploads/2024/07/A-Quiet-Place-Day-One-2024-e1719910047467.webp' }} /> 
//                 <Text style={{ fontSize : 20 , color : 'gray'}}>มิ.ย.2567</Text>
//                 <Text  style={{ fontSize : 30 , color : 'white'}} >ดินเเดนไร้เสียง</Text>
//             </View>
//             <View style={{ flexDirection: "row"}}>
//             <Text style={{textAlign:'center',textAlignVertical:'center',fontSize : 15 ,color : 'white',backgroundColor : 'gray',width: 70, height: 25, borderRadius: 25 / 2 ,justifyContent:'flex-start',alignItems:'center',marginRight : 10}}>Drama</Text>
//             <Text style={{textAlign:'center',textAlignVertical:'center',fontSize : 15 ,color : 'white',backgroundColor : 'gray',width: 70, height: 25, borderRadius: 25 / 2 ,justifyContent:'flex-start',alignItems:'center'}}>Horor</Text>
//             </View>
//         </View>
//         <View style={{padding : 5 }}>
//             {/* View ก้อนที่ 3  */}
//             <View style={{ flexDirection: "column"}}>
//                 <Image style={{ width: 150, height: 238 , borderRadius : 15}} source={{ uri : 'https://newseries-hd.tv/wp-content/uploads/2024/07/A-Quiet-Place-Day-One-2024-e1719910047467.webp' }} /> 
//                 <Text style={{ fontSize : 20 , color : 'gray'}}>มิ.ย.2567</Text>
//                 <Text  style={{ fontSize : 30 , color : 'white'}} >ดินเเดนไร้เสียง</Text>
//             </View>
//             <View style={{ flexDirection: "row"}}>
//             <Text style={{textAlign:'center',textAlignVertical:'center',fontSize : 15 ,color : 'white',backgroundColor : 'gray',width: 70, height: 25, borderRadius: 25 / 2 ,justifyContent:'flex-start',alignItems:'center',marginRight : 10}}>Drama</Text>
//             <Text style={{textAlign:'center',textAlignVertical:'center',fontSize : 15 ,color : 'white',backgroundColor : 'gray',width: 70, height: 25, borderRadius: 25 / 2 ,justifyContent:'flex-start',alignItems:'center'}}>Horor</Text>
//             </View>
//         </View>
//         </View>
            
//     );
//   }
