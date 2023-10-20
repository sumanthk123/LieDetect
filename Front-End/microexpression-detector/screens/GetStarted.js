import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Animated, LayoutAnimation } from "react-native";

const GetStarted = ({ navigation }) => {
  const scaleValue = new Animated.Value(1);

  const handleButtonPress = () => {
    // Create a button press animation
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();

    navigation.navigate("Login"); // Navigate to the Login page
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lie:Detect</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleButtonPress}
        activeOpacity={0.8} // Add a touch feedback effect
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db", // Blue background
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white", // White text color
  },
  button: {
    borderWidth: 2,
    borderColor: "white",
    padding: 15,
    borderRadius: 8,
    width: 200,
    alignItems: "center",
    backgroundColor: "transparent",
    overflow: "hidden", // Clip the button content
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

// Animation configuration for the expanding effect
LayoutAnimation.configureNext({
  duration: 1000, // Animation duration in milliseconds
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.scaleXY,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
  },
});


export default GetStarted;
