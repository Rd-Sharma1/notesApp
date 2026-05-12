import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Spacing } from "../constants/Spacing";

const NoteCard = ({ note, theme }) => {
  const { title, content, category, lastModified, isPinned } = { ...note };

  const metaStyle = StyleSheet.compose(styles.meta, {
    backgroundColor: theme.secondary,
    color: theme.primaryText,
  });

  //   console.log(note);
  return (
    // {Object.keys(note)===0 ? :}
    <View
      style={[
        styles.Card,
        {
          backgroundColor: theme.surface,
          borderColor: theme.border,
        },
      ]}
    >
      <Pressable>
        <Text
          style={[styles.noteHead, { color: theme.primary }]}
          numberOfLines={1}
        >
          {title}
        </Text>
        <View style={styles.metaView}>
          <Text style={metaStyle}>{category}</Text>
          <Text style={metaStyle}>{lastModified.slice(0, 10)}</Text>
        </View>
        <Text
          style={{ color: theme.secondaryText, fontSize: Spacing.l }}
          numberOfLines={3}
        >
          {content}
        </Text>
      </Pressable>
    </View>
  );
};

export default NoteCard;

const styles = StyleSheet.create({
  Card: {
    maxHeight: 180,
    borderRadius: Spacing.xsm,
    borderBottomEndRadius: Spacing.big,
    borderWidth: 2,
    padding: Spacing.m,
    margin: Spacing.l,
    justifyContent: "space-evenly",
  },
  noteHead: {
    fontSize: Spacing.xxl,
    fontWeight: "600",
    margin: Spacing.sm,
  },
  metaView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: Spacing.sm,
  },
  meta: {
    padding: Spacing.xsm,
    borderRadius: 100,
    fontSize: Spacing.m,
    fontWeight: "500",
  },
});
