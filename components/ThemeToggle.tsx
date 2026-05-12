import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Switch } from "react-native";
import { Spacing } from "../constants/Spacing";

type prop = {
  isDarkMode: boolean;
  setIsDarkMode: (_: boolean) => void;
};
const ThemeToggle = ({ isDarkMode, setIsDarkMode, theme }: prop) => {
  return (
    <Pressable
      style={[
        styles.toggleCover,
        { backgroundColor: theme.surface, borderColor: theme.border },
      ]}
    >
      <Ionicons
        name="sunny"
        size={Spacing.xl}
        color={isDarkMode ? theme.secondary : theme.primary}
      />
      <Switch
        value={isDarkMode}
        onValueChange={() => setIsDarkMode(!isDarkMode)}
      />
      <Ionicons
        name="moon"
        size={Spacing.xl}
        color={isDarkMode ? theme.primary : theme.secondary}
      />
    </Pressable>
  );
};

export default ThemeToggle;

const styles = StyleSheet.create({
  toggleCover: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: Spacing.l,
    marginLeft: 0,
    paddingHorizontal: Spacing.sm,
    borderWidth: 1,
    borderRadius: Spacing.xsm,
    borderTopLeftRadius: Spacing.big,
    borderBottomLeftRadius: Spacing.big,
  },
});
