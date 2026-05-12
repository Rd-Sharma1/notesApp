import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TextInput,
    View,
} from "react-native";

import { Spacing } from "../constants/Spacing";

const WriteNote = ({ theme }) => {
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardContainer}
    >
      <View style={styles.WriteAreaBox}>
        <View
          style={[
            styles.titleInputWrapper,
            { backgroundColor: theme.secondary },
          ]}
        >
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Note title..."
            placeholderTextColor={theme.primaryText}
            style={[styles.titleInp, { color: theme.primaryText }]}
          />
        </View>

        <View
          style={[
            styles.noteTextInputWrapper,
            { backgroundColor: theme.surface },
          ]}
        >
          <TextInput
            value={noteText}
            multiline
            numberOfLines={10}
            onChangeText={setNoteText}
            placeholder="Start writing your note..."
            placeholderTextColor={theme.secondaryText}
            style={[styles.noteInp, { color: theme.highlight }]}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default WriteNote;

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },

  WriteAreaBox: {
    flex: 1,
    margin: Spacing.l,
    padding: Spacing.l,
    gap: Spacing.vbig,
  },

  titleInputWrapper: {
    borderWidth: 1,
    borderColor: "#00000010",
    borderRadius: Spacing.sm,
    borderBottomRightRadius: Spacing.big,
    padding: Spacing.m,
  },

  titleInp: {
    fontSize: Spacing.l,
    fontWeight: "600",
  },

  noteTextInputWrapper: {
    flex: 1,
    borderRadius: Spacing.big,
    padding: Spacing.xl,
  },

  noteInp: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: Spacing.l,
    lineHeight: 28,
  },
});
