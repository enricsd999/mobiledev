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
        <View style={styles.column}>
          <View style={styles.row}>
            <Text style={styles.profileLabel}>Nama</Text>
            <Text style={styles.profileColon}>:</Text>
            <Text style={styles.profileText}>Enrico</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.profileLabel}>Fakultas</Text>
            <Text style={styles.profileColon}>:</Text>
            <Text style={styles.profileText}>Ilmu Komputer</Text>
          </View>
        </View>
        {/* <Text style={styles.profileText}>Nama: Enrico</Text>
        <Text style={styles.profileText}>Fakultas: Ilmu Komputer</Text>
        <Text style={styles.profileText}>Program Studi: Informatika</Text> */}
      </View>
      <View style={styles.footer}>
        {/* <View style={styles.footerSub}> */}
        <View style={styles.footerItems}>
          <Text>@Copyright</Text>
        </View>
        {/* </View> */}
        {/* <Text>Ini Footer saya</Text> */}
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
  profileLabel: {
    marginTop: 15,
    fontSize: 24,
    // flex: 1,
    width: 120,
    // textAlign: 'center',
  },
  profileText: {
    marginTop: 15,
    fontSize: 24,
    flex: 1,
    // textAlign: 'center',
  },
  profileColon: {
    marginTop: 15,
    fontSize: 24,
    width: 30,
    textAlign: 'center',
  },
  column: {
    flex: 0.5,
    flexDirection: 'column',
  },
  row: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

// export default App;
