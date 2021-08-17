let currentEmployees = [
    // Setup employee objects, made up of property keys
    {
      firstName: 'Jen',
      lastName: 'Barber',
      employeeID: '4521',
      employeeTitle: 'Team Lead',
      employeeSalary: 80000,
    },
    {
      firstName: 'Maurice',
      lastName: 'Moss',
      employeeID: '8724',
      employeeTitle: 'Support Team',
      employeeSalary: 58000,
    },
    {
      firstName: 'Roy',
      lastName: 'Smith',
      employeeID: '9623',
      employeeTitle: 'Quality Assurance',
      employeeSalary: 48000,
    },
  ];
  
  // Setup a function, to grab form values for each employee
  // Append each employee to the DOM
  function onReady() {
    // Display current employee on the DOM
    // Add a delete button to remove employee row
    // Add a form that we can type in our new employee information
    // When submit is clicked, will add a new employee to the table, and clear
  
    // Empty the list items
    $('#employeeList').empty();
  
    // Loop over the employees
    for (let i = 0; i < currentEmployees.length; i++) {
      // created a reusable function for every employee to pass in their information
      addEmployee(
        currentEmployees[i].firstName,
        currentEmployees[i].lastName,
        currentEmployees[i].employeeID,
        currentEmployees[i].employeeTitle,
        currentEmployees[i].employeeSalary
      );
    }
  
    // Add function to the delete button
    // - Coming back. I want this to display the employee being deleted
    $('#employeeList').on('click', '.deleteButton', function (event) {
      alert('Employee Deleted');
      // find the element that was clicked
      let deleteClicked = $(event.target);
      // remove the employee row from the DOM
      // used .closest to delete the first that match the line
      deleteClicked.closest('tr').remove();
    });
  
    function addEmployee(
      firstName,
      lastName,
      employeeID,
      employeeTitle,
      employeeSalary
    ) {
      // add an employee with the given information to the DOM
      // For each employee, append it to the DOM
  
      $('#employeeList').append(`<tr>
  <td class="tcProp">${firstName}</td>
  <td class="tcProp">${lastName}</td>
  <td class="tcProp">${employeeID}</td>
  <td class="tcProp">${employeeTitle}</td>
  <td class="tcPropSal">$ ${employeeSalary}</td>
  <td class="tcProp"><input type="button" class="deleteButton" value="  Delete  "></td>
      </tr>`);
    }
  
    // Setup button function to submit fields
    $('.submitButton').on('click', function () {
      // Grab the form fields
      // Call addEmployee function
      const firstName = $('#employeeFirstName').val();
      const lastName = $('#employeeLastName').val();
      const employeeID = $('#employeeID').val();
      const employeeTitle = $('#employeeTitle').val();
      const employeeSalary = $('#employeeSalary').val();
  
      // Use the exsisting function to push fields into employee array
      addEmployee(firstName, lastName, employeeID, employeeTitle, employeeSalary);
  
      // empty fields after pushed into employee array
      $('#employeeFirstName').val('');
      $('#employeeLastName').val('');
      $('#employeeID').val('');
      $('#employeeTitle').val('');
      $('#employeeSalary').val('');
  
      currentEmployees.push({
        firstName: String(firstName),
        lastName: String(lastName),
        employeeID: String(employeeID),
        employeeTitle: String(employeeTitle),
        employeeSalary: Number(employeeSalary),
      });
  
      // salary + employeeSalary;
      totalSalaryBalance();
    });
  
    totalSalaryBalance();
  
     }
  $(onReady);
  
  
    function totalSalaryBalance() {
      // loop through garage value array
      let salaryBalance = 0;
      for (let i = 0; i < currentEmployees.length; i++) {
        // add total salary of all employees
        // used to display updated salarays
        salaryBalance += Number(currentEmployees[i].employeeSalary) / 12;
      } // end for loop
      console.log(Math.ceil(salaryBalance * 100) / 100); // display for test
      // display total salary amounts
      let balance = $('.totalBalance');
      balance.empty();
      balance.append('$', Math.round(salaryBalance * 100) / 100);
      console.log(currentEmployees); // see Monthly Balance
  
      if (salaryBalance >= 20000) {
        // console.log('test');
        $('.totalBalance').css('color', 'red');
        return true;
        // append the class="totalBalance" = class="totalBalanceRed"
      } // don't change anything if under 20000
    };
  
    