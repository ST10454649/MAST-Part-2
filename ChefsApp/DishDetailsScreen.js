import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DishDetailsScreen = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Spaghetti</Text>
      <Text>Chef: Chef John</Text>
      <View style={styles.buttons}>
        <Button title="Like" onPress={() => {}} />
        <Button title="Comment" onPress={() => {}} />
      </View>
      <Text style={styles.description}>This is a delicious spaghetti dish...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { width: '100%', height: 200 },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  buttons: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 },
  description: { fontSize: 16 },
});

export default DishDetailsScreen;
