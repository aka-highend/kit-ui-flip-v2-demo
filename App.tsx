import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {
  DefaultCheckbox,
  RadioButton,
  DashedLine,
  Line,
  FieldDropdown,
  CardKYC,
} from './src/components';

import Color from './src/themes/colors';
import Icons from './src/themes/icons';

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
      <DashedLine
        dashLength={5}
        dashThickness={1}
        dashColor={Color.lightGrey}
        style={styles.dash}
      />
      <View style={styles.container}>
        <Text style={styles.textTitle}>Radio Button</Text>
        <RadioButton data={dataActive} disabled={false} />
        <RadioButton data={dataDisabled} disabled={true} />
      </View>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Dividers</Text>
        <DashedLine
          dashLength={5}
          dashThickness={1}
          dashColor={Color.lightGrey}
          style={styles.dash}
        />
        <Line borderColor={Color.customBlack30Percent} style={styles.line} />
      </View>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Dropdown</Text>
        <View style={styles.dropdownContainer}>
          <FieldDropdown
            placeholder="contoh dropdown"
            sourceIcon={Icons.envelope}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <FieldDropdown placeholder="contoh dropdown 2" />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Card KYC</Text>
        <CardKYC
          isPoint={51}
          isFailedOrRejectedKYC={false}
          isPendingKYC={false}
          isIdentityNumberFilled={false}
          isNewlyCreatedAccount={true}
        />
        <CardKYC
          isPoint={50}
          isFailedOrRejectedKYC={true}
          isPendingKYC={true}
          isIdentityNumberFilled={false}
          isNewlyCreatedAccount={false}
        />
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
  dash: {
    marginHorizontal: 15,
  },
  line: {
    marginHorizontal: 15,
  },
  dropdownContainer: {
    marginTop: 15,
  },
});
