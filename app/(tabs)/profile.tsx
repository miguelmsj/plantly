import { View, Text, StyleSheet, Button } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/useStore";

export default function ProfileScreen() {
  const toggleHasOnboarded = useUserStore(state => state.toggleHasOnboarded);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Button title="Back to onboarding" onPress={toggleHasOnboarded} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  text: {
    fontSize: 24,
  },
});
