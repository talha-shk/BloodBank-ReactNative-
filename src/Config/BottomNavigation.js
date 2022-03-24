import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Screen/Home";
import Screen from "../Screen/Screen";
import User from "../Screen/User";
import Welcome from "../components/welcome";
import Login from "../Screen/Login";
import Register from "../Screen/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Drawer } from "react-native-paper";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function BottomNav({ navigation, route }) {
  const { uid } = route.params;
  console.log(uid);

  return (
    <Tab.Navigator>
      {/* <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        /> */}
      {/* <Tab.Screen name="Welcome" component={Welcome} /> */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Find People"
        component={User}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Me"
        options={{ headerShown: false }}
        component={() => <Screen uid={route.params.uid} />}
      />
      {/* <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Register" component={Register} /> */}
    </Tab.Navigator>
  );
}

export default function MyTabs() {
  // const [active, setActive] = React.useState("");
  return (
    <NavigationContainer>
      {/* <Drawer.Section title="Some title">
        <Drawer.Item
          label="First Item"
          active={active === "first"}
          onPress={() => setActive("first")}
        />
        <Drawer.Item
          label="Second Item"
          active={active === "second"}
          onPress={() => setActive("second")}
        />
      </Drawer.Section> */}
      {/* <Tab.Navigator> */}
      {/* <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        /> */}
      {/* <Tab.Screen name="Welcome" component={Welcome} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Find People" component={User} />
        <Tab.Screen name="Me" component={Screen} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={Welcome}
        />

        <Stack.Screen
          name="Sign_In"
          options={{ headerShown: false }}
          component={Login}
        />

        <Stack.Screen
          name="Sign_Up"
          options={{ headerShown: false }}
          component={Register}
        />

        {/* <Stack.Screen
          name="Home"
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "#F9277A",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={Home}
        /> */}

        <Stack.Screen
          name="DrawerScreen"
          options={{ headerShown: false }}
          component={BottomNav}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
