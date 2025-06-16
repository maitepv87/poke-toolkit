# Poke Toolkit

## Description

Pokémon Toolkit is a **fast and optimized** React application that allows users to browse Pokémon data using the PokéAPI. It showcases best practices in frontend development, including Redux Toolkit for **efficient state management**, `useMemo` and `useCallback` for **performance optimization**, and a **responsive UI with reusable components**.

### **Key Features**
- **Optimized Pokémon browsing** with paginated data.
- **Interactive Pokémon cards** displaying images and names.
- **Improved modal performance**, ensuring smooth interactions.
- **Global state management** with Redux Toolkit.
- **Efficient API handling** using Axios.
- **Custom hooks** for clean and reusable data-fetching logic.

This project is part of my portfolio to **demonstrate scalable, maintainable frontend development** using modern React tools.

## Technologies Used

- **React:** Component-based user interface.
- **Vite:** Fast build tool and development server.
- **Redux Toolkit:** Simplified global state management.
- **React Redux:** Official React bindings for Redux.
- **Axios:** HTTP client for API requests.
- **PropTypes:** Runtime props validation for components.
- **CSS Modules:** Component-scoped styling.
- **React.memo:** Prevents unnecessary re-renders in list components.
- **useMemo & useCallback:** Optimizes function and list rendering for better performance.

## Getting Started

### Installation & Setup

Follow these steps to run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/maitepv87/poke-toolkit.git
   cd poke-toolkit

2. Install dependencie:

   ```bash
   npm install
   ```

3. Set up environment variables in a .env file:

   ```ini
   VITE_API_URL=https://pokeapi.co/api/v2
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

Then open http://localhost:3000 in your browser.
