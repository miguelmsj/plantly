import { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  Platform,
} from "react-native";
import { theme } from "@/theme";
import { PlantlyImage } from "@/components/PlantlyImage";
import { PlantlyButton } from "@/components/PlantlyButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { usePlantStore } from "@/store/plantsStore";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";

export default function NewPlant() {
  const router = useRouter();
  const addPlant = usePlantStore(state => state.addPlant);
  const [name, setName] = useState<string>("");
  const [days, setDays] = useState<number | undefined>(undefined);
  const [imageUri, setImageUri] = useState<string>();

  const handleSubmit = () => {
    if (!name) {
      return Alert.alert("Validation error", "Give your plant a name");
    }

    if (!days || days <= 0) {
      return Alert.alert(
        "Validation error",
        `How often does ${name} need to be watered? Please enter a positive number.`,
      );
    }

    addPlant(name, days, imageUri);
    router.dismiss();
  };

  const handleDaysChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");

    if (numericValue === "") {
      setDays(undefined);
    } else {
      const number = parseInt(numericValue, 10);
      setDays(number);
    }
  };

  const handleChooseImage = async () => {
    if (Platform.OS === "web") {
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableOpacity
        style={styles.centered}
        activeOpacity={0.8}
        onPress={handleChooseImage}
      >
        <PlantlyImage />
      </TouchableOpacity>
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="E.g Casper the Cactus"
        autoCapitalize="sentences"
        style={styles.input}
      />
      <Text style={styles.label}>Watering frequency (every x days)</Text>
      <TextInput
        value={days?.toString() || ""}
        onChangeText={handleDaysChange}
        placeholder="E.g 6"
        keyboardType="number-pad"
        style={styles.input}
      />
      <PlantlyButton title="Add plant" onPress={handleSubmit} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  contentContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  input: {
    borderWidth: 2,
    borderColor: theme.colors.lightGrey,
    padding: 12,
    borderRadius: 6,
    marginBottom: 24,
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  centered: {
    alignItems: "center",
    marginBottom: 24,
  },
});
