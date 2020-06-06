import * as React from 'react';
import { useTheme } from 'react-native-paper';
import { View, StatusBar, Platform, SafeAreaView } from 'react-native';

const AppStatusBar: React.FC<any> = (props) => {
  const { colors } = useTheme();

  if (Platform.OS === 'ios') {
    return (
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.primary }}>
        <StatusBar
          {...props}
          barStyle="light-content"
          backgroundColor={colors.primary}
        />
      </SafeAreaView>
    );
  }

  return (
    <View
      style={{
        height: StatusBar.currentHeight,
        backgroundColor: colors.primary,
      }}
    >
      <StatusBar {...props} translucent backgroundColor={colors.primary} />
    </View>
  );
};

export default AppStatusBar;
