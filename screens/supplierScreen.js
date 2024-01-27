import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
//axios ta hata aldım

const SupplierScreen = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/suppliers")
      .then(response => setSuppliers(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <FlatList
      data={suppliers}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.companyName}</Text>
          <Text style={{ color: item.address.country === 'London' ? 'red' : 'yellow' }}>
            {item.address.country}
          </Text>
        </View>
      )}
    />
  );
};

export default SupplierScreen;
