import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AppContext } from '../context/AppContext';
import RadioForm from 'react-native-simple-radio-button';

const SignupSchema = Yup.object().shape({
  Nome: Yup.string().required('Campo obrigatório'),
  Produtos: Yup.string().required('Campo obrigatório'),
  Valor: Yup.string().required('Campo obrigatório'),
  TipoVenda: Yup.string().required('Campo obrigatório'),
});

const HomeScreen = () => {
  const { addEntry } = useContext(AppContext);

  const handleFormSubmit = (values, actions) => {
    addEntry(values);
    limpar(actions);
  };

  const limpar = (actions) => {
    actions.resetForm();
  };

  const radio_props = [
    { label: 'À vista', value: 'vista' },
    { label: 'À prazo', value: 'prazo' }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.textview}>
        <Text style={styles.text}>Boreal N</Text>
      </View>
      <Formik
        initialValues={{ Nome: '', Produtos: '', Valor: '', TipoVenda: '' }}
        validationSchema={SignupSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('Nome')}
              onBlur={handleBlur('Nome')}
              value={values.Nome}
              placeholder="Nome"
            />
            {errors.Nome && touched.Nome ? (
              <Text style={styles.error}>{errors.Nome}</Text>
            ) : null}

            <TextInput
              style={styles.input}
              onChangeText={handleChange('Produtos')}
              onBlur={handleBlur('Produtos')}
              value={values.Produtos}
              placeholder="Produtos"
            />
            {errors.Produtos && touched.Produtos ? (
              <Text style={styles.error}>{errors.Produtos}</Text>
            ) : null}

            <TextInput
              style={styles.input}
              onChangeText={handleChange('Valor')}
              onBlur={handleBlur('Valor')}
              value={values.Valor}
              placeholder="Valor"
            />
            {errors.Valor && touched.Valor ? (
              <Text style={styles.error}>{errors.Valor}</Text>
            ) : null}

            <RadioForm
              style={styles.radio}
              radio_props={radio_props}
              initial={-1}
              formHorizontal={true}
              buttonColor={'#8a208a'}
              selectedButtonColor={'#8a208a'}
              labelStyle={styles.radioLabel}
              animation={true}
              onPress={(value) => setFieldValue('TipoVenda', value)}
            />
            {errors.TipoVenda && touched.TipoVenda ? (
              <Text style={styles.error}>{errors.TipoVenda}</Text>
            ) : null}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
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
    fontFamily: 'Dancing',
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
  },
  textview: {
    backgroundColor: '#8a208a',
    padding: 15,
    borderRadius: 20,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginTop: -100,
    alignItems: 'center',
  },
  formContainer: {
    marginTop: 50,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: '#8a208a',
    backgroundColor: 'rgba(255, 235, 251, 0.325)',
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 12,
    paddingLeft: 8,
    width: '100%',
  },
  error: {
    fontSize: 12,
    color: '#8a208a',
    marginBottom: 10,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#8a208a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginTop: 30,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  radio: {
    marginTop: 20,
    marginInline: 40,
  },
  radioLabel: {
    color: '#6f02b8',
    marginRight: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
