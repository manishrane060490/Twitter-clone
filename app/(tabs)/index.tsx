import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet,Text, View} from 'react-native';

import tweets from '../../assets/data/tweets';
import Tweet from '../../components/Tweet';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList data={tweets} renderItem={({item}) => <Tweet key={item.id} tweet={item}/>} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  }
});
