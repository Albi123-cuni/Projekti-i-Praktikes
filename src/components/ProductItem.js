import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductItem = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price} €</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    width: 220,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: 140,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  price: {
    color: "green",
    marginTop: 5,
  },
});