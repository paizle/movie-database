import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Link, useLocation } from "react-router-dom";

import GenresMenu from './GenresMenu';

export default function MainMenu(props) {

	const [isOpen, setIsOpen] = React.useState(false);

	const dummyMenuItems = ['Menu Item 1', 'Menu Item 2', 'Menu Item 3 this one is really long']

	const [subMenuItems, setSubMenuItems] = React.useState(null);

	const location = useLocation();

	const handleClick = (event) => {
		setSubMenuItems(null);
		setIsOpen(false);
	}

	return (
		<>
		<IconButton color="primary" id="menu-button" onClick={e => setIsOpen(!isOpen)}>
			<Menu />
		</IconButton>
		<Drawer 
			anchor="right" 
			open={isOpen} 
			onClose={e => setIsOpen(false)}
			PaperProps={{variant: 'elevation'}}
			onClick={handleClick}
		>
			<div className="nav-and-subnav">
				
				{!subMenuItems || !subMenuItems.length?null: (
					<List className="sub-navigation">
						{subMenuItems.map((item, index) => {
							return (
								<ListItem key={index} button>{item}</ListItem>
							)
						})}
					</List>
				)}
				
				<List className="main-navigation">
					<ListItem key="home" button selected={location.pathname==='/'}>
						<div className="link">
							<Link to="/"></Link>
							<span>Home</span>
						</div>
					</ListItem>
					{dummyMenuItems.map((item, i) => {
						return (
							<ListItem key={i} button>
								<div><span>{item}</span></div>
							</ListItem>
						)
					})}
					
					<ListItem key="genres" button selected={location.pathname.startsWith('/genres')}>
						<GenresMenu setSubMenuItems={setSubMenuItems} />
					</ListItem>
					<ListItem key="certifications" button selected={location.pathname.startsWith('/certifications')}>
						<div className="link">
							<Link to="/certifications"></Link>
							<span>Certifications</span>
						</div>
					</ListItem>
				</List>
			</div>
		</Drawer>
		</>
	)
}