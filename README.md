# SDLC Student Registration & Enquiry Form

## Overview
This project is a web-based **Student Registration and Enquiry Management System**. It allows administrators to register students, record enquiry details, and view or filter the submitted information easily. It includes a responsive UI with a top navigation bar, side menu, and a table with dynamic filtering capabilities.

---

## Features

### Student Registration
- Collects student information including:
  - Name, Email, Register ID
  - Course, Degree, Educational Qualification
  - Placement Status, College Name
  - Payment details (Payment Mode, Type, Amount, Discounts)
- User-friendly form layout with **Bootstrap styling**.

### Enquiry View List
- Displays registered/enquiry data in a table.
- Supports **dynamic filtering**:
  - Text filters for all text columns.
  - Date filters for date columns.
  - Special case-insensitive filtering for gender.
- Clear all filters with a single button.

### Responsive Layout
- Top navigation bar for main links.
- Side menu with toggle for additional options.
- Mobile-friendly layout.

### Technologies Used
- **HTML5** – Structure and form layout.
- **CSS3** – Styling and responsive design.
- **JavaScript** – Menu toggle, dynamic table filtering.
- **Bootstrap 5** – Form, table, and layout styling.

---

## Folder Structure

/project-root
│
├── index.html # Login page
├── studentReg.html # Student Registration form
├── Enquiry.html # Enquiry form
├── Enquiryviewlist.html # View list table page
├── style.css # CSS file
├── msi.js # JavaScript file for menu & filtering
├── boxicons.min.css # Icons
├── Assets/
│ └── sdlc_logo.png # Logo image
└── README.md # Project documentation




---

## Usage

1. Open `studentReg.html` in a browser to access the student registration form.
2. Fill out the form fields and click **Register**.
3. Navigate to `Enquiryviewlist.html` to view registered students/enquiries.
4. Click table headers to show filters:
   - Enter text for text-based filters.
   - Select dates for date-based columns.
   - Use "Clear Filters" button to reset all filters.

---

## Future Enhancements
- Add **form validation** to ensure all mandatory fields are filled.
- Implement **backend integration** using Java Spring Boot to store student/enquiry data in a database.
- Add **search and sort functionalities** for better table management.
- Implement **role-based access control** for admin and user.

---

## Author
**Logesh** – [logu326071@gmail.com / 7358967700]
