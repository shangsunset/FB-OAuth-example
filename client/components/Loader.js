import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native'; 

const styles = StyleSheet.create(require('../styles.js'));

export default class Loader extends Component {

  render() {
    return (
      <View style={styles.loader}>
        <Text>Loading...</Text>
      </View>
    );
  }
}
