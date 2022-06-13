'use strict';
const Movie = require('../database/models/MovieTable').Model;
const error_handler = require('../utilities/error_handler');


module.exports.get_all = async () => {
	try {
		const movies = await Movie.findAll();
		let movie_array = []
		movies.map(movie => movie_array.push({"genres" : movie.genres}))

		function getUniqueListBy(movie_array, key) {
			return [...new Map(movie_array.map(item => [item[key], item])).values()]
		}
		
		const movie_array_genres = getUniqueListBy(movie_array, 'genres');

		for (var movie_array_genre of movie_array_genres) {
			movie_array_genre.movies = [];
			for (var movie of movies) {
				if(movie_array_genre.genres == movie.genres) {
					let suitable_movie_object = {
						"director" : movie.director,
						"imdb_rating" : movie.imdb_rating,
						"length" : movie.length,
						"poster" : movie.poster,
						"title" : movie.title,
					}
					movie_array_genre.movies.push(suitable_movie_object);
				}
			}
		}

        return movie_array_genres;
	} catch (error) {
		var msg = 'Problem encountered while retrieving movie instances!';
		error_handler.throw_service_error(error, msg);
	}
};
