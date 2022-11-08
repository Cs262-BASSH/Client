import Sell from '../components/Sell';
import Items from '../data/item';

import { StyleSheet, FlatList, SafeAreaView, } from 'react-native';
import { useState } from 'react';

const Homepage = (props) => {
  const [data, setdata] = useState(Items);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <Sell
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
            category={item.category}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default Homepage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
  },
});


{/*       <ScrollView>
          {
            Object.keys(Categories).map((item, index) => <Sell id={item.id} name={item.name} price={item.price} description={item.description} category={item.category} item={Items[index]}></Sell>)
          }
      </ScrollView> */}