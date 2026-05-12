import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Spacing } from "../constants/Spacing";
import { notesList } from "../notes/notes";
import NoteCard from "./NoteCard";
import NotesSearch from "./NotesSearch";
import ThemeToggle from "./ThemeToggle";

const NoteDisplay = ({ theme, isDarkMode, setIsDarkMode }) => {
  const [searchNote, setSearchNote] = useState("");

  const filteredNotesList = notesList.filter(
    (note) =>
      note.title.toLowerCase().includes(searchNote.toLowerCase()) ||
      note.content.toLowerCase().includes(searchNote.toLowerCase()) ||
      note.category.toLowerCase().includes(searchNote.toLowerCase()),
  );

  return (
    <View>
      <View style={styles.searchToggleBar}>
        <NotesSearch
          searchNote={searchNote}
          setSearchNote={setSearchNote}
          theme={theme}
        />
        <ThemeToggle
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          theme={theme}
        />
      </View>

      <FlatList
        data={searchNote === "" ? notesList : filteredNotesList}
        keyExtractor={(note) => note.id}
        renderItem={({ item }) => <NoteCard note={item} theme={theme} />}
        scrollEnabled={true} //scroll not working on flatlist!!!!
        // ListEmptyComponent={<NoteCard note={null} theme={theme} />}
        ListEmptyComponent={
          <Text
            style={[
              styles.notFoundStyle,
              {
                color: theme.secondaryText,
              },
            ]}
          >
            No notes found..
          </Text>
        }
        contentContainerStyle={{
          paddingBottom: 240,
        }}
      />
    </View>
  );
};

export default NoteDisplay;

const styles = StyleSheet.create({
  searchToggleBar: {
    gap: Spacing.sm,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  notFoundStyle: {
    fontSize: Spacing.xl,
    margin: Spacing.vbig,
    padding: Spacing.vbig,
    textAlign: "center",
  },
});
