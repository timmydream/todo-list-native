import { StyleSheet, Text, View } from "react-native";
import { useParams, Link } from "react-router-native";

const ItemPage = () => {
  const { item } = useParams();

  return (
    <View style={styles.container}>
      <Link to="/" underlayColor="#fff">
        <Text>Return</Text>
      </Link>
      <Text style={styles.title}>Note:</Text>
      <Text>{item}</Text>
    </View>
  );
};

export default ItemPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 32,
    paddingVertical: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
  },
});
