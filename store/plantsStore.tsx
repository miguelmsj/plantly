import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";

export type PlantType = {
  id: string;
  name: string;
  wateringFrequencyDays: number;
  lastWateredAtTimestamp?: number;
  imageUri?: string;
};

type PlantsState = {
  nextId: number;
  plants: PlantType[];
  addPlant: (
    name: string,
    wateringFrequencyDays: number,
    imageUri?: string,
  ) => Promise<void>;
  removePlant: (plantId: string) => void;
  waterPlant: (plantId: string) => void;
};

export const usePlantStore = create(
  persist<PlantsState>(
    set => ({
      nextId: 1,
      plants: [],
      addPlant: async (
        name: string,
        wateringFrequencyDays: number,
        imageUri?: string,
      ) => {
        const savedImageUri =
          FileSystem.documentDirectory +
          `${new Date().getTime()}-${imageUri?.split("/").slice(-1)[0]}`;

        console.log("savedImageUri", savedImageUri);

        if (imageUri) {
          await FileSystem.copyAsync({
            from: imageUri,
            to: savedImageUri,
          });
        }

        set(state => {
          return {
            ...state,
            nextId: state.nextId + 1,
            plants: [
              {
                id: state.nextId.toString(),
                name,
                wateringFrequencyDays,
                imageUri: imageUri ? savedImageUri : undefined,
              },
              ...state.plants,
            ],
          };
        });
      },
      removePlant: (plantId: string) => {
        set(state => {
          const newPlants = state.plants.filter(plant => plant.id !== plantId);
          return { ...state, plants: newPlants };
        });
      },
      waterPlant: (plantId: string) => {
        set(state => {
          const newPlants = state.plants.map(plant => {
            if (plant.id === plantId) {
              return { ...plant, lastWateredAtTimestamp: Date.now() };
            }

            return plant;
          });

          return { ...state, plants: newPlants };
        });
      },
    }),
    {
      name: "plantly-plants-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
