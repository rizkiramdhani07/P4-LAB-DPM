import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TeamScore = ({ teamName, score, onIncrease, onDecrease }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={[styles.score, score >= 10 ? styles.winningScore : null]}>{score}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonIncrease} onPress={onIncrease}>
          <Text style={styles.buttonText}>Tambah</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDecrease} onPress={onDecrease}>
          <Text style={styles.buttonText}>Kurangi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    width: '90%',
  },
  teamName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  score: {
    fontSize: 48,
    marginVertical: 10,
    color: '#333',
  },
  winningScore: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  buttonIncrease: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonDecrease: {
    backgroundColor: '#F44336',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TeamScore;
