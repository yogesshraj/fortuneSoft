const logger = require("../utilities/logger");
const Movie = require("../database/models/MovieTable").Model;
const fs = require("fs");
const path = require('path');

module.exports.seed = async () => {
	try {
		await seed_movie();
	} catch (error) {
		logger.log_error('Problem occurred while seeding the database!' + 'Error: ' + error.message);
	}
};

async function seed_movie() {
	var count = await Movie.count();
	if (count > 0) {
		return;
	}
    const movie_buffer = fs.readFileSync(path.join(process.cwd(), "./raw_data/movie_db.json"));
    const movie_data = JSON.parse(movie_buffer);
    for(var data of movie_data) {

        if(Array.isArray(data.genres)) {
            for(var genre of data.genres){

                let director = "";
                if(Array.isArray(data.director)){
                    director = data.director.toString();
                }
                await Movie.create({
                    genres : genre,
                    director : director == "" ? data.director : director,
                    imdb_rating : parseInt(data.imdb_rating),
                    length: data.length,
                    poster : data.poster,
                    title: data.title,
                });
            }
        }
    }
    console.log("Movie seeded to database sucessfully!");
}


