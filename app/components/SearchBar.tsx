import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  onPress: () => void;
  onChangeText: (text: string) => void;
  value: string;
  placeholder?: string;
}

const SearchBar = ({ onPress, onChangeText, value, placeholder }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
        <Image
          source={require("../../assets/icons/search.png")}
          className="size-5"
          resizeMode="contain"
          style={{ tintColor: "#AB8BFF" }}

        />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#A8B5DB"
          onPress={onPress}
          onChangeText={onChangeText}
          value={value}
          className="flex-1 ml-3 text-white"
        />
    </View>
  )
}

export default SearchBar;
