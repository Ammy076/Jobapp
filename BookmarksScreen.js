import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const BookmarksScreen = () => {
  const bookmarks = useSelector((state) => state.bookmarks);

  const renderBookmark = ({ item }) => (
    <View style={{ padding: 20, borderBottomWidth: 1 }}>
      <Text>{item.title}</Text>
      <Text>{item.location}</Text>
      <Text>{item.salary}</Text>
      <Text>{item.phone}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={bookmarks}
        renderItem={renderBookmark}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default BookmarksScreen;
