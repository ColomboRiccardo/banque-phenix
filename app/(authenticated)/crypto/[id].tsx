import { View, Text, SectionList, StyleSheet } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { defaultStyles } from "@/constants/Styles";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Page = () => {
  const { id } = useLocalSearchParams();
  const headerHeight = useHeaderHeight();

  return (
    <>
      <Stack.Screen options={{ title: "Bitcoin" }} />
      <SectionList
        style={{ paddingTop: headerHeight }}
        keyExtractor={(item) => item.title}
        sections={[{ data: [{ title: "Chart" }] }]}
        renderItem={({ item }) => (
          <>
            <View style={[defaultStyles.block, { marginTop: 20 }]}>
              <Text style={styles.subtitle}>Overview</Text>
              <Text style={{ color: Colors.gray }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                aut nemo vero nulla aperiam saepe veritatis accusamus
                reprehenderit dignissimos quasi, temporibus iusto ad suscipit
                enim iure! Totam officiis repellendus aperiam!
              </Text>
            </View>
          </>
        )}
      ></SectionList>
    </>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: Colors.gray,
  },
});

export default Page;
