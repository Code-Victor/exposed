import { useFonts } from "expo-font";
import { useEffect } from "react";

/**
 * Custom hook to load fonts and handle font loading state.
 * @returns {[boolean, Error]} An array containing two elements:
 * - `fontsLoaded`: A boolean indicating whether fonts are loaded successfully.
 * - `fontsError`: An error object if there was an issue loading fonts.
 */
export const useFontsLoaded = () => {
  const [fontsLoaded, fontsError] = useFonts({
    montserratLight: require("@/assets/fonts/Montserrat-Light.ttf"),
    montserrat: require("@/assets/fonts/Montserrat-Regular.ttf"),
    montserratMedium: require("@/assets/fonts/Montserrat-Medium.ttf"),
    montserratSemibold: require("@/assets/fonts/Montserrat-SemiBold.ttf"),
    montserratBold: require("@/assets/fonts/Montserrat-Bold.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (fontsError) throw fontsError;
  }, [fontsError]);
  return [fontsLoaded, fontsError];
};
