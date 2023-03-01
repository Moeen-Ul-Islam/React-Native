import React, {useState} from 'react';
import {Text, View} from 'react-native';

// used for validation of numbers, strings, etc
import * as Yup from 'yup';

// yup schema for validating the passwords
const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(6, 'should be atleast 6 chars long')
    .max(12, 'should be max 12 chars long')
    .required('Length is required'),
});

function App() {
  // password: the variable that stores the actual value
  // setPassword: function that updates the value of the 'passWord'
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperrCase, setupperrCase] = useState(false);
  const [numbers, useNumbers] = useState(false);
  const [symbols, useSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    // magic will happend here
  };

  const createPasword = (characters: string, passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);      
    }
    return result;
  };

  const resetPasswordState = () => {
    //
  };

  return (
    <View>
      <Text>password generator</Text>
    </View>
  );
}

export default App;
