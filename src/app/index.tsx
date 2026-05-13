import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Pressable,
  StatusBar,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NoteDisplay from "../../components/NoteDisplay";
import NotesHeader from "../../components/NotesHeader";
import { COLORS } from "../../constants/Color";

export default function NoteDisplayScreen() {
  const currentTheme = useColorScheme();
  const isDark = currentTheme === "dark";

  const [isDarkMode, setIsDarkMode] = useState(isDark);

  const { width } = useWindowDimensions();
  const isTablet = width > 768;

  useEffect(
    () =>
      setIsDarkMode((isDarkMode) =>
        isDarkMode !== isDark ? !isDarkMode : isDarkMode,
      ),
    [isDark],
  );

  const theme = COLORS[isDarkMode ? "dark" : "light"];

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.background,
        flex: 1,
        paddingHorizontal: isTablet ? 32 : 16,
      }}
    >
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <NotesHeader theme={theme} />
      <Pressable
        onPress={() => router.push("/addNotesScreen")}
        style={[styles.floatingButton, { backgroundColor: theme.primary }]}
      >
        <Ionicons name="add" size={32} color="#fff" />
      </Pressable>
      <NoteDisplay
        theme={theme}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",

    bottom: 32,
    right: 24,

    width: 64,
    height: 64,

    borderRadius: 32,

    justifyContent: "center",
    alignItems: "center",

    elevation: 6,

    zIndex: 10,
  },
});
