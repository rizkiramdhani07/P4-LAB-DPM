import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, ImageBackground } from 'react-native';
import TeamScore from './src/components/TeamScore';
import ResetButton from './src/components/ResetButton';

export default function App() {
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);

  const increaseScore = (team) => {
    if (team === 'A') {
      if (scoreTeamA + 1 === 10) {
        Alert.alert('Hasil Pertandingan', 'Tim A menang!');
      }
      setScoreTeamA(scoreTeamA + 1);
    } else if (team === 'B') {
      if (scoreTeamB + 1 === 10) {
        Alert.alert('Hasil Pertandingan', 'Tim B menang!');
      }
      setScoreTeamB(scoreTeamB + 1);
    }
  };

  const decreaseScore = (team) => {
    if (team === 'A' && scoreTeamA > 0) {
      setScoreTeamA(scoreTeamA - 1);
    } else if (team === 'B' && scoreTeamB > 0) {
      setScoreTeamB(scoreTeamB - 1);
    }
  };

  const resetScores = () => {
    setScoreTeamA(0);
    setScoreTeamB(0);
  };

  return (
    <ImageBackground
      source={require('./assets/rizkikerenz.jpg')} // Tambahkan gambar di folder `assets`
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Aplikasi Pengaturan Skor</Text>

        <TeamScore
          teamName="Tim A"
          score={scoreTeamA}
          onIncrease={() => increaseScore('A')}
          onDecrease={() => decreaseScore('A')}
        />

        <TeamScore
          teamName="Tim B"
          score={scoreTeamB}
          onIncrease={() => increaseScore('B')}
          onDecrease={() => decreaseScore('B')}
        />

        <ResetButton onReset={resetScores} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Agar terlihat pada background gelap
    marginBottom: 20,
    textAlign: 'center',
  },
});
