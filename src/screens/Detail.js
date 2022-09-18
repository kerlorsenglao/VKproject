import { StyleSheet, Text, TextInput, TouchableOpacity, View , ToastAndroid} from 'react-native'
import React, { useEffect, useState } from 'react'

import SInfo from "react-native-sensitive-info";
import Spinner from 'react-native-loading-spinner-overlay';

export default function Detail() {

  const [key, setKey] = useState("")
  const [key_get,setKey_GET] = useState("")
  const [loading,setLoading] = useState(false)
  const [user,setUser] = useState({'username': 'Kerlor', 'password':123456})

  const saveKey = async () =>{
    const save = await SInfo.setItem("KEY",key, {
      sharedPreferencesName: 'mySharedPrefs',
      keychainService: 'myKeychain',
      touchID: true, 
      showModal: true,
      strings: {
        header: 'ເຂົ້າລະບົບດ້ວຍການສະແກນລາຍມື',
        description: 'ກະລຸນາສະແກນລາຍມື',
        hint: 'Touch',
        // success: 'Fingerprint recognized',
        // notRecognized: 'Fingerprint not recognized, try again',
        cancel: 'ຍົກເລີກ',
        cancelled: 'Authentication was cancelled', // reject error message
    },
      kSecAccessControl: 'kSecAccessControlBiometryAny' // optional - Add support for FaceID
    });
    if(save){
      ToastAndroid.show("Successfuly save key",ToastAndroid.BOTTOM, ToastAndroid.SHORT);
      setKey("")
    }else{
      ToastAndroid.show("Saving key failed!",ToastAndroid.BOTTOM, ToastAndroid.SHORT);
    }
  }
  const getKey = async () =>{
    try {
      const key_get = await SInfo.getItem("KEY",{
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain',
        touchID: true,
        showModal: true, //required (Android) - Will prompt user's fingerprint on Android
        strings: { // optional (Android) - You can personalize your prompt
          header: 'Custom Description',
          description: 'Custom Title ',
        },
        kSecUseOperationPrompt: // required (iOS) -  A fallback string for iOS
            'We need your permission to retrieve encrypted data',
      });
      console.log("key_get=>",key_get)
      if(key_get){
        setKey_GET(key_get)
      }else{
        ToastAndroid.show('Cannot get key!',ToastAndroid.BOTTOM,ToastAndroid.SHORT)
      }
    } catch (error) {
      ToastAndroid.show(error,ToastAndroid.BOTTOM,ToastAndroid.SHORT);
    }
  }
  const deleteKey = async ()=>{
    const deleted = await SInfo.deleteItem('KEY', {
      sharedPreferencesName: "mySharedPrefs",
      keychainService: "myKeychain",
    });
    if(!deleted){
      setKey("")
      setKey_GET("")
      ToastAndroid.show('Deleted key successful', ToastAndroid.BOTTOM, ToastAndroid.SHORT)
    }
  }
  const checkSensorAvialable = async () =>{
    const isSensor = await SInfo.isSensorAvailable()
    const hasEnroll =await SInfo.hasEnrolledFingerprints();
    // if(hasEnroll === true){
      console.log('has enroll=>',hasEnroll)
    // }
    console.log('is available=>',isSensor)
  }
  const authentication = async() =>{
    const result = await SInfo.setInvalidatedByBiometricEnrollment()
    console.log(result)
  }
  useEffect(()=>{
    // console.log(SInfo)
    // checkSensorAvialable()
    // authentication();
  },[])

  return (
    <View style={styles.container}>
      <Spinner visible={loading}/>
      <View style={styles.cardContainer}>
          <Text style={{color: 'white',fontWeight:'bold',marginBottom: 5}}>CREATE KEY</Text>
          <TextInput
            style={styles.InputContainer}
            value={key}
            placeholder="Input Key Here"
            textAlign='center'
            onChangeText={(text)=>{setKey(text)}}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={()=>saveKey()}
          >
            <Text style={{color: 'white'}}>Save Key</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={()=> getKey()}
          >
            <Text style={{color: 'yellow'}}>Show Key</Text>
          </TouchableOpacity>
          <View
            style={styles.showContainer}
          >
            <Text style={styles.resultText}>{key_get}</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={()=> deleteKey()}
          >
            <Text style={{color: 'red'}}>delete Key</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  cardContainer:{
    width: '80%',
    height: '80%',
    borderColor:'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems:'center'
  },
  InputContainer:{
    width: '80%',
    padding: 5,
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: 20,
    fontWeight:'bold',
    backgroundColor:'gray',
    borderRadius:10
  },
  buttonContainer:{
    padding:5,
    width: '50%',
    backgroundColor: 'green',
    borderRadius:5,
    alignItems:'center',
    margin: 10
  },
  showContainer:{
    backgroundColor:'white',
    width: '90%',
    height: 50,
    justifyContent:'center',
    alignItems:'center'
  },
  resultText:{
    color: 'gray',
    fontSize: 20,
    fontWeight:'bold'
  }
})