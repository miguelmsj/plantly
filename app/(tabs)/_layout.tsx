import { Link, Redirect, Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { theme } from "@/theme";
import { useUserStore } from "@/store/useStore";
import { Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Layout() {
  const hasFinishedOnboarding = useUserStore(
    state => state.hasFinishedOnboarding,
  );

  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colors.green }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
          headerRight: () => (
            <Link href="/newScreen" asChild>
              <Pressable hitSlop={20} style={{ marginRight: 18 }}>
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color={theme.colors.green}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
