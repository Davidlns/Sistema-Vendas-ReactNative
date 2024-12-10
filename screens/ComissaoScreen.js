import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AppContext } from '../context/AppContext'; 

const ComissaoScreen = () => {
  const { formEntries } = useContext(AppContext);
  let total = 0;

  return (
    <View style={styles.container}>
      <View style={styles.textview}>
        <Text style={styles.text}>Comissão</Text>
      </View>

      <ScrollView style={styles.clientes}>
        {formEntries.map((entry) => {
            {total += parseFloat(entry.Valor)}
        })}
        <Text style={styles.totalvendas}>Total Vendido: {total}</Text>
        <Text style={styles.total}>Porcentagem Fornecedor: {'50%'}</Text>
        <Text style={styles.total}>Porcentagem Vendedor: {'50%'}</Text>
        <Text style={styles.totalfornecedor}>Fornecedor Recebe: {total * 0.5}</Text>
        <Text style={styles.totalvendedor}>Vendedor Recebe: {total * 0.5}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E4C8C4',
    },
    text: {
      fontSize: 40,
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Arial',
    },
    textview: {
      backgroundColor: '#940294',
      padding: 15,
      borderRadius: 20,
      elevation: 5,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      marginTop: 50,
      alignItems: 'center',
    },
    clientes: {
      marginTop: 30,
      width: '85%',
    },
    textoroot: {
      margin: 3,
      fontSize: 15,
      color: 'white',
      fontWeight: 'bold',
    },
    total: {
      backgroundColor: '#b658b6',
      padding: 10,
      borderRadius: 20,
      marginBottom: 20,
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
    totalvendas: {
      backgroundColor: '#8971f7',
      padding: 10,
      borderRadius: 20,
      marginBottom: 20,
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 20,
    },  
    totalfornecedor: {
      backgroundColor: '#f369a2',
      padding: 10,
      borderRadius: 20,
      marginBottom: 20,
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 20,
    },
    totalvendedor: {
        backgroundColor: '#f82e82',
        padding: 10,
        borderRadius: 20,
        marginBottom: 20,
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20,
      }
});

export default ComissaoScreen;
