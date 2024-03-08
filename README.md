
# AlmaBetter Frontend Capstone Project

## Resume-Builder

Introducing Resume Builder, the ultimate React application that empowers you to craft eye-catching resumes like never before. You can easily customise your resume with Resume Builder's user-friendly interface to highlight your unique skills and professional experience.

Stand out from the crowd and make a lasting impression with Resume Builder, the perfect tool to land your dream job. Start building your future today!

**Just select template - Fill in the details and voila! Your resume is ready to preview and download.**

The Resume Builder application consists of four main pages:

- **Home Page:** Displays available resume templates and allows users to select one to start creating their resume.
- **Details Filling Page:** Enables users to fill in their personal information, work experience, education details, and skills.
- **Preview Page:** Allows users to preview their resume before finalizing it.
- **About Us Page:** Provides information about the application and its developers.


## Features

- Choose from pre-defined resume templates.
- Fill in personal information, work experience, education details, and skills.
- Preview the resume before finalizing.
- Download the resume as a PDF.
- Responsive and intuitive user interface.

## Technologies Used

- **Frontend Development:**
  - React.js
  - Material UI
  - React Router
- **State Management:**
  - Redux
- **Form Validation:**
  - React Hook Form
- **PDF Generation:**
  - jspdf



## Application Folder Structure

```
├── public/
│	├──index.html
│    
├──src/
│	├──App.js
│	├──index.css
│	├──index.js
│	├──store.js
│	├──Components/
│		├──Templates/
│			├──Template1.js
│			├──Template2.js
│			├──Template3.js
│			├──Template4.js
│   	├──BackNextButton.js
│		├──CheckSelectedId.js
│		├──DataFillingSidebar.js
│		├──Education.js
│		├──KeySkills.js
│		├──NavBar.js
│		├──PersonalInfo.js
│		├──Preview.js
│		├──Select.js
│		├──TemplateEducation.js
│		├──TemplateExperience.js
│		├──TemplateHeader.js
│		├──TemplateKeySkill.js
│		├──TemplateTitle.js
│		├──WorkExperience.js
│	├──Pages/
│		├──AboutUs.js
│		├──DataFilling.js
│		├──Home.js
│		├──Index.js
│		├──MyResume.js
│	├──Redux/
│		├──Actions/
│			├──actions.js
│		├──Reducers/
│			├──combinedtReducer.js
│			├──reducers.js
│	├──Styles/
│		├──Components/
│			├──BackNextButton.css
│			├──DataFillingSidebar.css
│			├──Education.css
│			├──Input.css
│			├──KeySkills.css
│			├──Navbar.css
│			├──PersonalInfo.css
│			├──srcPreview.css
│			├──Select.css
│			├──Template.css
│			├──WorkExperience.css
│		├──Pages/
│			├──DataFilling.css
│			├──Home.css
│			├──MyResume.css
│	├──Utils/
│		├──Data/
│			├──data.js
│			├──Templates.js
│		├──Images/
│			├──template-1.JPG
│			├──template-2.JPG
│			├──template-3.JPG
│			├──template-4.JPG
│		├──InputCheck.js
|
├──.gitignore
├──package-lock.json
├──package.json
└──README.md
```
## Installation

To install and run the Resume Builder application locally, follow these steps:

```
1. Clone the repository:

   git clone https://github.com/your-username/resume-builder.git

2. Navigate to the project directory:

    cd resume-builder

3. Install dependencies:

    npm install

4. Start the development server:

    npm start

```


## Links for the project

Deployment Link : https://resume-builder-app001.netlify.app/



