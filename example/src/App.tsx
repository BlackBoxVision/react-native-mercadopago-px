import 'intl';
import 'intl/locale-data/jsonp/en';

import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import { FlatList, SafeAreaView } from 'react-native';

import { getProducts } from './services';

import ProductCard from './components/ProductCard';
import StatusBar from './components/StatusBar';

export default function App() {
  const products = getProducts();

  return (
    <PaperProvider>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
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
