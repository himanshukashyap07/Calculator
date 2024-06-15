import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  const renderButton = (value) => (
    <TouchableOpacity
      key={value}
      style={styles.button}
      onPress={() => handlePress(value)}
    >
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', 'C', '+'],
    ['='],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Text style={styles.display}>{display || 0}</Text>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map(renderButton)}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgb(199, 213, 227)',
  },
  display: {
    fontSize: 48,
    marginBottom: 15,
    borderRadius: 30,
    textAlign: 'right',
    padding: 15,
    width: "100%",
    color: "white",
    backgroundColor: 'black',
  },
  buttonsContainer: {
    flexDirection: 'column',
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 5,
    // backgroundColor: '#d3d3d3',
    backgroundColor: 'black',
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
  },
});

export default Calculator;