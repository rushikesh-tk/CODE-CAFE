import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { listContestDetails } from "../actions/contestActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ContestDetailsScreen = ({ match }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listContestDetails(match.params.id));
	}, [dispatch]);

	const contestDetail = useSelector((state) => state.contestDetail);
	const { loading, error, contest } = contestDetail;

	return (
		<>
			{loading ? (
				<Loader />
			) : error ? (
				<Message>{error}</Message>
			) : (
				<Card
					bg="dark"
					text="white"
					style={{ width: "100%" }}
					className="mb-2"
				>
					<Card.Header className="f2 ba">{contest.name}</Card.Header>
					<Card.Body className="ba">
						<Card.Text className="f4 b">
							Contest ID : {contest.id}
						</Card.Text>
						<Card.Text>Type : {contest.type}</Card.Text>
						<Card.Text>Phase : {contest.phase}</Card.Text>
						<Card.Text>
							Duration : {contest.durationSeconds} secs
						</Card.Text>
					</Card.Body>
				</Card>
			)}
		</>
	);
};

export default ContestDetailsScreen;
