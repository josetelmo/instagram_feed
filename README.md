# Instagram Feed Display

This project is a simple web application that displays the most recent photos from a public Instagram account. It uses HTML, CSS, and JavaScript, and leverages the Instagram Graph API to fetch and display the photos.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Features
- Fetches and displays the most recent photos from a public Instagram account.
- Responsive layout using CSS Flexbox.
- Easy configuration with Instagram Graph API.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/instagram-feed-display.git
    cd instagram-feed-display
    ```

2. Open the project directory and install dependencies (if any).

## Usage
1. Obtain your Instagram Access Token and User ID.
2. Configure the project with your Instagram Access Token and User ID (see [Configuration](#configuration)).
3. Open `index.html` in your web browser to view the feed.

## Configuration
To configure the project, you need to replace placeholders in the `script.js` file with your Instagram Access Token and User ID.

1. Open `script.js` in a text editor.
2. Replace `YOUR_INSTAGRAM_ACCESS_TOKEN` with your actual Instagram Access Token.
3. Replace `YOUR_INSTAGRAM_USER_ID` with your actual Instagram User ID.

Example:
```javascript
const accessToken = 'YOUR_INSTAGRAM_ACCESS_TOKEN';
const userId = 'YOUR_INSTAGRAM_USER_ID';
