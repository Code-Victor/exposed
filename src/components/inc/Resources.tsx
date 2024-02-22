import React from "react";
import { useFontsLoaded } from "@/hooks";
import { SplashScreen } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export function Resources({ children }: { children: React.ReactNode }) {
  const [fontsLoaded, fontsError] = useFontsLoaded();
  React.useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);
  if (!fontsLoaded && !fontsError) {
    return null;
  }
  return <>{children}</>;
}
