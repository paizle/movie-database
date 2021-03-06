import React from 'react';

import { Link } from "react-router-dom";
import {GenreContext} from '../../context/genreContext';

function GenresMenu(props) {
	
	const genreContext = React.useContext(GenreContext);

	const [menuItems, setMenuItems] = React.useState(null);
	
	const handleHover = (event) => {
		props.setSubMenuItems(menuItems);
		event.stopPropagation();
	}

	const handlePlaceholderClick = (event) => {
		event.stopPropagation();
	}

	React.useEffect(() => {
		(async () => {
			if(!menuItems) {
				const genres = await genreContext.getGenres();
				setMenuItems(renderMenuItems(genres));
				console.log("genres" , genres);
			}
		})();
	}, []);

	const renderMenuItems = (menuItems) => {
		return menuItems.map((item) => {
			return (
				<div className="link">
					<Link to={'/genres/' + item.id}></Link>
					<span>{item.name}</span>
				</div>
			)
		})
	}

	return (
		<div onMouseEnter={handleHover} onClick={handlePlaceholderClick} className="placeholder">
			<span>Genres</span>
		</div>
	)
}

export default GenresMenu;