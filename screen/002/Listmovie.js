import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";

export default function Listmovie(props) {
  const tours = [
    {
      id: "1",
      title: "โต๊ะโตะจัง",
      uri: "https://lh3.googleusercontent.com/ODt0H9Ze9vGAZoK24hbEwE0BHMssKcXvgk5miOFZ6yQHs3EB-h7PgiyzJs7cX45JxnlZkLZLBLgRgDJmWFwMCNoRMID-Nh6how=w260",
      style: "",
    },
    {
      id: "2",
      title: "Tour in Paris",
      uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg",
      style: "",
    },
    {
      id: "3",
      title: "Tour in Italy",
      uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-3.jpg",
      style: "",
    },
    {
      id: "4",
      title: "Tour in Portugal",
      uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-4.jpg",
      style: "",
    },
    {
      id: "5",
      title: "Tour in Netherlands",
      uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-5.jpg",
      style: "",
    },
  ];
  const [onlineTours, setOnlineTours] = useState([]);
  const loadOnlineTours = async () => {
    try {
      let text = await fetch(
        "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/trips.json"
      );
      let data = await text.json();
      console.log("Load Data : ", data);
      //SET STATE
      setOnlineTours(data);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };

  useEffect(() => {
    loadOnlineTours();
  }, []);

  return (
    <View>
      <View>
        <FlatList
          horizontal={true}
          // numColumns={2}
          // columnWrapperStyle={{ justifyContent: 'space-between'}}
          //   data={tours}
          data={onlineTours}
          renderItem={({ item, index }) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{
                      width: 150,
                      height: 238,
                      borderRadius: 10,
                      marginLeft: 10,
                    }}
                    source={{ uri: item.uri }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "white",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    {item.id}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "white",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      textAlign: "center",
                      textAlignVertical: "center",
                      fontSize: 15,
                      color: "white",
                      backgroundColor: "gray",
                      width: 70,
                      height: 25,
                      borderRadius: 25 / 2,
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    Drama
                  </Text>
                  {/* {item.style} */}
                  <Text
                    style={{
                      textAlign: "center",
                      textAlignVertical: "center",
                      fontSize: 15,
                      color: "white",
                      backgroundColor: "gray",
                      width: 70,
                      height: 25,
                      borderRadius: 25 / 2,
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    Horor
                  </Text>
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
