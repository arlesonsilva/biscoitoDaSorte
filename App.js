import React, { Component } from "react";
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet 
} from "react-native";

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      textoFrase: '',
      img: require('./src/biscoito.png')
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
      'Felicidade é só questão de ser.',
      'Acredite: sempre tem algo bom guardado para você.',
      'Concentre-se no que está buscando, não no que está deixando para trás.',
      'A vida é muito curta pra não viver sorrindo por aí!',
      'Onde há vontade, há chance de dar certo!',
      'Dance no seu ritmo! 💃',
      'Só você sabe o que te deixará feliz.'
    ]
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./src/biscoitoAberto.png')
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <Image 
          source={this.state.img} 
          style={styles.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height:250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;