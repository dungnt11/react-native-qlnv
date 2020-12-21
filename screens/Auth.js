import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { firebase } from '../src/firebase/config';

const Auth = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        Alert.alert('Email hoặc password không được để trống !');
        return;
      }

      setLoading(true);
      const fb = await firebase.default.auth();
      await fb.signInWithEmailAndPassword(email, password);

      setLoading(false);
      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert(error.toString());
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Image
          style={styles.logo}
          source={require('../assets/icon.png')}
      />

      <TextInput
        style={styles.input}
        placeholder='E-mail'
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setEmail(text)}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        placeholder='Mật khẩu'
        onChangeText={(text) => setPassword(text)}
        value={password}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />

      <Text style={styles.forgetPass}>Quên mật khẩu ?</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
        activeOpacity={0.9}
      >
        { loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.buttonTitle}>Đăng nhập</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    height: 120,
    width: 90,
    alignSelf: "center",
    margin: 30
  },
  forgetPass: {
    textAlign: 'right',
    color: 'blue',
    marginRight: 30,
  },
  button: {
    backgroundColor: '#0064FE',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  buttonTitle: {
    color: '#fff',
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16
  }
});

export { Auth };
