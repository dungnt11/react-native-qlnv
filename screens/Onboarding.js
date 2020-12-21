import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('screen');

const Onboarding = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.logo}>Beau.vn</Text>
        <Button
          color="blue"
          onPress={() => navigation.navigate('Auth')}
          title="Started"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 25,
    width,
    height,
    justifyContent: 'center'
  },
  logo: {
    fontSize: 25,
    color: 'red'
  }
});

export { Onboarding };
