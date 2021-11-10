import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function AboutScreen({ navigation }: RootTabScreenProps<'About'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View>
          <View style={styles.descriptionContainer}>
            <Text
            style={styles.descriptionText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            The tools used are expo, ts standard formatting validation, webpack and babel configuration, jest test suite and build for android and ios (coudn't test it)
            </Text>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  descriptionContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  descriptionText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
});
