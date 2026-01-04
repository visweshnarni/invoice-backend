const express = require('express');
const router = express.Router();
const db = require('../db/database');

// 1. POST /invoices: Create a new invoice
router.post('/', (req, res) => {
    const { client_name, amount, due_date, status } = req.body;
    
    // Validation
    if (!client_name || !amount) {
        return res.status(400).json({ error: "Client name and amount are required" });
    }

    const sql = `INSERT INTO invoices (client_name, amount, due_date, status) VALUES (?, ?, ?, ?)`;
    const params = [client_name, amount, due_date, status || 'Pending'];

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({
            message: "Invoice created",
            invoiceId: this.lastID,
            data: req.body
        });
    });
});

// 2. GET /invoices: Fetch all invoices
router.get('/', (req, res) => {
    const sql = "SELECT * FROM invoices";
    
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({
            message: "success",
            data: rows
        });
    });
});

// 3. PUT /invoices/:id: Update an invoice
router.put('/:id', (req, res) => {
    const { client_name, amount, due_date, status } = req.body;
    const id = req.params.id;

    // We use COALESCE in SQL or logic here to keep old values if new ones aren't provided
    // For simplicity, we assume the frontend sends the full object, or we update specific fields.
    const sql = `UPDATE invoices SET 
                 client_name = ?, 
                 amount = ?, 
                 due_date = ?, 
                 status = ? 
                 WHERE id = ?`;
    
    const params = [client_name, amount, due_date, status, id];

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ message: "Invoice not found" });
        }
        res.json({
            message: "Invoice updated",
            changes: this.changes
        });
    });
});

// 4. DELETE /invoices/:id: Delete an invoice
router.delete('/:id', (req, res) => {
    const sql = "DELETE FROM invoices WHERE id = ?";
    
    db.run(sql, req.params.id, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ message: "Invoice not found" });
        }
        res.json({ message: "Invoice deleted", changes: this.changes });
    });
});

module.exports = router;