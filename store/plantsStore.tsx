import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type PlantType = {
  id: string;
  name: string;
  wateringFrequencyDays: number;
  lastWateredAtTimestamp?: number;
};

type PlantsState = {
  nextId: number;
  plants: PlantType[];
  addPlant: (name: string, wateringFrequencyDays: number) => void;
  removePlant: (plantId: string) => void;
  waterPlant: (plantId: string) => void;
};

export const usePlantsStore = create(
  persist<PlantsState>(
    set => ({
      nextId: 1,
      plants: [],
      addPlant: (name: string, wateringFrequencyDays: number) => {
        return set(state => {
          return {
            ...state,
            nextId: state.nextId + 1,
            plants: [
              {
                id: state.nextId.toString(),
                name,
                wateringFrequencyDays,
              },
              ...state.plants,
            ],
          };
        });
      },
      removePlant: (plantId: string) => {
        return set(state => {
          const newPlants = state.plants.filter(plant => plant.id !== plantId);
          return { ...state, plants: newPlants };
        });
      },
      waterPlant: (plantId: string) => {
        return set(state => {
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
