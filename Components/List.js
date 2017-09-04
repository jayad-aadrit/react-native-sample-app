import React from 'react';
import { StyleSheet, FlatList, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class List extends React.Component {
    constructor(props){
     super(props);
     this.state = {
         isLoading: true,
         data: "",
         searchText: "",
         initialData: ""
     };
    }
    componentWillMount(){
        fetch("https://facebook.github.io/react-native/movies.json")
        .then((response) => response.json())
        .then((responseJson)=> {
            this.setState({
                isLoading: false,
                data: responseJson.movies,
                initialData: responseJson.movies
            });
        })
        .catch((error) => {
        console.error(error);
      });
    }
    _renderItem = ({item}) => {
        return (
    <View>
         <Text>{item.title}</Text>
        <Text>{item.releaseYear}</Text>
    </View>
  );
}
_onPress(){
    var that= this;
    if(that.state.searchText.length>1){
            for(i=0;i<that.state.data.length;i++){
         Object.values(this.state.data[i]).map((obj,index)=>{
            if(obj.includes(that.state.searchText)){
                this.setState({
                    data: [that.state.data[i]]
                })
            }
         })
    }


    }
else{
    this.setState({
                    data: that.state.initialData
                })
}
}
 
    render() {
        if (this.state.isLoading){
            return(
                <View style={styles.container}><Text>Loading...</Text></View>
            );
        }
        else{
            return (
                <View style={styles.container}>
                    <View style= {styles.listContainer}>
                        <TextInput 
                        onChangeText={(searchText) => this.setState({searchText})}
                        placeholder="Search"
                        value  = {this.state.searchText}
                        />
                        <View>
                            <TouchableOpacity onPress={this._onPress.bind(this)}><Text>Search</Text></TouchableOpacity>
                        </View>
                        <FlatList
                        data= {this.state.data}
                        renderItem={this._renderItem}
                    />
                    </View>
                </View>
            );
        }
  }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6495ED',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    listContainer: {
        flex: 0.5,
        flexDirection: 'column',
        paddingTop: 30
    }
})