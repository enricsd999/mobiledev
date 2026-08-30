/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { StyleSheet, View, Text, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Profile</Text>
      </View>
      <View style={styles.body}>
        <Image
          source={require('./assets/Enrico.jpg')}
          style={{
            width: 200,
            height: 200,
          }}
        />
        <Text style={styles.profileText}>Nama: Enrico</Text>
        <Text style={styles.profileText}>Fakultas: Ilmu Komputer</Text>
        <Text style={styles.profileText}>Program Studi: Informatika</Text>
      </View>
      <View style={styles.footer}>
          <Text>@Copyright</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    // justifyContent: 'center',
    backgroundColor: '#fffb00',
  },
  header: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: '#008cff',
  },
  body: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0e0e0',
  },
  footer: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0077ff',
  },
  footerSub: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerItems: {
    margin: 30,
  },
  title: {
    fontSize: 32,
  },
  profileText: {
    marginTop: 15,
    fontSize: 24,
    textAlign: 'center',
  },
});

// export default App;
