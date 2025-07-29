# 🚀 BFHL - Full Stack Question Paper API

---

## 🎯 Objective

Build and host a **REST API** (POST method) that takes an array as input and returns:

1. ✅ Status of the operation  
2. 👤 User ID in the format: `full_name_ddmmyyyy` (all lowercase)  
3. 📧 Email ID  
4. 🎓 College Roll Number  
5. 🔢 Array of **even numbers** (as strings)  
6. 🔢 Array of **odd numbers** (as strings)  
7. 🔤 Array of **alphabets** converted to uppercase  
8. ❗ Array of **special characters**  
9. ➕ Sum of all numbers (as a string)  
10. 🔄 Concatenation of all alphabetical characters reversed with alternating caps  

---

## 💻 Tech Stack

- Node.js ⚙️  
- Express.js 🚂  
- Hosted on Render 

---

## 🌐 API Endpoint

- **Method:** POST  
- **Route:** [`/bfhl`](https://bfhl-1-hgas.onrender.com/bfhl)  

**Request**

```json
{
  "data": ["a","1","334","4","R","$"]
}
