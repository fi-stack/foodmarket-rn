import React from 'react';
import {ScrollView, StyleSheet, Text, useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#f2f2f2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8d92a3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={4}
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={4}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={4}
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={4}
        image={FoodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </ScrollView>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={4}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={4}
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={4}
        image={FoodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={4}
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </ScrollView>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={4}
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={4}
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={4}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        type="product"
        name="Sop Bumil"
        price="380.000"
        rating={4}
        image={FoodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </ScrollView>
  );
};

const renderScene = SceneMap({
  first: NewTaste,
  second: Popular,
  third: Recommended,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'New Taste'},
    {key: 'second', title: 'Popular'},
    {key: 'third', title: 'Recommended'},
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
