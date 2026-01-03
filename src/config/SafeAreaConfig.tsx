/**
 * SafeArea Global Configuration
 *
 * @description Override SafeAreaView default behavior for the entire app
 * @usage Import this file once in App.tsx
 *
 * import 'src/config/SafeAreaConfig';
 */

import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

/**
 * SafeAreaProvider with default configuration
 * Wrap your entire app with this provider in App.tsx:
 *
 * <SafeAreaProvider>
 *   <App />
 * </SafeAreaProvider>
 */
export { SafeAreaProvider };

/**
 * Default edges configuration for SafeAreaView
 * All SafeAreaView in the app will use both top and bottom edges
 */
export const DEFAULT_SAFE_AREA_EDGES = ["top", "bottom"] as const;

/**
 * Helper hook to get default safe area configuration
 */
export const useSafeAreaConfig = () => {
  return {
    edges: DEFAULT_SAFE_AREA_EDGES,
  };
};
