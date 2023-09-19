import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './components/InitialExpenses';
import MonthSalary from './components/MonthSalary';
// import Top from './components/Top';
import Top1 from './components/Top1';
import Top3 from './components/Top3';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import RemainingBudget from './components/RemainingAmount';

const App = () => {
	return (
		<AppProvider>
		<Top3 />
			<div className='container'>
			<h5 className='mt-3 alert alert-primary p-2'>Confused in how much amount is spent and how much amount is remaining in Month Salary  Use the below Created Interface</h5>
		
			
			{/* <h3 className='mt-3 alert alert-info p-4'>Search above what you bought in the complete month  </h3> */}
			
			
           
			
			
				
				<h5 className='mt-3 alert alert-primary p-2'>Use Inc or Dec button to Increase Or Decrease your salary   </h5>
				<div className='row mt-3'>
					<div className='col-sm'>
						<MonthSalary />
					</div>
					
					<div id="Heading16" className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
          <Top1/>
				</div>
			
				<h5 id="Heading12" className='mt-3'>Bought Something Add Here</h5>
				<div className='row mt-3'>
					<div className='col-sm d-block'>
						<AddExpense />
					</div>
          </div>
          <h5 className='mt-3 alert alert-primary p-2'>After Clicking Add and Save Check the amount  </h5>
          <div id="Heading15" className='mt-4 w-25 ' class="d-block w-25">
						<RemainingBudget />
					</div>
					<div className='mt-3 w-25 col-sm' class="d-block w-25">
						<ExpenseTotal />
					</div>
				
			
				<h3 id="Heading13" className='mt-3'>View Purchased</h3>
        <h5 className='mt-3'>Lets Explore previous purchases....!</h5>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
					</div>
					
          <h5 className='mt-3 alert alert-primary p-2'>Search above how you spent your salary in the complete month  </h5>
          <h5 className='mt-3'>Bought Something Useless</h5>
          <h5 className='mt-3'>No Worries...! Just Click the Wrong Symbol above and get your money back</h5>

          <div id="Heading11" className='mt-4 w-25 ' class="d-block w-25">
						<RemainingBudget />
					</div>
					<div className='mt-3 w-25 col-sm' class="d-block w-25">
						<ExpenseTotal />
					</div>
          <h5 className='mt-3 alert alert-danger p-2'>Contact Me  </h5>
          <p><a href="mailto:balajireddy.contact@gmail.com">Send email</a></p>
      </div>
		</AppProvider>
	);
};

export default App;
