// index.js
// Language: JavaScript (Node.js)
// Run using: node index.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// =============================================
// 🌐 MongoDB Connection
// =============================================
mongoose
  .connect("mongodb://127.0.0.1:27017/bankdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

// =============================================
// 🧍 Account Schema & Model
// =============================================
const accountSchema = new mongoose.Schema({
  name: String,
  balance: Number,
});

const Account = mongoose.model("Account", accountSchema);

// =============================================
// 🧠 API: Create Sample Accounts
// =============================================
// For testing, use POST /create-account
app.post("/create-account", async (req, res) => {
  try {
    const { name, balance } = req.body;

    if (!name || balance == null)
      return res.status(400).json({ error: "Name and balance are required" });

    const newAcc = new Account({ name, balance });
    await newAcc.save();

    res.status(201).json({ message: "Account created successfully", account: newAcc });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// =============================================
// 💸 API: Transfer Money
// =============================================
// Endpoint: POST /transfer
// Body: { "from": "Aman", "to": "Ravi", "amount": 500 }

app.post("/transfer", async (req, res) => {
  try {
    const { from, to, amount } = req.body;

    if (!from || !to || !amount)
      return res.status(400).json({ error: "Sender, receiver, and amount are required" });

    if (amount <= 0)
      return res.status(400).json({ error: "Amount must be greater than zero" });

    // Find sender and receiver accounts
    const sender = await Account.findOne({ name: from });
    const receiver = await Account.findOne({ name: to });

    // Validate accounts
    if (!sender) return res.status(404).json({ error: "Sender account not found" });
    if (!receiver) return res.status(404).json({ error: "Receiver account not found" });

    // Check balance
    if (sender.balance < amount)
      return res.status(400).json({ error: "Insufficient balance in sender account" });

    // Sequentially update balances (no transactions)
    sender.balance -= amount;
    receiver.balance += amount;

    // Save updates
    await sender.save();
    await receiver.save();

    res.json({
      message: `✅ ₹${amount} transferred from ${from} to ${to}`,
      sender_new_balance: sender.balance,
      receiver_new_balance: receiver.balance,
    });
  } catch (err) {
    console.error("Transfer Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// =============================================
// 📜 API: View All Accounts
// =============================================
app.get("/accounts", async (req, res) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (err) {
    res.status(500).json({
