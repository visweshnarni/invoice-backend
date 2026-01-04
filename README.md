# Invoice Management System Backend

This is a RESTful API backend for a simple Invoice Management System. It allows users to create, view, update, and delete invoices. The system is built using **Node.js** and **Express.js**, with **SQLite3** as the embedded relational database.

## 🛠 Tech Stack
* **Runtime Environment:** Node.js
* **Framework:** Express.js (v5.x)
* **Database:** SQLite3 (Serverless, zero-configuration)
* **Middleware:** CORS, Body-Parser
* **Dev Tools:** Nodemon

## 📂 Project Structure
```text
invoice-app-backend/
├── db/
│   └── database.js      # SQLite connection & Table initialization
├── routes/
│   └── invoices.js      # API Route logic (CRUD operations)
├── server.js            # App entry point & Server configuration
├── package.json         # Dependencies & Scripts
└── invoices.db          # SQLite Database file (Auto-generated)
🚀 How to Run Locally
1. Prerequisites
Ensure you have Node.js installed on your machine.

Bash

node -v
2. Installation
Clone the repository (or download the files) and install dependencies:

Bash

npm install
3. Start the Server
You can run the server in development mode (with auto-restart):

Bash

npm run dev
The server will start at: http://localhost:5000

The database file invoices.db will be created automatically in the root folder.

✅ Features
Create Invoice: Add new invoices with client details, amount, and due date.

Read Invoices: Fetch a list of all existing invoices.

Update Invoice: Modify invoice details (e.g., change status to "Paid").

Delete Invoice: Remove an invoice from the system.

Data Persistence: All data is stored permanently in the local invoices.db file.

API DOC:
Method,Endpoint,Description,Access
POST,/invoices,Create a new invoice,Public
GET,/invoices,Retrieve all invoices,Public
PUT,/invoices/:id,Update an existing invoice by ID,Public
DELETE,/invoices/:id,Delete an invoice by ID,Public





