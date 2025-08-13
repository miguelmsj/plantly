# 🌱 Plantly

A beautiful React Native plant care app that helps you keep track of your plants and their watering schedules.

## 📱 Features

- **Plant Management**: Add, view, and delete your plants
- **Watering Tracking**: Set watering frequency and track when you last watered each plant
- **Photo Support**: Add photos to your plants using the device camera or photo library
- **Smart Notifications**: Visual indicators for when plants need watering
- **Onboarding**: First-time user experience to introduce the app

## 🏗️ Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **Expo Router** for file-based navigation
- **Zustand** for state management
- **AsyncStorage** for data persistence
- **date-fns** for date manipulation
- **Expo Image Picker** for photo functionality
- **Maestro** for E2E testing

## 🚀 Getting Started

### Prerequisites

- Node.js (16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (or physical device)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/miguelmsj/plantly.git
cd plantly
```

2. Install dependencies:

```bash
npm install
```

3. Prebuild for native platforms (required for E2E testing):

```bash
# For iOS
npx expo prebuild --platform ios

# For Android
npx expo prebuild --platform android

# For both platforms
npx expo prebuild
```

4. Start the development server:

```bash
npm start
```

5. Run on your preferred platform:

```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## 📂 Project Structure

```
plantly/
├── app/                    # App screens (file-based routing)
│   ├── (tabs)/            # Tab navigation
│   │   ├── (home)/        # Home tab screens
│   │   │   ├── index.tsx  # Plant list screen
│   │   │   └── plants/    # Plant detail screens
│   │   └── profile.tsx    # Profile screen
│   ├── newPlant.tsx       # Add new plant screen
│   └── onboarding.tsx     # Onboarding screen
├── components/            # Reusable UI components
│   ├── PlantCard.tsx     # Plant list item component
│   ├── PlantlyButton.tsx # Custom button component
│   └── PlantlyImage.tsx  # Custom image component
├── store/                # State management
│   ├── plantsStore.ts    # Plants data and actions
│   └── userStore.ts      # User preferences
├── maestro/              # E2E tests
│   ├── flows/           # Test flows
│   └── subflows/        # Reusable test components
└── assets/              # Images and static assets
```

## 🧪 Testing

The app includes comprehensive E2E testing using Maestro.

> **Note**: E2E tests require native builds. Make sure you've run `npx expo prebuild` before running tests.

### Running Tests

```bash
# Run all E2E tests
npm run e2e:test

# Run specific test suites
npm run e2e:onboarding    # Onboarding flow
npm run e2e:plants        # Plant management
npm run e2e:journey       # Full user journey

# Debug tools
npm run e2e:studio        # Open Maestro Studio
npm run e2e:record        # Record test execution
```

### Test Coverage

- ✅ **Onboarding Flow**: First-time user experience
- ✅ **Plant Management**: Add, view, and delete plants
- ✅ **Form Interactions**: Input validation and keyboard handling
- ✅ **Navigation**: Screen transitions and tab navigation
- ✅ **FlatList Testing**: Plant list rendering and scrolling

## 📱 Screenshots

_Add screenshots of your app here_

## 🔧 Development

### Key Components

- **PlantCard**: Displays plant information in the list
- **PlantlyButton**: Consistent button styling across the app
- **PlantlyImage**: Handles plant photos with fallback states

### State Management

The app uses Zustand for simple, efficient state management:

- **plantsStore**: Manages plant data, adding/removing plants, watering tracking
- **userStore**: Handles user preferences and onboarding status

### Navigation

Built with Expo Router using file-based routing:

- Tab navigation for main app sections
- Stack navigation for plant details
- Modal presentation for adding new plants

## 🛠️ Available Scripts

```bash
# Development
npm start              # Start Expo development server
npm run ios            # Run on iOS simulator
npm run android        # Run on Android emulator
npm run web            # Run in web browser

# Testing
npm run e2e:test       # Run all E2E tests
npm run e2e:onboarding # Test onboarding flow
npm run e2e:plants     # Test plant management
npm run e2e:journey    # Test complete user journey

# Code Quality
npm run lint           # Run ESLint
npm run type-check     # Run TypeScript compiler
```

## 🔮 Future Enhancements

- [ ] Push notifications for watering reminders
- [ ] Plant care tips and information
- [ ] Weather integration
- [ ] Social features (sharing plants)
- [ ] Plant identification using AI
- [ ] Watering history analytics
- [ ] Plant health tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Built with [Expo](https://expo.dev/)
- Icons and images from [Expo Assets](https://docs.expo.dev/guides/assets/)
- Testing framework: [Maestro](https://maestro.mobile.dev/)
- State management: [Zustand](https://zustand-demo.pmnd.rs/)

---

Made with ❤️ and 🌱 by Miguel San Juan
