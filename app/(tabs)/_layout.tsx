import { Tabs } from "expo-router";
import TabIcon from "../components/ui/TabIcon";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          borderTopWidth: 0,
          borderTopColor: "#0F0D23",
          marginHorizontal: 20,
          marginBottom: 20,
          position: "absolute",
          overflow: "hidden",
          elevation: 0,
          height: 50,
          paddingTop: 8,
          paddingBottom: 8,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              focused={focused} 
              icon="home" 
              title="Home" 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              focused={focused}
              icon="search"
              title="Search"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              focused={focused}
              icon="saved"
              title="Saved"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              focused={focused}
              icon="person"
              title="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
