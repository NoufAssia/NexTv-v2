# NEXTV V2 📺

## The Next Wave of Streaming

## 👋 About the Project

I developed NEXTV V2 as an evolution of my initial NEXTV application, built as part of the Smart Stream project, which focuses on creating a web-based IPTV and live TV platform.

While the first version focused on browsing television channels, searching, filtering by category, and previewing selected channels, V2 introduces a new level of interactivity by allowing users to manage their own channel preferences.

Users can now add channels to their favorites, hide channels using a blacklist, restore hidden channels, permanently delete unwanted channels, and add new channels.

A key objective of this version was to make user choices persistent by connecting the application to a MockAPI backend and implementing the four main HTTP methods: GET, POST, PUT, and DELETE.

Throughout this project, I focused on improving my understanding of JavaScript modules, DOM manipulation, asynchronous operations, API integration, HTTP methods, and dynamic data management.

## 💡 The Idea Behind NEXTV

The name NEXTV combines two words:

- NEXT: Represents the future, innovation, and the next generation of entertainment.
- TV: Represents television and the world of streaming.

Together, they form NEXTV – The Next Wave of Streaming.

I chose this name to reflect the vision behind the project: creating a modern television experience that makes discovering, accessing, and managing live TV channels simple, intuitive, and accessible.

## 🌐 Live Demo

[Explore NEXTV V2](https://nextv-v2.vercel.app/)

## 🎯 Project Context

The Smart Stream assignment required me to develop a dynamic client-side application based on a validated UX/UI design.

NEXTV V2 builds upon the first version by introducing server-side data persistence through MockAPI.

The application is divided into several functional areas:

- Channel Catalogue: Displays available channels, their numbers, logos, and categories.
- Preview Area: Displays the selected channel's cover image, information, and available program details.
- Favorites: Allows users to mark and filter their preferred channels.
- Blacklist: Provides a dedicated area to manage hidden channels, restore them, or permanently delete them.
- Channel Management: Allows users to add new channels to the catalogue.

My mission was to implement these features while ensuring that user choices remain saved on the server, even after refreshing the page.

## ✨ Features

### 1. Channel Catalogue

- Display available television channels.
- Show channel numbers, logos, and names.
- Organize channels by categories.
- Select channels directly from the sidebar.
- Highlight the currently selected channel.
- Automatically hide blacklisted channels from the main catalogue.

### 2. Search and Filtering

- Search for channels by name.
- Search for channels by channel number.
- Filter channels by category.
- Dynamically update the displayed channel list.
- Filter channels to display only favorites.
- Switch between all channels and favorite channels.

### 3. Channel Preview

- Display the selected channel's preview image.
- Show the channel name and number.
- Display current program information.
- Show program start and end times.
- Display program progress percentage.

### 4. Favorites Management

- Add channels to favorites using the star button.
- Remove channels from favorites by clicking the star again.
- Display a filled star (★) for favorite channels.
- Display an empty star (☆) for non-favorite channels.
- Filter the catalogue to display only favorite channels.
- Save favorite preferences on MockAPI.
- Keep favorite selections after refreshing the page.

### 5. Blacklist Management

- Move unwanted channels to the blacklist using the blacklist button.
- Automatically hide blacklisted channels from the main catalogue.
- Display blacklisted channels in a dedicated Blacklist section.
- Restore previously blacklisted channels.
- Permanently delete channels from the blacklist after user confirmation.
- Save blacklist changes on MockAPI.

### 6. Add New Channels

- Add new channels to the catalogue.
- Send new channel data to MockAPI using the POST method.
- Retrieve newly created channels from the server.
- Keep the channel catalogue synchronized with backend data.

### 7. API Integration and Data Persistence

- Retrieve channel data using GET.
- Create new channels using POST.
- Update favorite and blacklist properties using PUT.
- Permanently remove channels using DELETE.
- Handle asynchronous requests using async/await.
- Handle API errors using try/catch.
- Preserve user preferences on the server.

### 8. User Interface

- Responsive layout for different screen sizes.
- Interactive navigation sidebar.
- Dynamic category selection.
- Loading and error feedback.
- Current date and time display.
- Dynamic updates following user interactions.

## 🛠️ Technologies & Tools

- HTML5: To structure the application.
- Tailwind CSS: To style the interface and create responsive layouts.
- JavaScript (ES6+): To implement application logic and manipulate the DOM.
- JSON: To structure and organize channel data.
- Fetch API: To communicate with the external API.
- HTTP Methods (GET, POST, PUT, DELETE): To retrieve, create, update, and delete channel data.
- Async/Await: To manage asynchronous operations.
- Try/Catch: To handle errors during API requests.
- MockAPI: To simulate a backend API and persist channel data and user preferences.
- Git & GitHub: To manage and version my source code.
- Vercel: To deploy the application.
- Jira: To plan and track development tasks.

## 📁 Project Structure

I organized the application into separate folders and JavaScript modules to keep the code structured, maintainable, and easier to develop.

```
NextTV-v2/
│
├── assets/
│
├── data/
│   └── data.Json
│
├── js/
│   ├── addchannel.js
│   ├── api.js
│   ├── blacklist.js
│   ├── category.js
│   ├── channels.js
│   ├── date.js
│   ├── filterBtns.js
│   ├── main.js
│   ├── preview.js
│   ├── setting.js
│   └── updt-data.js
│
├── .gitignore
├── DOCUMENTATION.md
├── index.html
├── package-lock.json
├── package.json
└── README.md
```

Each JavaScript file is responsible for a specific part of the application, helping separate API operations, channel management, filtering, and user interactions.

## 📡 API Integration & Data Management

One of the main objectives of NEXTV V2 was to understand how a frontend application communicates with a backend service and how data can be created, updated, and deleted.

I used MockAPI as a backend service to store channel information and user preferences.

### HTTP Methods

I implemented the four main HTTP methods:

- GET: Retrieve channel data from the server. Loads channels when the application starts.
- POST: Create new resources. Adds new channels to the catalogue.
- PUT: Update existing resources. Modifies favorite and blacklist properties.
- DELETE: Remove resources permanently. Deletes unwanted channels from the blacklist.

### Data Persistence

To make user choices persistent, I introduced two additional properties to the channel objects:

- isFavorite: Indicates whether a channel has been added to favorites.
- isBlacklisted: Indicates whether a channel has been moved to the blacklist.

These properties are stored on MockAPI, allowing the application to retrieve the latest channel information whenever the page loads.

As a result, changes are not limited to the current browser session. They remain available after refreshing the application.

### Asynchronous Operations and Error Handling

I used the Fetch API with async/await to communicate with MockAPI.

I also implemented try/catch blocks to handle possible request failures and improve the application's reliability.

## 🌿 Git & GitHub Workflow

I used Git and GitHub to manage my development workflow, organize features, track changes, and maintain a stable version of the application.

For NEXTV V2, I adopted a feature-branch workflow, allowing me to develop different functionalities independently before integrating them into the development branch through GitHub Pull Requests.

### Branch Strategy

I worked with three types of branches:

- `main`: Contains the stable and completed version of the application.
- `develop`: Used to integrate and test completed features before merging them into `main`.
- feature branches: Dedicated branches for developing specific functionalities independently.

Some of the feature branches I created include:

- `feature/api` – API integration and data management.
- `feature/blacklist` – Blacklist management and channel restoration.
- `feature/favorite` – Favorites functionality.
- `feature/filters` – Channel filtering functionality.

### Development Workflow

My workflow was:

1. Create a new feature branch from the latest `develop` branch.
2. Implement the corresponding functionality independently.
3. Commit and push changes to the remote feature branch.
4. Open a Pull Request (PR) on GitHub to merge the feature branch into `develop`.
5. Review and merge the Pull Request.
6. Merge the updated `develop` branch into `main` when the integration was ready.
7. Before starting another feature, synchronize my local `develop` branch with the latest remote changes using `git pull`.
8. Create the next feature branch from the updated `develop` branch and repeat the process.

This workflow helped me develop features independently, integrate changes progressively, reduce conflicts between different functionalities, and keep the `main` branch stable.

## 📋 Project Management – Scrum & Jira

I organized my work using the Scrum methodology and used Jira to plan, organize, and track project tasks.

Jira helped me break down the project requirements into smaller tasks and follow my development progress throughout the sprint.

- Methodology: Scrum
- Project management tool: Jira
- Planning and task tracking: Jira Backlog

[View NEXTV Project Planning on Jira](https://assiahamdan.atlassian.net/jira/software/projects/NEXTV/boards/35?filter=&groupBy=none)

## 🚀 Installation & Setup

To run the project locally:

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project directory

```bash
cd NextTV-v2
```

3. Install dependencies

```bash
npm install
```

4. Start a local development server

Open the project using the VS Code Live Server extension or another local development server.

## 📚 What I Learned

Developing NEXTV V2 allowed me to go beyond displaying and filtering API data and explore how to manage persistent data through HTTP requests.

Some of the main concepts I practiced and strengthened were:

- Organizing a JavaScript application using ES6 modules.
- Fetching and consuming data from external APIs.
- Understanding the differences between GET, POST, PUT, and DELETE.
- Managing asynchronous operations using async/await.
- Handling errors using try/catch.
- Understanding how frontend applications communicate with backend services.
- Updating existing resources through PUT requests.
- Creating new resources through POST requests.
- Deleting resources through DELETE requests.
- Managing persistent data using MockAPI.
- Manipulating the DOM dynamically.
- Using array methods such as filter and find to manage channel data.
- Implementing event delegation and handling user interactions.
- Synchronizing the interface with updated API data.
- Building responsive interfaces using Tailwind CSS.
- Managing project versions using Git and GitHub.
- Organizing tasks and tracking progress using Jira and Scrum.

## 👩‍💻 Final Thoughts

NEXTV V2 represents an important evolution of my initial NEXTV application.

While the first version introduced me to building an interactive interface and consuming external API data, the second version challenged me to manage data beyond simply displaying it.

Implementing favorites, blacklist management, channel restoration, deletion, and channel creation helped me explore the complete CRUD cycle and better understand how frontend applications interact with backend services.

Throughout this project, I worked on asynchronous operations, data persistence, application structure, and synchronizing user interactions with server-side data.

This version represents another step in my journey as a developer, helping me strengthen my JavaScript skills and gain practical experience in building more dynamic and data-driven web applications.

- Project: NEXTV V2 – The Next Wave of Streaming
- Based on: Smart Stream IPTV Project
- Previous Version: NEXTV V1
- Deployment: Vercel
- Backend: MockAPI
- Project Management: Jira & Scrum
- Built with: HTML, Tailwind CSS & Vanilla JavaScript
