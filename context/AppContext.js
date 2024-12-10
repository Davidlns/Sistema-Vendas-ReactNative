import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [formEntries, setFormEntries] = useState([]);

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@form_entries');
      if (jsonValue != null) {
        setFormEntries(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error("Failed to load entries.", e);
    }
  };

  const saveEntries = async (entries) => {
    try {
      const jsonValue = JSON.stringify(entries);
      await AsyncStorage.setItem('@form_entries', jsonValue);
    } catch (e) {
      console.error("Failed to save entries.", e);
    }
  };

  const addEntry = (entry) => {
    const updatedEntries = [...formEntries, entry];
    setFormEntries(updatedEntries);
    saveEntries(updatedEntries);
  };

  const deleteEntry = (index) => {
    const updatedEntries = formEntries.filter((_, i) => i !== index);
    setFormEntries(updatedEntries);
    saveEntries(updatedEntries);
  };

  return (
    <AppContext.Provider value={{ formEntries, addEntry, deleteEntry }}>
      {children}
    </AppContext.Provider>
  );
};
