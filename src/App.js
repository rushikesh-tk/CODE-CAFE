import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import ContestListScreen from "./screens/ContestListScreen";
import ContestDetailsScreen from "./screens/ContestDetailsScreen";
import FavContestListScreen from "./screens/FavContestListScreen";
import "tachyons";

const App = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Route
						path="/search/:keyword"
						component={ContestListScreen}
					/>
					<Route
						path="/contest-type/:keyword"
						component={ContestListScreen}
					/>
					<Route path="/" component={ContestListScreen} exact />
					<Route
						path="/contest/:id"
						component={ContestDetailsScreen}
					/>
					<Route
						path="/favourites"
						component={FavContestListScreen}
						exact
					/>
				</Container>
			</main>
		</Router>
	);
};

export default App;
