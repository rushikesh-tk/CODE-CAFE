import React from "react";
//import { Container } from "react-bootstrap";
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
} from "recharts";

const Chart = ({ newContestArray }) => {
	const data = newContestArray;

	//console.log(newContestArray);

	return (
		<LineChart width={600} height={300} data={data}>
			<Line type="monotone" dataKey="durationSeconds" stroke="#8884d8" />
			<CartesianGrid stroke="#ccc" />
			<XAxis dataKey="id" />
			<YAxis dataKey="durationSeconds" />
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey="name" stroke="#8884d8" />
			<Line type="monotone" dataKey="durationSeconds" stroke="#82ca9d" />
			<Line type="monotone" dataKey="phase" stroke="#8884d8" />
		</LineChart>
	);
};

export default Chart;
