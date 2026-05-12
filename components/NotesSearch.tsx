import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Spacing } from "../constants/Spacing";

const NotesSearch = ({ searchNote, setSearchNote, theme }) => {
  return (
    <View
      style={[
        styles.inputCover,
        {
          backgroundColor: theme.highlight,
        },
      ]}
    >
      <TextInput
        style={[
          styles.inputStyle,
          {
            backgroundColor: theme.primaryText,
          },
        ]}
        value={searchNote}
        onChangeText={setSearchNote}
        placeholder="Looking for a specfic note?"
      />
      <FontAwesome name="search" size={Spacing.l} color={theme.primaryText} />
    </View>
  );
};

export default NotesSearch;

const styles = StyleSheet.create({
  inputCover: {
    padding: Spacing.sm,
    flex: 1,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: Spacing.l,
    marginRight: 0,
    borderRadius: Spacing.xsm,
    // borderTopLeftRadius: Spacing.big,
    // borderBottomLeftRadius: Spacing.big,
    borderTopRightRadius: Spacing.big,
    borderBottomRightRadius: Spacing.big,
  },
  inputStyle: {
    flex: 1,
    fontSize: Spacing.l,
    fontWeight: 600,
  },
});
