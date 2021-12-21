import React from 'react';
import type {Node} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Card,
} from 'react-native-elements';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const UserCard = ({user}): Node => {
  return (
    <Card>
      <Card.Title>
        {user}
      </Card.Title>
    </Card>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const people = ['Pat', 'Scott', 'Roy', 'Kyam', 'Geoff', 'Dave', 'Nelly', 'Jake'];

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
          {people.map((u, i) => {
            return (
              <UserCard key={i} user={u} />
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default App;
