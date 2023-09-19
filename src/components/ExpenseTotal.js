import React, { useContext } from 'react';
import { AppContext } from './InitialExpenses';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div class='alert alert-primary p-4'>
			<span style={{color:'red'}}>Expenses In This Month: ${total}</span>
		</div>
	);
};

export default ExpenseTotal;
