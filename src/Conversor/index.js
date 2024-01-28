import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';

import api from '../services/api';

class Conversor extends Component {
  constructor(props) {
    super(props);
    this.state = {
        moedaA: props.moedaA,
        moedaB: props.moedaB,
        moedaB_valor: 0,
        valorConvertido: 0
    };

    this.converter = this.converter.bind(this);
  }
  
  //latest?apikey=fca_live_VsaWqpRNmoHeo4wjbGLLyNG3xhg3yxTT7HLfX88b&currencies=BRL&base_currency=USD
  async converter() {
    let de = this.state.moedaA;
    let para = this.state.moedaB;
    
    const response = await api.get(`latest?apikey=fca_live_VsaWqpRNmoHeo4wjbGLLyNG3xhg3yxTT7HLfX88b&currencies=${para}&base_currency=${de}`)
    let cotacao = response.data.data.BRL;
    
    let resultado = cotacao * this.state.moedaB_valor;
    this.setState({
        valorConvertido: resultado.toFixed(2)
    });
    Keyboard.dismiss();
  }

  render() {
    const {moedaA, moedaB} = this.props;
    
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}> {moedaA} para {moedaB} </Text>

        <TextInput 
            placeholder='Valor a ser convertido'
            style={styles.areaInput}
            onChangeText={(moedaB_valor) => this.setState({ moedaB_valor: parseFloat(moedaB_valor) })}
            keyboardType='numeric'
        />

        <TouchableOpacity style={styles.btnArea} onPress={this.converter}>
            <Text style={styles.btnTexto}>Converter</Text>
        </TouchableOpacity>

        <Text style={styles.valorConvertido}>
            { (this.state.valorConvertido === 0) ? '' : this.state.valorConvertido }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    areaInput: {
        width: 280,
        height: 45,
        backgroundColor: '#ccc',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 20,
        color: '#000',
        borderRadius: 5,
    },
    btnArea: {
        width: 150,
        height: 45,
        backgroundColor: '#ff0000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    btnTexto: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
    },
    valorConvertido: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15,
    }
});

export default Conversor;
