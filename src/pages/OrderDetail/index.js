import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Headers';
import ItemListFood from '../../components/molecules/ItemListFood';
import {FoodDummy1} from '../../assets';
import ItemValue from '../../components/molecules/ItemValue';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const OrderDetail = ({navigation}) => {
  return (
    <ScrollView>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          type="order-summary"
          name="Sop Bumil"
          price="380.000"
          image={FoodDummy1}
          items={14}
        />
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
        <ItemValue label="Driver" value="IDR 50.000" />
        <ItemValue label="Tax 10%" value="IDR 1.800.390" />
        <ItemValue
          label="Total Price"
          value="IDR 390.803.000"
          valueColor="#1abc9c"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Delivered to:</Text>
        <ItemValue label="Name" value="Rafi Nur Oktafian" />
        <ItemValue label="Phone No." value="0822 0819 9688" />
        <ItemValue label="Address" value="Setra Duta Palima" />
        <ItemValue label="House No." value="A5 Hook" />
        <ItemValue label="City" value="Bandung" />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Order Status:</Text>
        <ItemValue label="#FM209391" value="Paid" />
      </View>
      <View style={styles.button}>
        <Button
          text="Cancel My Order"
          onPress={() => navigation.replace('SuccessOrder')}
          color="#d9435e"
          textColor="white"
        />
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {paddingHorizontal: 24, marginTop: 24},
});
