import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import { FlatList, SafeAreaView, StatusBar } from 'react-native';

import { getProducts } from './services';
import ProductCard from './components/ProductCard';

export default function App() {
  const products = getProducts();

  return (
    <PaperProvider>
      <SafeAreaView>
        <StatusBar backgroundColor="blue" barStyle="dark-content" />
        <Appbar>
          <Appbar.Content title="Products" />
        </Appbar>
        <FlatList
          data={products}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <ProductCard {...item} />}
        />
      </SafeAreaView>
    </PaperProvider>
  );
}
