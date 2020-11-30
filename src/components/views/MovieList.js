import React from 'react';

export default function MovieList(props) {

	return (
		<ul className="movie-list">
			{!props.movies?null:props.movies.map((item, index) => {

				// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

				const {title, titleType} = (() => {
					if(item.name) {
						return {title:item.name, titleType:'Name'}
					} else if(item.title) {
						return {title:item.title, titleType:'Title'}
					} else if(item.original_title) {
						return {title:item.original_title, titleType:'Original Title'}
					}
				})()

				return (
					
					<li key={index} style={{'backgroundImage':`url('https://image.tmdb.org/t/p/w500${item.backdrop_path}')`}}>
						
						{/* todo: get appropriate file size options from config */}
						<img src={`https://image.tmdb.org/t/p/w1280/${item.poster_path}`} alt={title} />

						<div className="content">
							<h3 title={titleType}>{title}</h3>
							<p>{item.overview}</p>	
						</div>


						{/* 
						<div className="additional">
							<div>additional data 1</div>
							<div>additional data 2</div>
							<div>additional data 3</div>
						</div>
						*/}
						
					</li>
				)
			})}
		</ul>
	)
}