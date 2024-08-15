import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addBookmark } from '../redux/bookmarksSlice';

const JobsScreen = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchJobs();
  }, [page]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
      setJobs(prevJobs => [...prevJobs, ...response.data.data]); 
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('Failed to load jobs');
      console.error(error);
    }
  };

  const renderJob = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('JobDetails', { job: item })}
      onLongPress={() => dispatch(addBookmark(item))}
      style={styles.card}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <Text style={styles.salary}>{item.salary ? `Salary: $${item.salary}` : 'Salary: Not Provided'}</Text>
      <Text style={styles.phone}>{item.phone}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={jobs}
          renderItem={renderJob}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={() => setPage(page + 1)}
          onEndReachedThreshold={0.5}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  card: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  salary: {
    fontSize: 14,
    color: '#1d72b8',
    marginVertical: 4,
  },
  phone: {
    fontSize: 14,
    color: '#007bff',
    marginVertical: 4,
  },
  error: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default JobsScreen;

