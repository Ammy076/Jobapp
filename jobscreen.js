import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addBookmark } from '../redux/bookmarksSlice';

const JobsScreen = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchJobs();
  }, [page]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`https://api.example.com/jobs?page=${page}`);
      setJobs([...jobs, ...response.data]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const renderJob = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('JobDetails', { job: item })}
      onLongPress={() => dispatch(addBookmark(item))}
    >
      <View style={{ padding: 20, borderBottomWidth: 1 }}>
        <Text>{item.title}</Text>
        <Text>{item.location}</Text>
        <Text>{item.salary}</Text>
        <Text>{item.phone}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
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

export default JobsScreen;
