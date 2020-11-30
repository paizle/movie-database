import React from 'react';

import api from '../../MovieDbRestApi';

const Context = React.createContext(null);

const GenreContextProvider = (props) => {

	const [genres, setGenres] = React.useState(null);
	const getGenres = async () => {
		// lazy getter
		if(genres) {
			return genres;
		} else {
			const data = api.getGenres();
			console.log("getting genres from api");
			setGenres(data);
			return data;
		}
	}

	const value = {getGenres}

	return (
		<Context.Provider value={value}>
			{props.children}
		</Context.Provider>
	)
}


const GenreContextConsumer = Context.Consumer;

export {Context as GenreContext, GenreContextProvider, GenreContextConsumer}