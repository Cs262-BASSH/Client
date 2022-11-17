import Sell from '../components/Sell';
import { StyleSheet, FlatList, SafeAreaView, View, ScrollView, ActivityIndicator} from 'react-native';
import React, { useState , useEffect } from 'react';
import { useSelector } from 'react-redux';

const Homepage = (props) => {
  const homepage = useSelector((state) => state.homepage);


  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getItems = async () => {
     try {
      const response = await fetch("https://quiet-oasis-96937.herokuapp.com/useritem");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getItems();
  }, []);



  return (
    <SafeAreaView style={styles.container}>
{isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
           
            renderItem={({ item }) => (
              <Sell id={item.id} name={item.name} price={item.price} description={item.description} image={item.image} category={item.categorynum}></Sell>
            )}
            />
            )}
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