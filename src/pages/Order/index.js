import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Gap from '../../components/atoms/Gap';
import EmptyOrder from '../../components/molecules/EmptyOrder';
import Header from '../../components/molecules/Headers';
import OrderTabSection from '../../components/molecules/OrderTabSection';

const Order = () => {
  const [isEmpty] = useState(false);
  return (
    <View style={styles.page}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title="Your Orders" subTitle="Wait for the best meal" />
          <Gap height={24} />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1},
  tabContainer: {flex: 1},
});
