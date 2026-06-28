# 💰 Money Manager

A modern **Money Manager Dashboard** built using **React, Node.js, and Express** that automatically parses transaction messages, categorizes expenses, calculates analytics, and highlights cashback rewards.

---

## 📌 Features

### 📄 Transaction Timeline
- Displays all transactions in chronological order.
- Shows transaction description, amount, and category.
- Income and expenses are color-coded.
- Cashback transactions display an **Expected Savings** section.

---

### 🤖 Automatic Transaction Categorization

The backend automatically categorizes transactions using keyword matching.

| Merchant | Category |
|----------|----------|
| Zomato | Food |
| Swiggy | Food |
| Uber | Travel |
| Ola | Travel |
| Salary | Salary |
| Amazon | Shopping |
| Netflix | Entertainment |

Unknown transactions are categorized as **Miscellaneous**.

---

### 📊 Dashboard Analytics

The application calculates:

- Total Income
- Total Expense
- Category-wise Spending
- Progress Bars

---

### 💚 Cashback Detection

If a transaction contains keywords like

- Cashback
- Reward
- Amazon Pay
- Paytm
- SuperCoins
- Flipkart

the application automatically calculates

```
Expected Savings = 5% of Transaction Amount
```

and displays it below the transaction.

---

## 🛠 Tech Stack

### Frontend

- React
- Vite
- Axios
- CSS3

### Backend

- Node.js
- Express.js

---

## 📂 Project Structure

```
money-manager/

├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── data/
│   ├── app.js
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/money-manager.git
```

```bash
cd money-manager
```

---

### Backend Setup

```bash
cd server
```

```bash
npm install
```

```bash
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

### Frontend Setup

Open another terminal

```bash
cd client
```

```bash
npm install
```

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## API Endpoints

### Get Transactions

```
GET /api/transactions
```

---

### Get Analytics

```
GET /api/analytics
```

---

### Add Transaction

```
POST /api/transactions
```

Example Body

```json
{
  "message": "Paid Rs.450 to Zomato",
  "amount": -450
}
```

---

## Sample Transactions

```
Paid Rs.250 to Zomato

Paid Rs.799 Uber Cashback Offer

Received Rs.35000 Salary

Paid Rs.420 Swiggy

Received Rs.1200 from Private Company Ltd
```

---

## Future Enhancements

- Search Transactions
- Filters
- Pie Chart
- Dark Mode
- MongoDB Integration
- Authentication
- Monthly Reports
- Export to CSV

---

## Screenshots

Add screenshots here after running the application.

```
Dashboard Screenshot
```

---

## Author

**Anshika Raj**

Built as a Full Stack React + Express project demonstrating

- REST APIs
- React Context API
- State Management
- Keyword Parsing
- Analytics
- Responsive UI
