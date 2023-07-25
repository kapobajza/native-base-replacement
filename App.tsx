import { Button, SafeAreaView, Text, View } from '~/components';
import { ThemeProvider } from '~/theme/ThemeProvider';

const Home = () => {
  return (
    <SafeAreaView flex={1} margin="4" mt="10">
      <Button
        title="Hello! I am a Button component!"
        onPress={() => {
          console.log('You pressed me!');
        }}
        marginBottom="4"
      />
      <View
        height={250}
        backgroundColor="blueGrey.700"
        borderRadius="lg"
        p="3"
        justifyContent="center"
        alignItems="center">
        <Text variant="h4" textAlign="center">
          Hello! I am a Text component!
        </Text>
      </View>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;
