// Get the expense form element by its ID
const expenseForm = document.getElementById('expenseForm');

// Get the table body (where expenses will be listed) by its ID
const expenseList = document.getElementById('expenseList');

// Add an event listener to the form that listens for the "submit" event
expenseForm.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior (so the page does not reload)
    event.preventDefault();

    // Get the values entered by the user in the form fields
    const description = document.getElementById('description').value; // Expense description
    const category = document.getElementById('category').value; // Selected category
    const amount = document.getElementById('amount').value; // Expense amount

    // Validate the input: check if all fields are filled and amount is a valid number
    if (description.trim() !== '' && category.trim() !== '' && amount.trim() !== '' && !isNaN(amount)) {
        // Create a new row (`tr`) element for the table
        const newRow = document.createElement('tr');

        // Set the inner HTML of the new row with the expense details
        newRow.innerHTML = `
        <td>${description}</td>
        <td>${category}</td>
        <td>${amount}</td>`;

        // Append the newly created row to the expense list table
        expenseList.appendChild(newRow);

        // Clear the input fields after successfully adding the expense
        document.getElementById('description').value = '';
        document.getElementById('category').value = '';
        document.getElementById('amount').value = '';
    } else {
        // If validation fails, alert the user to fill in all fields correctly
        alert('Please fill out all fields with valid data');
    }
});

