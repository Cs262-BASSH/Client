import Sell from '../components/Sell';
import { StyleSheet, FlatList, SafeAreaView, View, ScrollView} from 'react-native';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Homepage = (props) => {
  const homepage = useSelector((state) => state.homepage);

  return (
    <ScrollView style={styles.container}>
      {
        homepage.map((item) => (
          <Sell
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
            category={item.category}
            contact={item.contact}
          />
        ))
        }
      </ScrollView>
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