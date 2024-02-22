import React from "react";
import { Stack } from "expo-router";

const DefaultStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default DefaultStackLayout;
