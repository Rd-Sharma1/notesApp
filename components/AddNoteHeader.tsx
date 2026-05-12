import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import React from "react";

import { Pressable, StyleSheet, Text, View } from "react-native";

import { Spacing } from "../constants/Spacing";

const AddNoteHeader = ({ theme }) => {
  return (
    <View style={styles.headerContainer}>
      <ImageBackground
        source={require("../assets/images/imageBg.png")}
        style={styles.imageStyle}
        contentFit="cover"
      >
        <View style={styles.insideImageStyle}>
          <View style={styles.navBar}>
            <Pressable style={styles.navBtnText}>
              <Ionicons
                name="chevron-back-outline"
                size={Spacing.xl}
                color={theme.highlight}
              />
            </Pressable>

            <Pressable style={styles.navBtnText}>
              <Ionicons
                name="save-outline"
                size={Spacing.xl}
                color={theme.highlight}
              />
            </Pressable>
          </View>

          <Text style={[styles.headText, { color: theme.primary }]}>
            Ready to write?
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AddNoteHeader;

const styles = StyleSheet.create({
  headerContainer: {
    margin: Spacing.l,
    borderRadius: Spacing.l,
    overflow: "hidden",
  },

  imageStyle: {
    height: 200,
  },

  insideImageStyle: {
    flex: 1,
    justifyContent: "space-between",
    padding: Spacing.l,
  },

  navBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  navBtnText: {
    paddingHorizontal: Spacing.l,
    paddingVertical: Spacing.m,
  },

  headText: {
    fontSize: Spacing.vbig,
    fontWeight: "800",
    alignSelf: "flex-start",
  },
});
