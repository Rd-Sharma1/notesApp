import { useEffect, useState } from "react";
import { StatusBar, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NoteDisplay from "../../components/NoteDisplay";
import NotesHeader from "../../components/NotesHeader";
import { COLORS } from "../../constants/Color";

export default function NoteDisplayScreen() {
  const currentTheme = useColorScheme();
  const isDark = currentTheme === "dark";

  const [isDarkMode, setIsDarkMode] = useState(isDark);

  useEffect(
    () =>
      setIsDarkMode((isDarkMode) =>
        isDarkMode !== isDark ? !isDarkMode : isDarkMode,
      ),
    [isDark],
  );

  const theme = COLORS[isDarkMode ? "dark" : "light"];

  return (
    <SafeAreaView style={{ backgroundColor: theme.background, flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <NotesHeader theme={theme} />
      <NoteDisplay
        theme={theme}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
    </SafeAreaView>
  );
}
