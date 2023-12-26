import { FlatList, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Icon } from "react-native-elements";

const data = [
  {
    id: "123",
    icon: "home",
    location: "home",
    screen: "Street, city",
  },

  {
    id: "123",
    icon: "briefcase",
    location: "work",
    screen: "Street, city",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({item: {location, destination, icon}}) =>
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text>{location}</Text>
            <Text>{destination}</Text>
          </View>
        </TouchableOpacity>
      }
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
