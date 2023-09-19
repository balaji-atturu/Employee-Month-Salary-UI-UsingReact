import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Top = () => {
	return (
<>
<div style={{visibility:""}}>
<nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#Heading1">Inc or Dec</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Heading2">Add Expense</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Heading3">Expenses</a>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
  <h4 id="Heading1">Inc or Dec</h4>
  <pre><h6 className='text-success'>In this Section the user can update his or her salary </h6>
       <h6 className='text-success'>By Clicking the button the user can add new salaryyyy </h6>
  </pre>
  <p>For Example, the Salary of an Employee is $10000. After few years of Experience his or her salary might increase 
    In this case the user can use the button Inc or Dec Salary button to adjust his or her salary, then automatically the user 
    can see the changes in the after expenses  and expenses in this month section
  </p>
  <h4 id="Heading2">Add Expense</h4>
  <pre><h6 className='text-success'>Here user can add description of his or her purchases  </h6>
       <h6 className='text-success'>In the name input filed the user can add  description </h6>
       <h6 className='text-success'>In the cost input filed the user can add  actual cost </h6>
  </pre>
  <p>For Example, the user spent his money on buying a fridge then the user can add a decription to remember 
     his purchase like I bought a fridge on 29-july-2023. And in the cost field he can add the actual amount he 
     spent. After clicking the button add and save then automatically the money will reduce in salary section and it will increae in the remaining two sections 
  </p>
  <h4 id="Heading3">Expenses</h4>
  <pre><h6 className='text-danger'>In this section he can search how user spent his or her  money  </h6>
       <h6 className='text-danger'>If user  press the wrong symbol button then the amount changes  </h6>
       <h6 className='text-danger'>All the saved  purcahses are going to be  displayed in  order </h6>
  </pre>
  
</div>
</div>
</>


    )
    };
    export default Top;
