import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const FilterContest = ({ history }) => {
	const onDropDownItemSelect = (contestType) => {
		if (contestType === "ALL") {
			history.push("/");
		} else {
			history.push(`/contest-type/${contestType}`);
		}
	};

	return (
		<DropdownButton
			id="dropdown-basic-button"
			title="Sort By Type"
			className="py-2 fl"
		>
			<Dropdown.Item onClick={() => onDropDownItemSelect("ALL")}>
				ALL
			</Dropdown.Item>
			<Dropdown.Item onClick={() => onDropDownItemSelect("ICPC")}>
				ICPC
			</Dropdown.Item>
			<Dropdown.Item onClick={() => onDropDownItemSelect("CF")}>
				CF
			</Dropdown.Item>
		</DropdownButton>
	);
};

export default FilterContest;
