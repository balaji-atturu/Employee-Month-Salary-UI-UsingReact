import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span> Salary: ${props.budget}</span>
			<button id ="Heading10" type='button' class='btn btn-success' onClick={props.handleEditClick}>
				Inc or Dec Month Salary
			</button>
		</>
	);
};

export default ViewBudget;
