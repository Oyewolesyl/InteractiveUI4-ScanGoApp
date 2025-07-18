# ScanGo App

This project is a React-based rewards app that allows users to:

- Generate QR codes from any text or URL
- Scan QR codes using the device camera
- View animated stats of user activity
- Print QR codes
- See helpful tips
- Navigate through a responsive, clean interface

## How to Run Locally

1. Make sure Node.js and npm are installed on your system.
2. Clone this repository:

   git clone https://github.com/Oyewolesyl/InteractiveUI4-ScanGoApp.git

3. Navigate into the project folder:

   cd InteractiveUI4-ScanGoApp

4. Install the dependencies:

   npm install

5. Start the development server:

   npm start

The app should open at http://localhost:5173

## Live Version

[Insert your live site URL here]

## Features

- QR code generation with text or links
- QR code scanning using the camera
- Printable QR codes (opens in new window and triggers print)
- Animated statistics (e.g. items scanned, money saved)
- Popup tips for user engagement
- Responsive layout for all devices

## Technologies Used

- React
- JavaScript
- HTML/CSS
- react-qr-code
- react-qr-reader
- react-countup

## File Structure Overview

src/
├── Home.jsx - Main QR code page
├── ScannerPage.jsx - QR scanner page
├── index.css - Styling
└── main.jsx - App entry point

## Deployment

You can deploy this using Netlify, Vercel, or GitHub Pages. Make sure to build with:

   npm run build

Then follow your chosen platform's deployment instructions.

## Notes

- The QR print function isolates just the QR component before sending it to the print dialog.
- Camera permissions must be accepted to scan QR codes. If it's blank, check browser settings.
- Stats use the react-countup library for animation.
- Styling and layout are fully responsive with Flexbox.

(react/vite default readme below)

React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
