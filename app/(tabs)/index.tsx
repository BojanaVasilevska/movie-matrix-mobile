import { useRouter } from "expo-router";
import { Image, ScrollView, View } from "react-native";
import SearchBar from "../components/SearchBar";

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-primary">
      <Image 
        source={require("../../assets/images/bg.png")} 
        className="absolute w-full z-0"
      />
      <ScrollView 
        className="flex-1 px-5" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}  
        >
        <Image 
          source={require("../../assets/icons/logo.png")} 
          className="w-28 h-24 mx-auto mt-20 mb-5"
        />
        <View className="flex-1 mt-5">
          <SearchBar 
            onPress={() => router.push("/search")}
            onChangeText={() => {}}
            placeholder="Search movies, TV shows..."
            value=""
          />
        </View>
      </ScrollView>
    </View>
  );
}
