import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider, RoleProvider } from "./src/contexts";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <RoleProvider>
          <AppNavigator />
        </RoleProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
