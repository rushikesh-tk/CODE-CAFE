import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Table } from "react-bootstrap";
import { listContests } from "../actions/contestActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FilterContests from "../components/FilterContests";
import Paginate from "../components/Paginate";
import Chart from "../components/Chart";

const ContestList = ({ history, match }) => {
	const [page, setPage] = useState(0);
	const [limit, setLimit] = useState(10);
	//const [chartContent, setChartContent] = useState([]);
	const keyword = match.params.keyword;
	const dispatch = useDispatch();
	const contestList = useSelector((state) => state.contestList);
	const { loading, error, contests } = contestList;

	useEffect(() => {
		dispatch(listContests(keyword));
	}, [dispatch, keyword]);

	const onContestNameClick = (id) => {
		history.push(`/contest/${id}`);
	};

	//console.log(page, limit);
	const lastPage = (contests.length - 1) / limit;

	const newContestArray = contests.slice(page * limit, (page + 1) * limit);
	//console.log(newContestArray);

	const sortFinishedContests = newContestArray.filter(
		(x) => x.phase === "FINISHED"
	);
	const sortUpcomingContests = newContestArray.filter(
		(x) => x.phase !== "FINISHED"
	);

	//console.log(contests.length);

	return (
		<>
			<Chart newContestArray={newContestArray} />
			<Paginate
				page={page}
				setPage={setPage}
				limit={limit}
				setLimit={setLimit}
				lastPage={Math.ceil(lastPage - 1)}
			/>
			<Route
				render={({ history }) => <FilterContests history={history} />}
			/>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<>
					{sortUpcomingContests ? (
						<Table striped bordered hover variant="dark">
							<thead>
								<tr>
									<th className="f3">
										UPCOMING / ONGOING CONTESTS{" "}
										<h4 className="fr silver">
											Number of contests :{" "}
											{sortUpcomingContests.length}
										</h4>
									</th>
								</tr>
							</thead>
							<tbody>
								{sortUpcomingContests.map((contest) => (
									<tr>
										<td
											className="f5"
											onClick={() =>
												onContestNameClick(contest.id)
											}
											key={contest.id}
										>
											<div className="pointer">
												{contest.name}
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					) : (
						<Loader />
					)}
					{sortFinishedContests ? (
						<Table striped bordered hover variant="dark">
							<thead>
								<tr>
									<th className="f3">
										FINISHED CONTESTS
										<h4 className="fr silver">
											Number of contests :{" "}
											{sortFinishedContests.length}
										</h4>
									</th>
								</tr>
							</thead>
							<tbody>
								{sortFinishedContests.map((contest) => (
									<tr>
										<td
											className="f5"
											onClick={() =>
												onContestNameClick(contest.id)
											}
											key={contest.id}
										>
											<div className="pointer">
												{contest.name}
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					) : (
						<Loader />
					)}
				</>
			)}
		</>
	);
};

export default ContestList;
