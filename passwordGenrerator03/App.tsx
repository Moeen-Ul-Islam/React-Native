import React from 'react';
import {
  Text,
  View,
} from 'react-native';

// used for validation of numbers, strings, etc
import * as Yup from 'yup'

// yup schema for validdating the passwords for our app 
const passwordSchema = Yup.object().shape(
  {
    passwordLength: Yup.number()
    .min(6, 'should be atleast 6 chars long')
    .max(12, 'should be max 12 chars long')
    .required("Length is required")
  }
)

function App(){
  return (
    <View>
      <Text>password generator</Text>
    </View>
  )
};

export default App;
