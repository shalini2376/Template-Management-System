📧 Email API Integration & Template Management System

### 📌 Overview

This project is a Full Stack Email Template Management System built as part of a technical assignment.
It allows users to create and manage email templates, store and group contacts, and send bulk personalized emails using a third-party email service (SendGrid).

The application demonstrates backend API integration, database management, and basic frontend functionality.

### 🚀 Features (Mapped to Assignment Requirements)

1️⃣ Email API Integration

- Integrated SendGrid Email API for sending real emails
- Secure API key handling using environment variables
- Supports transactional and bulk email sending

2️⃣ Template Management

- Create email templates with subject and body
- Edit existing templates from the UI
- Supports dynamic placeholders (e.g. {{name}}) for personalization 

3️⃣ Template Storage

- Templates are stored persistently in MongoDB
- Retrieved dynamically when sending emails 

4️⃣ Contact Management

- Add and manage contacts
- Assign contacts to groups (e.g. Candidates, HR)
- Contacts are stored in MongoDB and fetched by group 

5️⃣ Bulk Email Sending

- Select an email template
- Select a contact group
- Send personalized emails to multiple contacts with one action 

### 🛠 Tech Stack

Frontend

- React
- Axios
- Basic CSS

Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- SendGrid API 

### 🧠 Application Flow

1. User creates or edits email templates

2. User adds contacts and assigns them to groups

3. User selects a template and a group

4. Backend fetches template and contacts from MongoDB

5. Email body is personalized using placeholders

6. Emails are sent via SendGrid API 

### 📂 Project Structure 

```bash 
email-template-system/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── app.js
│   │   └── server.js
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── api/
    │   ├── pages/
    │   ├── App.js
    │   └── index.js

```
### ⚙️ Setup Instructions

👉 Prerequisites

- Node.js installed

- MongoDB running locally or MongoDB Atlas account

- SendGrid account with verified sender email 

👉 Backend Setup

```bash 
cd backend
npm install

```

Create .env file:
```bash
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/email_template_system
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=your_verified_email
```

Start backend server:
```bash 
node src/server.js
``` 

👉 Frontend Setup
```bash 
cd frontend
npm install
npm start
```

Frontend runs on:
```bash 
http://localhost:3000
```
Backend runs on:
```bash 
http://localhost:5000
``` 
### 🔌 API Endpoints 

Templates

- POST /api/templates – Create template
- GET /api/templates – Fetch all templates
- PUT /api/templates/:id – Update template

Contacts

- POST /api/contacts – Add contact
- GET /api/contacts – Fetch all contacts
- GET /api/contacts/group/:group – Fetch contacts by group 

Emails

- POST /api/email/test – Send test email
- POST /api/email/send-bulk – Send bulk emails using template and group

### 🔮 Future Enhancements

- Email delivery status tracking using SendGrid webhooks
- Delete template/contact functionality
- Rich text editor for templates
- Authentication and user roles 

### ✅ Conclusion

This project demonstrates:

- Clean backend architecture
- Third-party API integration
- Database-driven template and contact management
- End-to-end full stack development