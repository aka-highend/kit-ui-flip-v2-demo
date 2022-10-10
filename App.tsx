import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

import {DefaultCheckbox, RadioButton} from './src/components';

const dataActive = [
  {
    key: 'opt1',
    text: 'Option 1',
  },
  {
    key: 'opt2',
    text: 'Option 2',
  },
];

const dataDisabled = [
  {
    key: 'opt3',
    text: 'Option 3',
  },
  {
    key: 'opt4',
    text: 'Option 4',
  },
];

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [opt1, setOpt1] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Checkbox</Text>
        <DefaultCheckbox
          isActive={isActive}
          setIsActive={setIsActive}
          title="Checkbox 1"
          disabled={false}
        />
        <DefaultCheckbox
          isActive={opt1}
          setIsActive={setOpt1}
          title="Checkbox 2"
          disabled={false}
        />
        <DefaultCheckbox title="Checkbox 3" disabled={true} />
      </View>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Radio Button</Text>
        <RadioButton data={dataActive} disabled={false} />
        <RadioButton data={dataDisabled} disabled={true} />
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
    padding: 25,
    marginTop: 20,
  },
  textTitle: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: 'center',
  },
});
