## My Table Component

A React component for organizing employee data in a table format.

## Installation

To install the `my-table-component`, run the following command:

npm install @pangzidao/my-table-component

## Usage

Import the `EmployeeTable` component and add it to your app:

import React from 'react';
import EmployeeTable from '@pangzidao/my-table-component';

function App() {
  return (
    <div>
      <h1>Employee Data</h1>
      <EmployeeTable />
    </div>
  );
}

export default App;

By default, the component will retrieve data from local storage. However, you can also provide data to the component by passing the `employees` prop:


<EmployeeTable employees={yourData} />

The `yourData` should be an array of objects in the following format:

[
  {
    firstName: "John",
    lastName: "Smith",
    startDate: "2015-06-01",
    department: "Marketing",
    dateOfBirth: "1985-10-12",
    street: "123 Main Street",
    city: "New York City",
    state: "New York",
    zipCode: "10001"
  },
  {
    firstName: "Emily",
    lastName: "Johnson",
    startDate: "2018-03-15",
    department: "Human Resources",
    dateOfBirth: "1990-01-22",
    street: "456 Elm Street",
    city: "Los Angeles",
    state: "California",
    zipCode: "90001"
  },
  // Add more employees as needed
]
```

## Features

- Display employee data in a table format with the following columns:
  - First Name
  - Last Name
  - Start Date
  - Department
  - Date of Birth
  - Street
  - City
  - State
  - Zip Code
- Dropdown option to select the number of employees to display.
- Search window to search for employees based on a keyword.
- Navigation menu at the bottom to navigate through different entries.
- Each column can be ordered in ascending or descending order.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
