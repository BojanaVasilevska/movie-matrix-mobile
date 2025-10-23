import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface Movie {
  id: number | string;
  poster_path?: string | null;
  title: string;
  vote_average?: number;
  release_date?: string;
}

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {
  return (
    <Link href={`/movie/${String(id)}` as any} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{ 
            uri: poster_path 
              ? `https://image.tmdb.org/t/p/w500${poster_path}` 
              : 'https://via.placeholder.com/600x4000/1a1a1a/FFFFFF.png' 
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        
        <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>
          {title}
        </Text>
        
        <View className="mt-1">
          <Text className="text-xs text-gray-400">
            {release_date ? new Date(release_date).getFullYear() : 'TBA'}
          </Text>
        </View>
        
        <View className="flex-row items-center justify-between mt-1">
          <Text className="text-xs font-medium text-blue-400 uppercase">
            Movie
          </Text>
          {vote_average !== undefined && (
            <View className="flex-row items-center space-x-1">
              <Image
                source={require('../../assets/icons/star.png')}
                className="w-3 h-3"
                resizeMode="contain"
                style={{ tintColor: '#FFD700' }}
              />
              <Text className="text-xs text-gray-400 font-medium">
                {vote_average.toFixed(1)}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </Link> 
  );
};

export default MovieCard;
