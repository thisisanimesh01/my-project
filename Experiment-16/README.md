# 🏦 Bank Transfer System

A **secure money transfer API** built using **Node.js, Express, MongoDB, and Mongoose**, demonstrating reliable fund transfers **without DB transactions** using **sequential updates and rollback logic**.

---

## 🚀 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **ORM:** Mongoose  
- **Testing:** Mocha / Chai or Postman  

---

## 🎯 Purpose

To implement a **secure banking API** that handles:
- Account creation and management  
- Money transfers with validation  
- Balance checking  
- Automatic rollback on failure  
- Comprehensive error handling  

---

## ⚙️ Features

✅ Account Management  
✅ Secure Money Transfers  
✅ Balance Checking  
✅ Rollback Mechanism  
✅ Input Validation & Error Handling  
✅ Prevents Self-Transfers and Negative Amounts  

---

## 🧩 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| **POST** | `/api/users` | Create a new user account |
| **GET** | `/api/users` | Get a list of all user accounts |
| **POST** | `/api/transfer` | Transfer money between accounts |
| **GET** | `/api/balance/:id` | Get balance of a specific account |

---

## 💡 Implementation Details

- **Sequential DB Updates:** Debit → Credit  
- **Auto-Rollback:** Reverts transaction on failure  
- **Input Validation:** Ensures clean, safe inputs  
- **Prevention:** Blocks self-transfers & negative amounts  
- **Error Handling:** Returns detailed error messages  

---

## 🧪 Testing

- Includes **automated test suite** (`test-api.js`)  
- Tests **success/failure** transaction cases  
- Handles **invalid inputs** and edge cases  
- Includes **Postman collection** for manual API testing  

---

## 🔐 Security Measures

- Account verification before transfer  
- Sufficient balance validation  
- Input sanitization to prevent injection  
- Maintains strict data consistency  

---

## 📁 OUTPUTS
![Demo Screenshot](https://github.com/thisisanimesh01/my-project/blob/main/Experiment-16/output.png)
