import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { HeroImage } from '../assets';

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown : false,
        });
    }, [] );
  return (
    <SafeAreaView className="bg-white-100 flex-1 relative">
        {/* First section */}
        <View className="flex-row px-6 mt-11 items-center space-x-2">
            <View className="w-11 h-11 bg-black rounded-full items-center justify-center">
                <Text className="text-[#00BCC9] text-2xl font-semibold">Go</Text>
            </View>
            <Text className="text-[#2A2B4B] text-2xl font-semibold">Nzaha</Text>
        </View>
        {/* Second section */}
        <View className="px-6 mt-8 space-y-3">
            <Text className="text-[#3C6072] text-[30px]">Enjoy your Nzaha with</Text>
            <Text className="text-[#00BCC9] text-[29px] font-bold">Good Moments</Text>
            <Text className="text-[#3C6072] text-base">
                Nzaha is an innovative travel app designed to make organizing and planning your trips easier. Nzaha is there to accompany you at every stage of your journey.
                </Text>
        </View>
        {/* Circle section */}
        <View className="w-[300px] h-[300px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
        <View className="w-[300px] h-[300px] bg-[#E99265] rounded-full absolute -bottom-28 -left-20"></View>

        {/* Image Container */}
        <View className="flex-1 relative items-center justify-center">
            <Animatable.Image 
            animation="fadeIn"
            easing="ease-in-out"
            source={HeroImage}
            className="w-full h-full object-cover mt-11"
            
            />
            
            <TouchableOpacity
            onPress={() => navigation.navigate("Discover")}
            
            className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
            
            <Animatable.View animation={"pulse"} easing="ease-in-out" iterationCount={"infinite"} className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
                <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
            </Animatable.View>
            
        </TouchableOpacity>
       


        </View>
        

        

    </SafeAreaView>
  )
}

export default HomeScreen