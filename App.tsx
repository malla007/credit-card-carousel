import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import 'react-native-gesture-handler'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


function App(): JSX.Element {

  var array = new Array(
    {type:'Debit', isVisa:true, number:'4556 - 5642 - 0695 - 5168', bg:"#000000"},
    {type:'Credit', isVisa:false, number:'4802 - 2215 - 1183 - 4289', bg:"#A44058"},
    {type:'Debit', isVisa:false, number:'5242 - 4343 - 8348 - 4878', bg:"#17A2A2"}
  )

  return(
    <SafeAreaView style = {styles.safeArea}>
      <Carousel
        loop 
        width={width}
        height={height*0.5}
        data = {array}
        scrollAnimationDuration={1000}
        renderItem={({index})=>(
          <View style = {styles.carouselContent}>
            <View style = {[styles.creditCard, {backgroundColor:array[index].bg}]}>
                <View style = {styles.creditAndVisaView}>
                  <Text style = {styles.creditText}>{array[index].type}</Text>
                  <Image source={array[index].isVisa == true?require('./resources/images/visa.png'):require('./resources/images/master.png')}/>
                </View>
                <View style = {styles.cardDetailsView}>
                  <Text style = {styles.cardDetailsText}>Just Malla</Text>
                  <Text style = {styles.cardDetailsText}>{array[index].number}</Text>
                </View>
              </View>
          </View>
              
          )}
        />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex:1,
    backgroundColor:"#FFFFFF",
    justifyContent:'center',
    alignItems:'center',
  },
  creditCard: {
    width:'90%',
    height:height*0.25,
    borderRadius:20,
    padding:30,
    justifyContent:'space-between',
    alignSelf:'center'
  },
  creditAndVisaView: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  creditText: {
    color:'#FFFFFF',
    fontSize:16,
    letterSpacing:2,
    fontFamily:'Ubuntu-Regular',
    includeFontPadding:false
  },
  cardDetailsView: {
    flexDirection:'column'
  },
  cardDetailsText: {
    color:"#FFFFFF",
    fontFamily:"IBMPlexMono-Regular",
    fontSize:16,
    letterSpacing:2,
    paddingTop:'2.5%',
    includeFontPadding:false
  },
  carouselContent: {
    width:'100%',
    justifyContent:'center',
    height:'100%'
  }

});

export default App;
