import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';

const App = () => {
  const [currentContent, setCurrentContent] = useState('opcion1');

  const contenido = {
    opcion1: {
      imagen: require('./assets/AmongAmarillo.png'),
      color: "#e9b711ff",
      textos: {
        español: 'Paisaje',
        inglés: 'landscape',
        francés: 'paysage'
      }
    },
    opcion2: {
      imagen: require('./assets/AmongAzul.webp'),
      color: "#22d7ddff",
      textos: {
        español: 'Océano',
        inglés: 'ocean',
        francés: 'Océan'
      }
    },
    opcion3: {
      imagen: require('./assets/AmongMorado.jpg'),
      color: "#c722ddff",
      textos: {
        español: 'Bosque',
        inglés: 'Forest',
        francés: 'Forêt'
      }
    },
    opcion4: {
      imagen: require('./assets/AmongRojo.png'),
      color: "#dd2222ff",
      textos: {
        español: 'Ciudad',
        inglés: 'City',
        francés: 'Ville'
      }
    }
  };

  // Función para cambiar el contenido
  const cambiarContenido = (opcion) => {
    setCurrentContent(opcion);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Imagen */}
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 200}}>
          <Image
            source={contenido[currentContent].imagen}
            style={styles.imagen}
            resizeMode="cover"
          />
          <View style={{width:80, height:80, backgroundColor: contenido[currentContent].color, borderRadius: 50}}></View>
        </View>

        {/* Textos en tres idiomas */}
        <View style={styles.textContainer}>
          <View style={styles.textRow}>
            <Text style={styles.languageLabel}>Español:</Text>
            <Text style={styles.text}>
              {contenido[currentContent].textos.español}
            </Text>
          </View>

          <View style={styles.textRow}>
            <Text style={styles.languageLabel}>Inglés:</Text>
            <Text style={styles.text}>
              {contenido[currentContent].textos.inglés}
            </Text>
          </View>

          <View style={styles.textRow}>
            <Text style={styles.languageLabel}>Francés:</Text>
            <Text style={styles.text}>
              {contenido[currentContent].textos.francés}
            </Text>
          </View>
        </View>

        {/* Botones */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              currentContent === 'opcion1' && styles.buttonActive
            ]}
            onPress={() => cambiarContenido('opcion1')}
          >
            <Text style={styles.buttonText}>Amarillo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              currentContent === 'opcion2' && styles.buttonActive
            ]}
            onPress={() => cambiarContenido('opcion2')}
          >
            <Text style={styles.buttonText}>Azul</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              currentContent === 'opcion3' && styles.buttonActive
            ]}
            onPress={() => cambiarContenido('opcion3')}
          >
            <Text style={styles.buttonText}>Morado</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              currentContent === 'opcion4' && styles.buttonActive
            ]}
            onPress={() => cambiarContenido('opcion4')}
          >
            <Text style={styles.buttonText}>Rojo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    padding: 50,
    alignItems: 'center'
  },
  imagen: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
    objectFit: 'cover'
  },
  textContainer: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 10,
    marginBottom: 250
  },
  textRow: {
    marginBottom: 15,
  },
  languageLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    bottom: 0,
    gap: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    marginVertical: 5
  },
  buttonActive: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
