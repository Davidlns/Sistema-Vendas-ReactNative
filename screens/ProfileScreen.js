import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext'; 
import ExcluirIMG from '../imagens/excluir.png';

const ProfileScreen = () => {
  const { formEntries } = useContext(AppContext);
  const [localFormEntries, setLocalFormEntries] = useState([]);
  const [excludedEntries, setExcludedEntries] = useState([]);

  useEffect(() => {
    // Inicializar o estado local com as entradas globais filtradas, exceto as excluídas
    const filteredEntries = formEntries.filter(entry => entry.TipoVenda === 'prazo' && !excludedEntries.includes(entry));
    setLocalFormEntries(filteredEntries);
  }, [formEntries, excludedEntries]);

  let total = 0;

  const handleDelete = (index) => {
    // Adicionar o item excluído à lista de excluídos
    const itemToExclude = localFormEntries[index];
    setExcludedEntries([...excludedEntries, itemToExclude]);

    // Atualizar o estado local para remover a entrada apenas nesta tela
    const updatedEntries = localFormEntries.filter((_, i) => i !== index);
    setLocalFormEntries(updatedEntries);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textview}>
        <Text style={styles.text}>Vendas a Prazo</Text>
      </View>

      <ScrollView style={styles.clientes}>
        {localFormEntries.map((entry, index) => (
          <View key={index} style={styles.entry}>
            <TouchableOpacity onPress={() => handleDelete(index)}> 
              <Image source={ExcluirIMG} style={styles.icon} /> 
            </TouchableOpacity>
            <View>
              <Text style={styles.textoroot}>Nome: {entry.Nome}</Text>
              <Text style={styles.textoroot}>Produtos: {entry.Produtos}</Text>
              <Text style={styles.textoroot}>Valor: {entry.Valor}</Text>
              {total += parseFloat(entry.Valor)}
            </View>
          </View>
        ))}
        <Text style={styles.total}>{`Total a prazo: ${total.toFixed(2)}`}</Text>
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
    backgroundColor: '#734180',
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
  entry: {
    backgroundColor: 'rgb(192, 157, 238)',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  textoroot: {
    margin: 3,
    fontSize: 15,
    color: '#570157',
    fontWeight: 'bold',
  },
  total: {
    backgroundColor: '#734180',
    padding: 10,
    borderRadius: 20,
    marginBottom: 80,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ProfileScreen;
