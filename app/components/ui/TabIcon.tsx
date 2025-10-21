import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

interface TabIconProps {
  focused?: boolean;
  icon: string;
  title: string;
  showHighlight?: boolean;
  iconColor?: {
    focused: string;
    unfocused: string;
  };
  textColor?: {
    focused: string;
    unfocused: string;
  };
}

const iconMap: { [key: string]: any } = {
  home: require("../../../assets/icons/home.png"),
  search: require("../../../assets/icons/search.png"),
  person: require("../../../assets/icons/person.png"),
  saved: require("../../../assets/icons/saved.png"),
};

function TabIcon({ 
  focused = false, 
  icon, 
  title, 
  showHighlight = true,
  iconColor = { focused: "#FFFFFF", unfocused: "#71668a" },
  textColor = { focused: "#FFFFFF", unfocused: "#71668a" }
}: TabIconProps) {
  const iconTintColor = focused ? iconColor.focused : iconColor.unfocused;
  const textColorClass = focused ? textColor.focused : textColor.unfocused;
  const iconSource = iconMap[icon];

  if (!focused) {
    return (
      <View className="flex flex-col items-center justify-center w-16 h-full">
        <Image
          source={iconSource}
          tintColor={iconTintColor}
          className="size-5"
        />
      </View>
    );
  }

  return (
    <View className="flex flex-col items-center justify-center h-full">
      <ImageBackground
        source={showHighlight ? require("../../../assets/images/highlight.png") : undefined}
        className="flex flex-row items-center justify-center min-w-[110px] h-16 rounded-full overflow-hidden px-4"
        resizeMode="cover"
        imageStyle={{ borderRadius: 25 }}
      >
        <Image
          source={iconSource}
          tintColor={iconTintColor}
          className="size-5"
        />
        <Text className="text-sm font-semibold ml-2" style={{ color: textColorClass }}>
          {title}
        </Text>
      </ImageBackground>
    </View>
  );
}

export default TabIcon;
