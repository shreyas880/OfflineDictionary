import * as React from 'react';
import {  Text,  View,  StyleSheet,  TextInput,  TouchableOpacity,} from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from './/database';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      definition:'',
      lexicalCategory:'',
      history:[],
      isHistoryButtonPressed:''
    };
  }

  getCategories(word){
    this.setState({
      definition:dictionary[word]["definition"],
      lexicalCategory:dictionary[word]["lexicalCategory"]
    })
  }

  render() {
    if(this.state.isHistoryButtonPressed === 'true'){
      return(
        <View style={styles.container} >
          <Header backgroundColor={'#9c8210'} centerComponent={{text: 'Monkey-Chunkey App',style: { color: '#fff', fontSize: 20 }}}/>
          <Text style={[styles.buttonText,{textAlign:'center'}]}>Search</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={text => {
              this.setState({ text: text });
            }}
            value={this.state.text}/>
          <TouchableOpacity
            style={styles.goButton}
            onPress={() => {
              this.getCategories(this.state.text);
              this.state.history.push(this.state.text)
            }}>
            <Text style={[styles.buttonText,{textAlign:'center'}]}>Search</Text>
          </TouchableOpacity>
          <Text style={styles.Text}>The word that you entered:{this.state.text}</Text>
          <Text style={styles.Text}>Definition:{this.state.definition}</Text>
          <Text style={styles.Text}>Lexical category:{this.state.lexicalCategory}</Text>
          <TouchableOpacity
            style={styles.goButton}
            onPress={() => {
              console.log(this.state.history);
              this.setState({
                isHistoryButtonPressed:'true'
              })}}>
            <Text style={[styles.buttonText,{textAlign:'center'}]}>History</Text>
          </TouchableOpacity>
          {this.state.history.map((word) => (
            <TouchableOpacity style={{
              marginLeft:65,
              width:150,
              height:50,
              justifyContent:'center',
              alignItems:'center',
              borderRadius:50,
              borderWidth:1,
              borderColor:'black',
              marginTop:25,
              backgroundColor:'blue'}}
              onPress={() => {
                this.setState({
                  text:word
                })
                this.getCategories(word)
              }}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:22}}>{word}</Text>
              </TouchableOpacity>
          ))}
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
          <Header backgroundColor={'#9c8210'} centerComponent={{text: 'Monkey-Chunkey App',style: { color: '#fff', fontSize: 20 }}}/>
          <Text style={[styles.buttonText,{textAlign:'center'}]}>Search</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={text => {
              this.setState({ text: text });
            }}
            value={this.state.text}/>
          <TouchableOpacity
            style={styles.goButton}
            onPress={() => {
              this.getCategories(this.state.text);
              this.state.history.push(this.state.text)
            }}>
            <Text style={[styles.buttonText,{textAlign:'center'}]}>Search</Text>
          </TouchableOpacity>
          <Text style={styles.Text}>The word that you entered:{this.state.text}</Text>
          <Text style={styles.Text}>Definition:{this.state.definition}</Text>
          <Text style={styles.Text}>Lexical category:{this.state.lexicalCategory}</Text>
          <TouchableOpacity
            style={styles.goButton}
            onPress={() => {
              console.log(this.state.history);
              this.setState({
                isHistoryButtonPressed:'true'
              })}}>
            <Text style={[styles.buttonText,{textAlign:'center'}]}>History</Text>
          </TouchableOpacity>
        </View>
      );      
    }
  

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lime',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4
  },
  goButton: {
    marginLeft:65,
    width:200,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    borderWidth:1,
    borderColor:'black',
    marginTop:50,
    backgroundColor:'red',
    justifyContent:'center'
  },
  buttonText: {
    fontSize:32,
    fontWeight:'bold',
    color:'black'
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
  Text: {
    fontSize:22,
    fontWeight:'bold',
    color:'black',
    textAlign: 'center',
  }
});
