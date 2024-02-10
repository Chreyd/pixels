import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import React from "react";
import { globalStyles } from "../styles/AppStyles";
import colors from "../styles/colors";

const Home = ({ navigation }) => {
  //   console.log(props);
    console.log(navigation); 



  /* 
  navigation.
  navigate : aller vers un autre stack
  push : copie su stack
  goBack: faire une retour en arrière vers le stack précédent
  replace: remplacer le stack de la pile par un autre stack
  popToTop: démonter tous les stacks e revenir au stack de départ
  pop: revenir à au stack précédent 
  */


  const DATA = [
    {
      id: "1",
      name: "Emma",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam",
      country: "Allemagne",
      totalImg: 3,
      img: "https://cdn.pixabay.com/photo/2017/12/17/08/44/girl-3023853_960_720.jpg",
    },
    {
      id: "2",
      name: "Marcel",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam",
      country: "France",
      totalImg: 5,
      img: "https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg",
    },
    {
      id: "3",
      name: "Diana",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam",
      country: "Espagne",
      totalImg: 4,
      img: "https://cdn.pixabay.com/photo/2019/08/13/05/39/girl-4402542_960_720.jpg",
    },
    {
      id: "4",
      name: "Diego",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam",
      country: "Italie",
      totalImg: 5,
      img: "https://cdn.pixabay.com/photo/2017/03/24/18/59/face-2171923_960_720.jpg",
    },
  ];

  const renderProfiles = ({ item }) => {
    return (
      <Pressable
        style={({pressed})=>[
            {
                backgroundColor: pressed? colors.clicked: colors.white
            },
            globalStyles.profilItem
        ]}
        onPress={() =>
          navigation.navigate("Portfolio", item)
        }

      >
        <Text style={globalStyles.titleText}>{item.name}</Text>
        <Image source={{ uri: item.img }} style={globalStyles.profileImg} />
        <View style={globalStyles.infoContainer}>
          <Text style={globalStyles.info}>{item.country} </Text>
          <Text style={globalStyles.info}>{item.totalImg} </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderProfiles}
      />
    </View>
  );
};

export default Home;
