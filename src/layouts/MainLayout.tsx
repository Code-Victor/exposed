import React from "react";
import { Resources } from "@/components/inc";
import { Stack } from "expo-router";
import "react-native-gesture-handler";
import "react-native-reanimated";
import { TamaguiProvider } from "tamagui";
import config from "tamagui.config";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <Resources>
        <Stack
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Resources>
    </TamaguiProvider>
  );
}
