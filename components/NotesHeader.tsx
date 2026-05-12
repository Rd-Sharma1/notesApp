import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Spacing } from "../constants/Spacing";
import { notesList } from "../notes/notes";

const NotesHeader = ({ theme }) => {
  const currentDate = new Date();
  // Formats based on device locale (e.g., 'en-US' or 'en-GB')
  const localizedDate = currentDate.toLocaleDateString();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.surface,
          borderColor: theme.border,
        },
      ]}
    >
      <FontAwesome name="pencil" size={Spacing.vbig} color={theme.highlight} />
      <Text style={[styles.head, { color: theme.primary }]}>Your Notes..</Text>
      {/* <Text style={styles.subhead}>All your notes at one place</Text> */}
      <View style={styles.headMeta}>
        <Text style={[styles.subhead, { color: theme.secondaryText }]}>
          You have {notesList.length} notes.
        </Text>
        <Text
          style={[
            styles.datePill,
            {
              backgroundColor: theme.highlight,
              color: theme.primaryText,
            },
          ]}
        >
          {localizedDate}
        </Text>
      </View>
    </View>
  );
};

export default NotesHeader;

const styles = StyleSheet.create({
  container: {
    padding: Spacing.m,
    margin: Spacing.m,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 120,
    borderWidth: 0.5,
    borderRadius: Spacing.xsm,
    borderBottomRightRadius: Spacing.big,
    elevation: Spacing.vsm,
  },
  head: {
    fontSize: Spacing.xxl,
    fontWeight: "800",
    marginHorizontal: Spacing.sm,
    flex: 1,
  },
  subhead: {
    fontSize: Spacing.l,
    padding: Spacing.vsm,
  },
  datePill: {
    borderRadius: Spacing.big,
    padding: Spacing.vsm,
    paddingHorizontal: Spacing.sm,
    margin: Spacing.sm,
    maxWidth: "60%",
  },
  headMeta: {
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: Spacing.vsm,
  },
});
