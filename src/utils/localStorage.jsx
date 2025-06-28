

const employees = [
  {
    "employee_id": "EMP001",
    "firstname": "Amit",
    "email": "e@e.com",
    "password": "123",
    "task_count": {
      "active": 1,
      "new_task": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Submit report",
        "description": "Submit the monthly performance report to the manager.",
        "date": "2025-06-28",
        "category": "Reporting"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Update CRM",
        "description": "Update the CRM with recent client interactions.",
        "date": "2025-06-20",
        "category": "CRM"
      },
      {
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true,
        "title": "Call vendor",
        "description": "Call the vendor to confirm delivery details.",
        "date": "2025-06-18",
        "category": "Communication"
      }
    ]
  },
  {
    "employee_id": "EMP002",
    "firstname": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "task_count": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Design logo",
        "description": "Create a new logo concept for the client project.",
        "date": "2025-06-28",
        "category": "Design"
      },
      {
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false,
        "title": "Client meeting",
        "description": "Join Zoom call with client to discuss design direction.",
        "date": "2025-06-28",
        "category": "Meeting"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Deliver mockups",
        "description": "Send initial mockups for feedback.",
        "date": "2025-06-26",
        "category": "Design"
      },
      {
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true,
        "title": "Backup files",
        "description": "Backup all working files to cloud storage.",
        "date": "2025-06-25",
        "category": "IT"
      }
    ]
  },
  {
    "employee_id": "EMP003",
    "firstname": "Rajesh",
    "email": "employee3@example.com",
    "password": "123",
    "task_count": {
      "active": 1,
      "new_task": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Code review",
        "description": "Review code for frontend improvements.",
        "date": "2025-06-28",
        "category": "Development"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Fix login bug",
        "description": "Resolve issue preventing users from logging in.",
        "date": "2025-06-24",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true,
        "title": "Optimize API",
        "description": "Improve response times of API endpoints.",
        "date": "2025-06-23",
        "category": "Backend"
      }
    ]
  },
  {
    "employee_id": "EMP004",
    "firstname": "Neha",
    "email": "employee4@example.com",
    "password": "123",
    "task_count": {
      "active": 1,
      "new_task": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Conduct interview",
        "description": "Interview candidate for marketing role.",
        "date": "2025-06-28",
        "category": "HR"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Post job ad",
        "description": "Publish job description on hiring platforms.",
        "date": "2025-06-21",
        "category": "HR"
      },
      {
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true,
        "title": "Schedule training",
        "description": "Arrange onboarding training for new hires.",
        "date": "2025-06-19",
        "category": "HR"
      }
    ]
  },
  {
    "employee_id": "EMP005",
    "firstname": "Karan",
    "email": "employee5@example.com",
    "password": "123",
    "task_count": {
      "active": 1,
      "new_task": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Prepare invoice",
        "description": "Generate invoice for client billing cycle.",
        "date": "2025-06-28",
        "category": "Finance"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Reconcile accounts",
        "description": "Ensure all account balances are accurate.",
        "date": "2025-06-22",
        "category": "Finance"
      },
      {
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true,
        "title": "Submit tax forms",
        "description": "Send quarterly tax documentation to authorities.",
        "date": "2025-06-15",
        "category": "Finance"
      }
    ]
  }
];


const admin = [
  {
    "employee_id": "ADM001",
    "email": "admin@example.com",
    "password": "123"
  }
];


export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}


export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}