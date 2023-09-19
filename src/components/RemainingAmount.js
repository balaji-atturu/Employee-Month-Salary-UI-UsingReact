import React, { useContext } from 'react';
import { AppContext } from './InitialExpenses';

const RemainingBudget = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div class={`alert p-4 ${alertType}`}>
			<span>After Expenses: ${budget - totalExpenses}</span>
		</div>
	);
};

export default RemainingBudget;
