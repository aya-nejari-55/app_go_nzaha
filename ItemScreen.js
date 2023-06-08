import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const ItemScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    
    }, []);
    

  return (
    <SafeAreaView className="flex-1 bg-white relative">
        <ScrollView className="flex-1 px-4 py-6">
            <View className="relative bg-white shadow-lg">
                <Image
                source={
                    {uri : "https://cdn.pixabay.com/photo/2018/03/25/18/08/horse-3260153_960_720.jpg"}
                }
                className="w-full h-72 object-cover rounded-2xl mt-5"
                 />
                 <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
                    <TouchableOpacity onPress={() => navigation.navigate("Discover")} className="w-10 h-10 rounded-md items-center justify-center bg-white mt-2">
                        
                    <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />

                    </TouchableOpacity>
                    <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE] mt-2">
                    <FontAwesome5 name="heartbeat" size={24} color="#fff" />

                    </TouchableOpacity>

                 </View>
                 <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
                    <View className="flex-row space-x-2 items-center">
                        <Text className="text-[17px] font-bold text-gray-100">Prix:</Text>
                        <Text className="text-[32px] font-bold text-gray-100">150DH</Text>

                    </View>
                    <View className="px-2 py-2 rounded-md bg-teal-100">
                        <Text>Closed Now</Text>

                    </View>
                    

                 </View>


            </View>
            <View className="mt-1">
            <Text className="text-[#428288] text-[20px] font-bold">
                Equitation
         </Text>
         <View className="flex-row items-center space-x-1">
         <FontAwesome name="map-marker" size={20} color="#8597A2" />
         <Text className="text-[#428288] text-[15px] font-semibold">Rabat</Text>
         </View>

            </View>
            <View className="mt-2 flex-row items-center justify-between">
                <View className="flex-row items-center space-x-2">
                    <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                        <FontAwesome name="star" size={24} color="#D58574" />
                    </View>

                </View>
                <Text className="text-[#515151]">9</Text>
                <Text className="text-[#515151]">/Rattings</Text>
                <View className="flex-row items-center space-x-2">
                    <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                    <MaterialIcons name="attach-money" size={24} color="#D58574" />
                    </View>

                </View>
                <Text className="text-[#515151]">150DH/séance</Text>
                
                <View className="flex-row items-center space-x-2">
                    <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                    <MaterialIcons name="access-time" size={24} color="#D58574" />
                    </View>

                </View>
                <Text className="text-[#515151]">1h</Text>
                
            </View>
            <Text className="mt-2 tracking-wide text-[13px] font-semibold text-[#97A6AF]">
            Horseback riding is a sport, art, and leisure activity that involves the interaction between a human being, called a horseman or horsewoman, and a horse. It is a practice that has existed for thousands of years and has evolved as a means of transportation, work and competition.
            </Text>
            <View className="space-y-2 mt-2 bg-gray-100 rounded-2xl px-4 py-2">
                <View className="items-center flex-row space-x-6">
                <FontAwesome5 name="phone-alt" size={24} color="#428288" />
                <Text className="text-lg">+ 212 661 352 053</Text>
                </View >
                <View className="items-center flex-row space-x-6">
                <FontAwesome name="envelope" size={24} color="#428288" />
                <Text className="text-lg text-[15px]">contact@www.poneyclubderabat.com</Text>


                </View>
                <View className="items-center flex-row space-x-6">
                <Ionicons name="location" size={30} color="#428288" />
                <Text className=" text-[14px]">Poney club de Rabat Route des Zaers, avenue Mohamed VI - km15 - Rabat - Maroc</Text>

                </View>
                <TouchableOpacity>
                <View className="mt-2 px-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-12">
                    <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">
                        Book Now
                    </Text>

                </View>
                </TouchableOpacity>
                
            </View>
           



        </ScrollView>

    </SafeAreaView>
   
  )
}

export default ItemScreen