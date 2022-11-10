import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from "react-native";

/*
TODO: Swipe horizontally to view more images
*/

export default function Details({route}) {
  const {name, price, description, image, contact} = route.params;

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.details}>
            <Text style={styles.name}>{name}</Text>
            <Image source={image} style={styles.image}></Image>
            <Text style={styles.price}>${price}</Text>
          </View>
          <Text style={styles.descriptionTitle}>Desciption</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.contactTitle}>Seller Contact</Text>
          <Text style={styles.contact}>{contact}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#121212',
    flex: 1,
  },

  scrollView: {
    padding: '2%',
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

  descriptionTitle: {
    color: 'white',
    fontSize: '25%',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  description: {
    color: 'white',
    textAlign: 'justify',
    fontSize: '20%',
    marginBottom: '5%'
  },

  contactTitle: {
    fontSize: '25%',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  contact: {
    color: 'white',
    textAlign: 'justify',
    fontSize: '20%',
  },
})