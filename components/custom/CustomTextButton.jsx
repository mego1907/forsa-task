import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ActivityIndicator } from 'react-native';


const CustomTextButton = ({
  title,
  onPress,
  color = '#ff5265',
  disabled = false,
  loading = false,
  style,
  textStyle,
}) => {
  
  // Merge styles for the container
  const containerStyles = [styles.buttonContainer, { backgroundColor: color }, style];
  
  // Handle disabled state
  if (disabled) {
    containerStyles.push(styles.disabled);
  }

  return (
    <TouchableOpacity
      style={containerStyles}
      onPress={onPress}
      disabled={disabled || loading}>
      
      <View style={styles.buttonContent}>
        {loading ? (
          // If loading is true, show an ActivityIndicator
          <ActivityIndicator size="small" color="white" />
        ) : (
          // If not loading, show the button title
          <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

// Styles for the CustomButton
const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  disabled: {
    backgroundColor: '#cccccc',
  },
});

export default CustomTextButton