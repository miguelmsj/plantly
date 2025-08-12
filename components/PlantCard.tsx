import { StyleSheet, View, Text, Pressable } from "react-native";
import { theme } from "@/theme";
import { PlantType } from "@/store/plantsStore";
import { PlantlyImage } from "./PlantlyImage";
import { Link } from "expo-router";

export function PlantCard({ plant }: { plant: PlantType }) {
  return (
    <Link href={`/plants/${plant.id}`} asChild>
      <Pressable style={styles.plantCard} testID={`plant-card-${plant.id}`}>
        <PlantlyImage size={100} imageUri={plant.imageUri} />
        <View style={styles.details}>
          <Text
            numberOfLines={1}
            style={styles.plantName}
            testID={`plant-name-${plant.id}`}
          >
            {plant.name}
          </Text>
          <Text style={styles.subtitle} testID={`plant-frequency-${plant.id}`}>
            Water every {plant.wateringFrequencyDays} days
          </Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  plantCard: {
    flexDirection: "row",
    shadowColor: theme.colors.black,
    backgroundColor: theme.colors.white,
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  details: {
    padding: 14,
    justifyContent: "center",
  },
  plantName: {
    fontSize: 18,
    marginBottom: 4,
  },
  subtitle: {
    color: theme.colors.grey,
  },
});
