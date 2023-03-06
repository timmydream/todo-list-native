import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Item = ({ text, handleRemoveTask }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.square} onPress={handleRemoveTask} />
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 10,
    flexDirection: "row",
  },
  square: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 10,
    borderColor: "#dadada",
  },
});

export default Item;
