import axios from "axios";

import {
	CONTEST_LIST_REQUEST,
	CONTEST_LIST_SUCCESS,
	CONTEST_LIST_FAIL,
	CONTEST_DETAILS_REQUEST,
	CONTEST_DETAILS_SUCCESS,
	CONTEST_DETAILS_FAIL,
} from "../constants/contestConstants";

export const listContests = (keyword = "") => async (dispatch) => {
	try {
		dispatch({ type: CONTEST_LIST_REQUEST });

		const result = await axios.get(
			"https://codeforces.com/api/contest.list"
		);
		const data = result.data.result;

		switch (keyword) {
			case "ICPC": {
				let filteredData = data.filter((x) => x.type === keyword);
				dispatch({ type: CONTEST_LIST_SUCCESS, payload: filteredData });
				//console.log("searching ICPC");
				break;
			}
			case "CF": {
				let filteredData = data.filter((x) => x.type === keyword);
				dispatch({ type: CONTEST_LIST_SUCCESS, payload: filteredData });
				//console.log("searching CF");
				break;
			}
			default: {
				let searchedData = data.filter((x) =>
					x.name.toLowerCase().includes(keyword.toLowerCase())
				);

				dispatch({ type: CONTEST_LIST_SUCCESS, payload: searchedData });
			}
		}
	} catch (error) {
		dispatch({
			type: CONTEST_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const listContestDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: CONTEST_DETAILS_REQUEST });

		const result = await axios.get(
			"https://codeforces.com/api/contest.list"
		);
		const data = result.data.result;

		const contestDetail = data.find((x) => {
			return x.id.toString() === id.toString();
		});

		//console.log(contestDetail);
		dispatch({ type: CONTEST_DETAILS_SUCCESS, payload: contestDetail });
	} catch (error) {
		dispatch({
			type: CONTEST_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
