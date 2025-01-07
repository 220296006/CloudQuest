import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface FeatureProps {
  title: string;
  description: string;
  onPress: () => void;
}

const FeatureItem: React.FC<FeatureProps> = ({ title, description, onPress }) => {
  return (
    <TouchableOpacity style={styles.featureItem} onPress={onPress}>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </TouchableOpacity>
  );
};


const FeatureSection: React.FC = () => {
  const handleFeaturePress = (featureName: string) => {
    // Add Logic for handling when a feature is pressed
    console.log(`Feature ${featureName} pressed`)
  };
    return (
    <View style={styles.featureContainer}>
        <Text style={styles.sectionTitle}>Our Features</Text>
      <FeatureItem
        title="Game Library"
        description="Explore our diverse game library for learning."
        onPress={() => handleFeaturePress('Game Library')}
      />
      <FeatureItem
        title="Interactive Courses"
        description="Engage with dynamic and interactive lessons."
         onPress={() => handleFeaturePress('Interactive Courses')}
      />
      <FeatureItem
        title="Progress Tracking"
        description="Monitor your learning progress and achievements."
         onPress={() => handleFeaturePress('Progress Tracking')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  featureContainer: {
      padding: 20,
  },
    sectionTitle: {
      fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },
  featureItem: {
    backgroundColor: '#ecf0f1',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: '#777',
  },
});

export default FeatureSection;