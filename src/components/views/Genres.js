import React from 'react';

import {useParams} from 'react-router-dom';

import api from '../../MovieDbRestApi';
import {GenreContext} from '../context/genreContext';

import MovieList from './MovieList';

function Genres(props) {

	const genreContext = React.useContext(GenreContext);

	const { id } = useParams();

	const {setPageSubtitle} = props;
	
	const [movies, setMovies] = React.useState(null);
	React.useEffect(() => {
		(async () => {
			const genreId = parseInt(id);
			console.log("genre id", genreId);
			const data = await api.getMoviesByGenreIds([genreId]);
			console.log("movie by genre data", data);
			setMovies(data.results);

			const genres = await genreContext.getGenres();
			const name = genres.find((genre) => genre.id === genreId)['name'];
			setPageSubtitle("- Genre: " + name);
		})()
	}, [id])


	return (
		<MovieList movies={movies} />
	)
}

export default Genres;