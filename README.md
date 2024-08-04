# Manage Landing Page - Frontend Mentor Challenge
![alt text](public/design/desktop-preview.jpg)
## Overview

This repository contains my solution to the [Manage Landing Page Challenge](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5) from Frontend Mentor. The challenge tests responsive design skills and requires implementing various interactive elements and animations.

## Live Demo

You can view the live site [here](https://victorkevz.github.io/manage-homepage/).

## Features

### User Requirements
- **Responsive Layout:** The layout adapts to different screen sizes for optimal viewing.
- **Testimonial Slider:** All testimonials are displayed in a horizontal slider.
- **Newsletter Sign-Up Validation:** Users receive error messages if the input field is empty or if the email address is not formatted correctly.
- **Interactive Elements:** Hover and focus states are implemented for all interactive elements.

### Additional Features
- **Scale Transformation on Hover:** Interactive elements scale up slightly when hovered over.
- **Entry Animation:** Elements animate on entry using Framer Motion.
- **In-View Animation:** Elements animate while in view using Framer Motion.
- **Modal Pop-Up:** A modal pop-up provides feedback on email registration.

## Technologies Used

- **HTML5**
- **CSS**
- **React.js**
- **Vite**
- **Framer Motion**

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VictorKevz/manage-homepage.git
   cd manage-homepage
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the application:**
   Open your browser and navigate to `http://localhost:3000`.

## File Structure

- **src/**
  - **assets/**: Images and other static assets.
  - **components/**: Reusable React components.
  - **css/**: CSS stylesheets.
  - **pages/**: Page components.
  - **App.jsx**: Main application component.
  - **index.js**: Entry point of the application.

## Key Components

### Testimonial Slider

Implemented using Swiper.js to display testimonials in a horizontal slider. The slider adjusts the number of visible slides based on the viewport width.

### Newsletter Sign-Up Form

The form includes validation to ensure that the input field is not empty and that the email address is correctly formatted. Error messages are displayed when validation fails.

### Animations

Using Framer Motion for:
- Entry animations: Elements animate when they first appear.
- In-view animations: Elements animate when they come into view.

### Modal Pop-Up

A modal provides feedback on successful email registration, enhancing user experience.

## Contact

If you have any questions or suggestions, feel free to reach out via [GitHub Issues](https://github.com/VictorKevz/manage-homepage/issues).

---

This README provides an overview of the project, detailing its features, technologies used, setup instructions, and key components. Enjoy exploring the Manage Landing Page!