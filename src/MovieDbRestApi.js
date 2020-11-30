

const apiKey = 'd2cc468f64d3427995685d9ce7dc423f';

const MovieDbRestApi = {

	getConfig: () => {
		return fetch('https://api.themoviedb.org/3/configuration?api_key='+apiKey)
				.then((response) => response.json());
	},

	getTrending: () => {

		const mediaType = "all";
		const timeWindow = "week";

		return fetchHandlers(fetch(`https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=${apiKey}`))
			.then(data => data.results);
	},

	// /genre/movie/list
	getGenres: () => {
		return fetchHandlers(fetch(withApi('/genre/movie/list')))
			.then(data => data.genres);
	},

	// /certification/movie/list
	getCertifications: () => {
		const url = withApi('/certification/movie/list');
		console.log(url);
		return fetchHandlers(fetch(url));
	},

	// /discover/movie?api_key=af1b76109560756a2450b61eff16e738&with_genres=28
	getMoviesByGenreIds: (genreIds) => {
		const withGenres = genreIds.join(',');
		const url = withApi('/discover/movie') + '&with_genres=' + withGenres;
		console.log(url);
		return fetchHandlers(fetch(url));
	},

	// /movie/{movie_id}/watch/providers
	getWatchProviders: (movieId) => {
		const url = withApi(`/movie/${movieId}/watch/providers`)
		console.log(url);
		return fetchHandlers(fetch(url));
	}
}

export default MovieDbRestApi

const withApi = (url) => {
	// prepends host and rest route, as well as appends query string API key
	return "https://api.themoviedb.org/3" + url + '?api_key=' + apiKey;
}

const fetchHandlers = (promise) => {
	return handleApiError(asJson(throwNotOk(promise)));
	//compose()
}

const throwNotOk = async (promise) => {
	return promise.then(async (response) => {
		if(response.ok) {
			return response;
		} else {
			throw await response.json();
		}
	})
}

const asJson = (promise) => {
	return promise.then((response) => response.json())
} 

const handleApiError = (promise) => {
	return promise.catch((error) => {
		console.log("api request error", error);
		return null;
	});
}

//const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))
