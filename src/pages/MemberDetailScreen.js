import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function MemberDetailScreen({route}) {
  const {user} = route.params;

  return (
    <View>
      <Text style={styles.label}>Kayıt Tamamlandı. </Text>
      <Text style={styles.label}>Üye adı: {user.userName} </Text>
      <Text style={styles.label}>Üye soyadı: {user.userSurname} </Text>
      <Text style={styles.label}>Üye yaş: {user.userAge}</Text>
      <Text style={styles.label}>Üye şehir: {user.userCity} </Text>
      <Text style={styles.label}>Üye e-posta: {user.userEmail} </Text>
      <Text style={styles.label}>Üye telefon: {user.userPhone} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 5,
    marginTop: 20,
    color: 'orange',
  },
});

export default MemberDetailScreen;
