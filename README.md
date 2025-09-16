# JNTUH Global Alumni Meet 2025

This project is a fast, modern, and responsive website for the JNTUH Global Alumni Meet 2025. It is built using only **pure HTML, CSS, and JavaScript**, without any external frameworks like Bootstrap or React. The design is a direct recreation of the provided event flyers, featuring a deep teal/blue background with gold accents.

## Features

  * **Responsive Layout:** The website's layout is built with native CSS Grid and Flexbox, ensuring it adapts perfectly to all screen sizes, from mobile phones to large desktop monitors.
  * **Minimalist Codebase:** The project has a very small footprint, as it doesn't rely on heavy external libraries. This results in incredibly fast loading times and efficient performance.
  * **Dynamic Visitor Counter:** A client-side JavaScript function tracks and displays the number of visitors using the browser's local storage. This counter updates dynamically as users visit the page.
  * **Interactive Accordion:** The Alumni Contribution Bands section is an interactive accordion, built with a few lines of JavaScript, that allows users to expand and collapse content for a clean, organized view.
  * **Thematic Design:** The color scheme and typography are carefully extracted and implemented from the original flyers, providing a consistent and professional brand identity.

## Technologies Used

  * **HTML5:** For structuring the website's content.
  * **CSS3:** For all the styling and layout, including a responsive grid system and custom animations.
  * **JavaScript (ES6+):** For handling dynamic elements like the visitor counter and accordion functionality.
  * **Bootstrap Icons:** A lightweight and convenient library used to add icons to lists and links.

## Project Structure

The project is organized into three simple files, making it easy to navigate and understand.

```
.
├── index.html          # The main HTML file containing the website's structure and content.
├── style.css           # The stylesheet that handles all the website's design and responsiveness.
└── script.js           # The JavaScript file for dynamic functionality.
```

## Setup & Local Development

Getting the website up and running is very straightforward.

### 1\. Clone the Repository

First, clone the project to your local machine.

```bash
git clone https://github.com/your-username/your-repository-name.git
```

### 2\. Open the File

Simply open the `index.html` file in your web browser. You do not need a local server to run this project.

### 3\. Replace Placeholders

Remember to replace the placeholder images (`https://via.placeholder.com/...`) with your actual image files.

## Important Notes on the Visitor Counter

The visitor counter is a client-side implementation using `localStorage`. This means the count is unique to each user's browser and will reset if the browser's cache is cleared. For a persistent, live visitor count across all users, you would need to implement a server-side solution.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).