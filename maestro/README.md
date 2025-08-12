# Maestro E2E Testing for Plantly

## Setup Complete ✅

- [x] Maestro CLI installed via Homebrew
- [x] App bundle IDs configured in app.json
- [x] Test directory structure created
- [x] Basic onboarding test working
- [x] Package.json scripts added

## Test Results

### ✅ Working Tests

1. **Onboarding Flow** (`maestro/flows/onboarding-flow.yaml`)
   - ✅ Launches app successfully
   - ✅ Finds onboarding elements
   - ✅ Completes onboarding flow
   - ✅ Verifies navigation to main screen

### ✅ Working Tests

2. **Plant Management** (`maestro/flows/plant-management-flow.yaml`)
   - ✅ Form interactions work perfectly
   - ✅ Plant creation succeeds (async/await timing fixed)
   - ✅ Plant text detection working with scrollUntilVisible
   - ✅ FlatList item assertions pass
   - **Solution**: Used text-based element selection with scrollUntilVisible for FlatList items

### 📝 Key Discoveries

1. **Keyboard Handling**: Number pad requires different closing strategy than text keyboards
2. **FlatList Testing**: Use `scrollUntilVisible` with text-based selection for reliable item detection
3. **Async Operations**: Use `await` in React Native functions to ensure proper timing before navigation
4. **Element Detection**: Text-based selectors are more reliable than testIDs for nested components
5. **State Management**: App properly transitions between empty and populated states
6. **Form Validation**: All input interactions work correctly

## Key Learnings

1. **App State Behavior**: `clearState` resets onboarding status
2. **Form Interactions**: Text input and button taps work well
3. **Navigation**: Screen transitions are detected properly
4. **Element Detection**: Maestro finds UI elements reliably

## Available Scripts

```bash
# Run all tests
npm run e2e:test

# Run specific tests
npm run e2e:onboarding    # Onboarding flow
npm run e2e:plants        # Plant management
npm run e2e:journey       # Full user journey

# Debug tools
npm run e2e:studio        # Open Maestro Studio
npm run e2e:record        # Record test execution
```

## Next Steps

1. ✅ ~~Fix plant creation assertion~~ - COMPLETED
2. 📝 Create comprehensive test suite
3. 🔧 Add more edge case testing (delete plants, edit plants, etc.)
4. 🚀 Set up CI/CD automation

## Useful Commands

```bash
# Run single test
maestro test maestro/flows/onboarding-flow.yaml

# Open debugging studio
maestro studio

# Record test execution
maestro record maestro/flows/onboarding-flow.yaml
```
