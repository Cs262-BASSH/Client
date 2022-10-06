import React from 'react';
import { Text, View, TouchableOpacity,StyleSheet ,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Example() {
  return (
    <View style={{ flex: 1, margintop: 50, marginLeft: 10 }}>
        <ScrollView> 
        <View style={styles.container}>

        
         <TouchableOpacity style={styles.buttonView}>
            <View style={styles.boxContainer}>
                <Icon name="floor-lamp" size={50} color="#000" />

                <View style = {styles.textContainer}>
                    <Text style={styles.itemName}>name of product</Text>
                    <Text>the detail description of product</Text>
                </View>
                <View style = {styles.starcontainer}>
                    <Icon name="star" size={30} color="#000" />
                </View>
            </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.buttonView}>
            <View style={styles.boxContainer}>
                <Icon name="floor-lamp" size={50} color="#000" />

                <View style = {styles.textContainer}>
                    <Text style={styles.itemName}>name of product</Text>
                    <Text>the detail description of product</Text>
                </View>
                <View style = {styles.starcontainer}>
                    <Icon name="star-outline" size={30} color="#000" />
                </View>
            </View>
         </TouchableOpacity>


         <TouchableOpacity style={styles.buttonView}>
            <View style={styles.boxContainer}>
                <Icon name="floor-lamp" size={50} color="#000" />

                <View style = {styles.textContainer}>
                    <Text style={styles.itemName}>name of product</Text>
                    <Text>the detail description of product</Text>
                </View>
                <View style = {styles.starcontainer}>
                    <Icon name="star-outline" size={30} color="#000" />
                </View>
            </View>
         </TouchableOpacity>


         <TouchableOpacity style={styles.buttonView}>
            <View style={styles.boxContainer}>
                <Icon name="floor-lamp" size={50} color="#000" />

                <View style = {styles.textContainer}>
                    <Text style={styles.itemName}>name of product</Text>
                    <Text>the detail description of product</Text>
                </View>
                <View style = {styles.starcontainer}>
                    <Icon name="star-outline" size={30} color="#000" />
                </View>
            </View>
         </TouchableOpacity>


         <TouchableOpacity style={styles.buttonView}>
            <View style={styles.boxContainer}>
                <Icon name="floor-lamp" size={50} color="#000" />

                <View style = {styles.textContainer}>
                    <Text style={styles.itemName}>name of product</Text>
                    <Text>the detail description of product</Text>
                </View>
                <View style = {styles.starcontainer}>
                    <Icon name="star-outline" size={30} color="#000" />
                </View>
            </View>
         </TouchableOpacity>


         <TouchableOpacity style={styles.buttonView}>
            <View style={styles.boxContainer}>
                <Icon name="floor-lamp" size={50} color="#000" />

                <View style = {styles.textContainer}>
                    <Text style={styles.itemName}>name of product</Text>
                    <Text>the detail description of product</Text>
                </View>
                <View style = {styles.starcontainer}>
                    <Icon name="star-outline" size={30} color="#000" />
                </View>
            </View>
         </TouchableOpacity>

         <TouchableOpacity style={styles.buttonView}>
            <View style={styles.boxContainer}>
                <Icon name="floor-lamp" size={50} color="#000" />

                <View style = {styles.textContainer}>
                    <Text style={styles.itemName}>name of product</Text>
                    <Text>the detail description of product</Text>
                </View>
                <View style = {styles.starcontainer}>
                    <Icon name="star-outline" size={30} color="#000" />
                </View>
            </View>
         </TouchableOpacity>


         <TouchableOpacity style={styles.buttonView}>
            <View style={styles.boxContainer}>
                <Icon name="floor-lamp" size={50} color="#000" />

                <View style = {styles.textContainer}>
                    <Text style={styles.itemName}>name of product</Text>
                    <Text>the detail description of product</Text>
                </View>
                <View style = {styles.starcontainer}>
                    <Icon name="star-outline" size={30} color="#000" />
                </View>
            </View>
         </TouchableOpacity>


         <TouchableOpacity style={styles.buttonView}>
            <View style={styles.boxContainer}>
                <Icon name="floor-lamp" size={50} color="#000" />

                <View style = {styles.textContainer}>
                    <Text style={styles.itemName}>name of product</Text>
                    <Text>the detail description of product</Text>
                </View>
                <View style = {styles.starcontainer}>
                    <Icon name="star-outline" size={30} color="#000" />
                </View>
            </View>
         </TouchableOpacity>



         </View>
         </ScrollView>
    </View>
    
  )

}


const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },


    buttonView:{
        marginTop: 20,
        width: '90%',
        justifyContent: 'flex-start'
    },

    boxContainer: {
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent: 'flex-start',
        borderWidth: 3,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius:20,
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    itemName: {
        fontWeight: 'bold'
    },
    starcontainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})