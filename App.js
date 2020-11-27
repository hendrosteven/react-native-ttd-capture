import React from 'react';
import { Text, View } from 'react-native';
import SignaturePad from 'react-native-signature-pad';

const App = () => {

  signaturePadError = (error) => {
    console.error(error);
  };

  signaturePadChange = ({ base64DataUrl }) => {
    console.log("Got new signature: " + base64DataUrl);
  };
  
  return (
    <View style={{ flex: 1 }}>
      <SignaturePad onError={this.signaturePadError}
        onChange={this.signaturePadChange}
        style={{ flex: 1, backgroundColor: 'white' }} />
    </View>
  );
}

export default App;
