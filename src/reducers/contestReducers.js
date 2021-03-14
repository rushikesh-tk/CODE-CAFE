import {
	CONTEST_LIST_REQUEST,
	CONTEST_LIST_SUCCESS,
	CONTEST_LIST_FAIL,
	CONTEST_DETAILS_REQUEST,
	CONTEST_DETAILS_SUCCESS,
	CONTEST_DETAILS_FAIL,
} from "../constants/contestConstants";

export const contestListReducer = (state = { contests: [] }, action) => {
	switch (action.type) {
		case CONTEST_LIST_REQUEST:
			return { loading: true, contests: [] };
		case CONTEST_LIST_SUCCESS:
			return { loading: false, contests: action.payload };
		case CONTEST_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const contestDetailsReducer = (state = { contest: {} }, action) => {
	switch (action.type) {
		case CONTEST_DETAILS_REQUEST:
			return { loading: true, ...state };
		case CONTEST_DETAILS_SUCCESS:
			return { loading: false, contest: action.payload };
		case CONTEST_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
