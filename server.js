const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const invoiceRoutes = require('./routes/invoices');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allow frontend to communicate
app.use(bodyParser.json()); // Parse JSON body

// Routes
app.use('/invoices', invoiceRoutes);

// Root Endpoint
app.get('/', (req, res) => {
    res.send('Invoice API is running with SQLite');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});