import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AddNoteHeader from "../../components/AddNoteHeader";
import WriteNote from "../../components/WriteNote";

import { COLORS } from "../../constants/Color";

export default function AddNotesScreen() {
  const colorScheme = useColorScheme();

  const isDark = colorScheme === "dark";

  const theme = COLORS[isDark ? "dark" : "light"];

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <AddNoteHeader theme={theme} />
      <WriteNote theme={theme} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
