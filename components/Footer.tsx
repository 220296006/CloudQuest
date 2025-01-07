import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2023 Cloud Game Academy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  footerText: {
    color: 'white',
    fontSize: 12,
  },
});

export default Footer;