import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import console = require('console');

export default class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  buttonPressed(text) {
    console.log(text);
  }

  render() {

    let rows = []
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]

    for (let i = 0; i < 4; i++) {
      let row = []

      for (let j = 0; j < 3; j++) {

        row.push(
          <TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])} key={nums[i][j]} style={styles.btn}>
            <Text style={styles.btntext}>{nums[i][j]}</Text>
          </TouchableOpacity >)
      }
      rows.push(< View key={nums[i]} style={styles.row}>{row}</View >)
    }

    let operations = ['+', '-', '*', '/']
    let ops = []

    for (let i = 0; i < 4; i++) {
      ops.push(<TouchableOpacity key={nums[i]} style={styles.btn}>
        <Text style={[styles.btntext, styles.white]}>{operations[i]}</Text>
      </TouchableOpacity>)
    }

    return (

      <View style={styles.container} >

        <View style={styles.result}>
          <Text style={styles.resultText}>121</Text>
        </View>

        <View style={styles.calculation}>
          <Text style={styles.calculationText}>21</Text>
        </View>

        <View style={styles.buttons}>

          <View style={styles.numbers}>
            {rows}
          </View>

          <View style={styles.operations}>
            {ops}
          </View>

        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90BAAD',
  },
  resultText: {
    fontSize: 30,
    color: 'white',
  },
  btntext: {
    fontSize: 30,
  },
  white: {
    color: 'white',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  calculationText: {
    fontSize: 24,
    color: 'white',
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  result: {
    flex: 2,
    backgroundColor: '#E5C3D1',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: '#717C89',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  TouchableOpacitys: {
    flex: 7,
    flexDirection: 'row',
    backgroundColor: '#D9D7DD',
  },
  numbers: {
    flex: 3,
    backgroundColor: '#1A281F',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#5F7367',
  },
});
