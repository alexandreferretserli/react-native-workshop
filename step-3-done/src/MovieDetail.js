import React, { Component } from 'react';
import { Text, View, Image, ScrollView, FlatList } from 'react-native';
import Person from './Person';
import { getCredits } from './services/movie';
import * as styles from "./styles";

export default class movie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      actors: []
    }
  }

  componentDidMount() {
    this.updateActors();
  }
  
  updateActors = async () => {
    const { item } = this.props.navigation.state.params;
    const response = await getCredits(item.id);
    const actors = response.cast;
    this.setState({ actors });
  }

  render() {
    const {item} = this.props.navigation.state.params;
    let release_date = item.release_date.split('-');
    const year = release_date[0];
    const month = release_date[1];
    const day = release_date[2];
    release_date = `${day}/${month}/${year}`;
    return (
      <ScrollView style={styles.movie.container}>
        <Image style={styles.movie.backdrop} resizeMode={'cover'} source={{ uri: item.backdrop }} />
        <View style={{ marginTop: 10, marginHorizontal: 10 }}>
          <View style={styles.movie.rowContainer}>
            <Text style={styles.movie.libelle}>{`Titre : `}</Text>
            <Text style={styles.movie.text}>{`${item.title}`}</Text>
          </View>
          <Text style={[styles.movie.libelle, { marginBottom: 3 }]}>{`Synopsis :`}</Text>
          <Text style={[styles.movie.text, { marginBottom: 10 }]}>{`${item.overview}`}</Text>
          <View style={styles.movie.rowContainer}>
            <Text style={styles.movie.libelle}>{`Note des utilisateurs : `}</Text>
            <Text style={styles.movie.text}>{`${item.vote_average} `}</Text>
          </View>
          <View style={styles.movie.rowContainer}>
            <Text style={styles.movie.libelle}>{`Date de sortie : `}</Text>
            <Text style={styles.movie.text}>{`${release_date}`}</Text>
          </View>
          {this.state.actors.length > 0 &&
            <View>
              <Text style={[styles.movie.libelle, { marginBottom: 3 }]}>{`Casting :`}</Text>
              <FlatList
                data={this.state.actors}
                horizontal={true}
                renderItem={({ item }) => (
                  <Person person={item} />
                )}
                keyExtractor={(actor, index) => String(actor.id) + index}
              />
            </View>
          }
        </View>
      </ScrollView>
    );
  }
}