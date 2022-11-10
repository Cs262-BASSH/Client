import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from "react-native";

/*
TODO: Swipe horizontally to view more images
*/

export default function Details({route}) {

  const {name, price, description, image} = route.params;
  //contentContainerStyle
  return (

    <SafeAreaView style={styles.scrollView}>
    <ScrollView>
    <View style={styles.details}>
      <Text style={styles.name}>{name}</Text>
      <View>
      <Image source={image} style={styles.image}></Image>
      </View>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.contact}>Seller Contact: </Text>

      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      <Text style={styles.contact}>end</Text>

    </View>
    </ScrollView>
    </SafeAreaView>



      // <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      //   <View style={styles.details}>
      //     <Text style={styles.name}>{name}</Text>
      //     <Image source={image} style={styles.image}></Image>
      //     <Text style={styles.price}>${price}</Text>
      //     <Text style={styles.description}>{description}</Text>
      //     <Text style={styles.contact}>Seller Contact: </Text>
      //     <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      //     <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      //     <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      //     <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      //     <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      //     <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      //     <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      //     <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      //     <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      //     <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      //     <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      //     <Text style={styles.contact}>Email: bee6@calvin.edu</Text>
      //   </View>
      // </ScrollView>
  )
}

const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: '#121212',
  },

  contentContainer: {

  },

  details: {
    alignItems: 'center',

  },

  image: {
    width: 200,
    height: 200,
    borderWidth: '1%',
    borderColor: 'grey',
    borderRadius: '5%',
    marginBottom: '2%'
  },

  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '40%',
  },

  price: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '50%',
  },

  description: {
    color: 'white',
    textAlign: 'center',
    fontSize: '20%'
  },

  contact: {
    color: 'white',
  },
})