import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Paginate from "./Paginate";

const Footer = () => {
	return (
		<footer>
			<Container>
				<Paginate />
				<Row>
					<Col className="text-center py-3">
						Copyright &copy; ProShopy
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
