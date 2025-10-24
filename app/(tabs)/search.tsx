import { fetchMovies } from '@/services/api';
import useFetch from '@/services/useFetch';
import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

const Search = () => {
  const [query, setQuery] = React.useState('');
  const [debouncedQuery, setDebouncedQuery] = React.useState('');
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); 

    return () => clearTimeout(timer);
  }, [query]);

  const { data: movies, loading: moviesLoading, error: moviesError } = useFetch(
    () => fetchMovies({ query: debouncedQuery }),
    [debouncedQuery], 
    true 
  );

  const handleSearch = () => {
    setDebouncedQuery(query);
  };
  return (
    <View className='flex-1 bg-primary'>
      <Image 
        source={require("../../assets/images/bg.png")} 
        className="flex-1 w-full absolute z-0"
        resizeMode='cover'
      />
      <FlatList
        data={movies || []}
        renderItem={({ item }) => (
          <MovieCard {...item} />
        )}
        keyExtractor={(item) => String(item.id)}
        className='flex-1 px-5'
        numColumns={3}
        columnWrapperStyle={{ 
          justifyContent: 'space-between',
          marginVertical: 8,
        }}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListHeaderComponent={
          <View className='w-full mb-4'>
            <View className='w-full flex-row justify-center items-center'>
              <Image 
                source={require("../../assets/icons/logo.png")} 
                className="w-24 h-20 mx-auto mt-8 mb-1"
              />
            </View>
            <View className='w-full flex-row justify-center items-center mb-4'>
              <SearchBar 
                placeholder='Search movies ...'
                value={query}
                onChangeText={setQuery}
                onPress={handleSearch}
              />
            </View>
            
            {moviesLoading && (
              <View className="py-4">
                <ActivityIndicator size='large' color='#0000ff'/>
              </View>
            )}

            {moviesError && (
              <Text className='text-red-500 text-center py-4'>
                Error: {moviesError.message}
              </Text>
            )}

            {!moviesLoading && !moviesError && debouncedQuery && (
              <Text className='text-white text-lg font-bold text-center mb-4'>
                Search Results for{" "}
                <Text className='text-accent'>{debouncedQuery}</Text>
                {movies && movies.length > 0 && ` (${movies.length} found)`}
              </Text>
            )}
          </View>
        }
        ListEmptyComponent={
          !moviesLoading && !moviesError && debouncedQuery ? (
            <Text className='text-gray-400 text-center py-8'>
              {`No movies found for "${debouncedQuery}"`}
            </Text>
          ) : null
        }
      />
    </View>
  )
}

export default Search;
