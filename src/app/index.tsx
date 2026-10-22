import {
  Alert,
  Image, Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
export default function Index() {
  const showMessage = () => {
    Alert.alert('Повідомлення', 'Профіль відкрито');
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/avatar.png')}
        style={styles.avatar}
      />
      <Text style={styles.title}>Мій профіль
        студента</Text>
      <Text style={styles.name}>Кіт
        Чорний</Text>
      <Text style={styles.subtitle}>
        Спеціальність: Робототехніка
      </Text>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Група: АР
          </Text>
        <Text style={styles.infoText}>Курс: 4</Text>
        <Text style={styles.infoText}>Місто:
          Полтава</Text>
      </View>
      <Pressable style={styles.button}
        onPress={showMessage}>
        <Text style={styles.buttonText}>Відкрити
          профіль</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#F3F4F6',
    alignItems: 'center', justifyContent: 'center',
    padding: 24,
  },
  avatar: {
    width: 130, height: 130, borderRadius: 65,
    marginBottom: 20,
  },
  title: {
    fontSize: 24, fontWeight: '700', color: '#111827',
    marginBottom: 12, textAlign: 'center',
  },
  name: {
    fontSize: 20, fontWeight: '600', color: '#2563EB',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16, color: '#4B5563',
    textAlign: 'center', marginBottom: 20,
  },
  infoBox: {
    width: '100%', maxWidth: 320, backgroundColor:
      '#FFFFFF',
    padding: 16, borderRadius: 12, marginBottom: 20,
  },
  infoText: {
    fontSize: 16, color: '#374151', marginBottom: 6,
  },
  button: {
    backgroundColor: '#2563EB', paddingVertical: 12,
    paddingHorizontal: 24, borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF', fontSize: 16, fontWeight: '600',
  },
});