# EuroTravel

EuroTravel is a company offering bus tours across European countries. The platform allows users to learn about tours, book trips, leave reviews, and much more. All routes are presented with detailed descriptions, including travel days, countries, and places to be visited. Google Maps integration helps to track the entire travel route.

## Features

 **Homepage:**
   - Information about the company and available tours.
   - Links to various European tours.

**Tour Country:**
   - Detailed descriptions of tours to different European countries (e.g., Italy).
   - Duration of the tour, list of countries included in the route (e.g., Poland, Austria, Italy, Czech Republic).
   - A detailed day-by-day itinerary (where and how we visit various sites).

**User Account:**
   - Users can create an account and manage their profile.
   - View booking history and reviews left.
  
**Tour Booking:**
   - Ability to book a tour by selecting the date and number of people.
   - Display of the price per person.
   - Integration with **Google Maps** to display the travel route with all points.

**Shopping Cart:**
   - Adding tickets by country to the cart.
   - Ability to continue the purchase process and receive a confirmation message that someone will contact you.
  
**Reviews:**
   - Users can leave reviews about the tours.
   - Ability to edit and delete their own reviews.

**Multilingual Support:**
   - Support for English, Russian, and Polish languages using **i18next**.

## Technologies Used

- **Frontend:**
  - **React** - a library for building user interfaces.
  - **TypeScript** - strict typing for better code quality and control.
  - **JavaScript** - programming language for client-side interactions.
  - **Redux** - state management.
  - **SCSS & Modules** - styling using SCSS and CSS modules.
  -  **i18next** - for multilingual support.
 

- **Backend:**
  - **Node.js** - server-side platform for handling requests and app logic.
  - **Express** - framework for building the REST API.

## Installation
1. Clone the repository:
   ```bash
     git clone https://github.com/your-username/eurotravel.git
    ```
  
 **Frontend:**
   - Navigate to the frontend directory.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the application:
     ```bash
     npm run dev
     ```
      - Open the browser and go to: [http://localhost:5173](http://localhost:5173).

**Backend:**
   - Navigate to the server directory.
     ```bash
     cd simple_api
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
       ```bash
     npm install --save-dev supervisor
     ```
   - Run the server:
     ```bash
     npm start
     ```
    
   - The server will be available at: [http://localhost:3001](http://localhost:3001).
