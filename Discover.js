import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from '../assets';
import MenuContainer from '../components/MenuContainer';
import { Entypo } from '@expo/vector-icons';
import ItemCarDontainer from '../components/ItemCarDontainer';
import { getPlacesData } from '../api';

const Discover = () => {
    
        const navigation = useNavigation();
        const [type, setType] = useState("restaurants");
        const [isLoading, setisLoading] = useState(false);
        const [mainData, setMainData] = useState([]);
        useLayoutEffect(() => {
            navigation.setOptions({
                headerShown : false,
            });
        }, [] );
        useEffect(() => {
            setisLoading(true);
            getPlacesData().then(data => {
                setMainData(data);
                setInterval(() => {
                    setisLoading(false);
                }, 2000);
            })
        }, [])
  return (
    <SafeAreaView className="flex-1 bg-white relative">
        <View className="flex-row items-center justify-between px-8 mt-11">
            <View>
                <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
                <Text className="text-[#527283] text-[30px]">the beauty place</Text>
            </View>

            <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
                <Image
                source={Avatar}
                className="w-full h-full rounded-md object-cover"
                
                />
            </View>
        </View>
        <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        <GooglePlacesAutocomplete
        GooglePlacesDetailsQuery={{fields :"geometry"}}
      placeholder='Search'
      fetchDetails={true}

      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(details?.geometry?.viewport);
      }}
      query={{
        key: 'AIzaSyDWda5rS06I0q0fY8aQaGyCVJdErHc-fQk',
        language: 'en',
      }}
    />

        </View>
        {/* Menu Container */}
        {isLoading ? <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="##B646B" />
        </View> :
         <ScrollView>
         <View className="flex-row items-center justify-between px-2 mt-8">
             <MenuContainer
             key={"hotel"}
             title="Hotels"
             imageSrc = {Hotels}
             type={type}
             setType={setType}
             
             />
             <MenuContainer
             key={"attractions"}
             title="Activities"
             imageSrc = {Attractions}
             type={type}
             setType={setType}
             
             />
             <MenuContainer
             key={"restaurants"}
             title="Restaurants"
             imageSrc = {Restaurants}
             type={type}
             setType={setType}
             
             />

         </View>
         <View>
             <View className="flex-row items-center justify-between px-3 mt-3">
                 <Text className="text-[#2C7379] text-[25px] font-bold">Top Tips</Text>
                 <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                     <Text className="text-[#A0C4C7] text-[20px] font-bold">Explore</Text>
                     <Entypo name="arrow-long-right" size={24} color="#A0C4C7" />
                 </TouchableOpacity>
             </View>
             <View className="px-4 mt-4 flex-row items-center justify-evenly flex-wrap">
                
                <ItemCarDontainer key={"101"} imageSrc={"https://cdn.pixabay.com/photo/2017/04/08/10/23/surfing-2212948_960_720.jpg"} title="Surf" location="Casablanca" />
             <ItemCarDontainer key={"102"} imageSrc={"https://cdn.pixabay.com/photo/2018/03/25/18/08/horse-3260153_960_720.jpg"}  title="Equitation" location="Rabat"/>
             <ItemCarDontainer key={"103"} imageSrc={"https://cdn.pixabay.com/photo/2013/02/09/04/33/scuba-diving-79606_960_720.jpg"}  title="Plongée" location="Tanger"/>
             <ItemCarDontainer key={"104"} imageSrc={"https://cdn.pixabay.com/photo/2016/11/22/19/25/man-1850181_960_720.jpg"}  title="Randonnée" location="Ouzoud"/>



             
         </View>
     </View>
     </ScrollView>

        
        }
       
      
    </SafeAreaView>
  );
};

export default Discover