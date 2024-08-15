import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loadBookmarks } from '../redux/bookmarksSlice';

const BookmarksScreen = () => {
  const bookmarks = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBookmarks());
  }, []);

  const renderBookmark = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <Text style={styles.salary}>{item.salary ? `Salary: $${item.salary}` : 'Salary: Not Provided'}</Text>
      <Text style={styles.phone}>{item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={bookmarks}
        renderItem={renderBookmark}
        keyExtractor={(item) => item.id.toString()}
      />
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
});

export default BookmarksScreen;

