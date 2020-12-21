import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faListAlt, faComment, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../src/components/Todo';

const Dashboard = () => {
  const [tabActive, setTabActive] = React.useState(0);
  const tabs = [faListAlt, faComment, faUserFriends];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.user}>
          <View style={styles.wrapperAvatar}>
            <Image
              source={{
                uri: 'https://1.bp.blogspot.com/-LTxOzcTIc6I/XY2KNQVqbVI/AAAAAAACM9A/8NhxkRXqyPkhYbo1ftFL0wYJzgLv4-hKwCLcBGAsYHQ/s1600/67927827_2364524443625491_5131831447308468224_o.jpg'
              }}
              style = {styles.avatar}
            />
            <View style={styles.checked}>
              <FontAwesomeIcon icon={faCheck} color="#0064FE" />
            </View>
          </View>
        </View>
        
        <View style={styles.content}>
          <Text style={{ marginLeft: 20, fontSize: 15 }}>Hi John !</Text>
          <Text style={{ marginLeft: 20, color: '#847B7B', marginTop: 10 }}>Mon, November 18, 2020</Text>
        </View>

        <View style={styles.operator}>
          { tabs.map((tab, ind) => (
            <TouchableOpacity
              key={ind}
              onPress={() => setTabActive(ind)}
              activeOpacity={1}
            >
              <View style={[styles.operatorItem, tabActive === ind ? styles.active : undefined]}>
                <FontAwesomeIcon icon={tab} color={tabActive === ind ? 'white' : '#0064FE'} />
              </View>
          </TouchableOpacity>
          )) }
        </View>
      </View>

      <Todo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 20,
  },
  wrapperAvatar: {
    position: 'relative',
    alignSelf: 'center',
    top: 0,
  },
  avatar: {
    width: 89,
    height: 89,
    borderRadius: 50,
    alignSelf: "center",
  },
  checked: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    right: 0,
    backgroundColor: '#E7F0FF',
    borderRadius: 50,
    width: 23,
    height: 23,
  },
  card: {
    width: 333,
    height: 200,
    backgroundColor: 'rgba(231, 240, 255, 0.23)',
    opacity: 23,
    alignSelf: 'center',
    position: 'relative',
    marginTop: 50,
  },
  user: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginTop: 50,
  },
  operator: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30
  },
  operatorItem: {
    width: 50,
    height: 50,
    backgroundColor: '#E7F0FF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#0064FE',
  }
})

export { Dashboard };
