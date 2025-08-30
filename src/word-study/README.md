# Word Study Application

## Overview
The Word Study application is designed to help users learn and practice vocabulary through various features such as adding words, reviewing them, and listening to audio recordings. The application supports user authentication via Google accounts.

## Project Structure
```
word-study
├── src
│   ├── index.html          # Main HTML document
│   ├── css
│   │   └── styles.css      # Styles for the application
│   ├── js
│   │   ├── app.js          # Core functionality and interactions
│   │   └── auth.js         # Authentication logic
│   └── libs                # Third-party libraries or custom scripts
├── server
│   ├── index.js            # Entry point for the server-side application
│   ├── routes
│   │   └── auth.js         # Authentication routes
│   └── package.json        # Server-side dependencies and scripts
├── package.json            # Client-side dependencies and scripts
├── .env.example            # Template for environment variables
└── README.md               # Project documentation
```

## Features
- **Add Words**: Users can add new vocabulary words along with their meanings and example sentences.
- **Review Words**: Users can categorize words based on their familiarity (e.g., known, not familiar, unknown).
- **Practice Area**: A dedicated section for practicing vocabulary.
- **Listening Section**: Users can listen to audio recordings of words.
- **Import/Export**: Users can import and export their vocabulary lists in JSON format.
- **Google Authentication**: Users can log in using their Google accounts.

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd word-study
   ```

2. **Install Dependencies**:
   For the client-side:
   ```bash
   npm install
   ```

   For the server-side:
   ```bash
   cd server
   npm install
   ```

3. **Environment Variables**:
   Copy the `.env.example` file to `.env` and fill in the required values.

4. **Run the Application**:
   Start the server:
   ```bash
   cd server
   node index.js
   ```

   Open the `src/index.html` file in a web browser to access the application.

## Usage
- Navigate through the application using the sidebar.
- Use the "新增單字" button to add new vocabulary.
- Explore the "單字清單" to review and manage your vocabulary.
- Access the "練習區" for practice sessions.
- Use the "聽力區" to listen to audio recordings of words.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.