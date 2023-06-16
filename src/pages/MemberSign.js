import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Input from '../components/input/Input';
import Button from '../components/Button/Button';

function MemberSign({navigation}) {

    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userCity, setUserCity] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userPhone, setUserPhone] = useState(null);


    function handleSubmit() {

        if(!userName || !userSurname || !userAge || !userCity || !userEmail || !userPhone){
             Alert.alert("sayın üye adayı","Lütfen tüm alanları doldurunuz.");
        }
        
        const user = {
            userName,
            userSurname,
            userAge,
            userCity,
            userEmail,
            userPhone,
        };
        navigation.navigate('MemberDetailScreen', {user}); 
        
         
    }

  return (
    <View>
      <Input label={'Üye Adı'} placeholder={'Üye Adı Giriniz..'} onChangeText={setUserName} />

      <Input label={'Üye Soyadı'} placeholder={'Üye Soyadı Giriniz..'} onChangeText={setUserSurname} />

      <Input label={'Üye Yaşı'} placeholder={'Üye Yaşı Giriniz..'} onChangeText={setUserAge} />

      <Input label={'Üye Şehir'} placeholder={'Üye Şehir Giriniz..'} onChangeText={setUserCity}/>

      <Input label={'Üye E-Posta'} placeholder={'Üye E-Posta Giriniz..'} onChangeText={setUserEmail}/>

      <Input label={'Üye Telefon'} placeholder={'Üye Telefon Giriniz..'} onChangeText={setUserPhone}/>

      <Button text="Üye Kaydı Oluştur" onPress={handleSubmit} />
    </View>
  );
}

export default MemberSign;
