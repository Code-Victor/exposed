import React from "react";
import { Resources } from "@/components/inc";
import { Stack } from "expo-router";
import "react-native-gesture-handler";
import "react-native-reanimated";
import { TamaguiProvider } from "tamagui";
import config from "tamagui.config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

const queryClient = new QueryClient();
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
