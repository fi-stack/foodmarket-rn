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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        rating={4}
        image={FoodDummy1}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sop bumil"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sop bumil"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sop bumil"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy4}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Sop bumil"
      />
    </ScrollView>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        rating={4}
        image={FoodDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={3}
        price="2.000.000"
        name="Sop bumil"
        date="Jun 12, 14:00"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy1}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={3}
        price="2.000.000"
        name="Sop bumil"
        date="Jun 12, 14:00"
        status="Cancel"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy4}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={3}
        price="2.000.000"
        name="Sop bumil"
        date="Jun 12, 14:00"
        status="Cancel"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={3}
        price="2.000.000"
        name="Sop bumil"
        date="Jun 12, 14:00"
        status="Cancel"
      />
    </ScrollView>
  );
};

const renderScene = SceneMap({
  first: InProgress,
  second: PastOrders,
});

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'In Progress'},
    {key: 'second', title: 'Past Orders'},
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

export default OrderTabSection;

const styles = StyleSheet.create({});
