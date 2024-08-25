# Frontend Technical Assessment Documentation
---

Live Link: [https://frontend-assessment-lawrence.pages.dev](https://frontend-assessment-lawrence.pages.dev)

## Introduction

This project was created by Lawrence as part of the technical assessment for the Frontend Developer role at MindArc. The project is built using Vue 3, TypeScript, and TailwindCSS, and was developed under a Node.js v20.14.0 environment. It includes solutions to two exercises: a responsive webpage and a responsive tab/accordion widget.

## Project Overview

### Technology Stack
- Vue.js 3: The JavaScript framework used for building the user interface.
- TypeScript: Used for adding static types, improving code quality, and catching potential errors at compile time.
- TailwindCSS: A utility-first CSS framework used for styling the components in a responsive and maintainable way.
- Node.js v20.14.0: The runtime environment used during development.

### Run Project
1. git clone [https://github.com/lawrence415610/frontend-assessment-lawrence.git](https://github.com/lawrence415610/frontend-assessment-lawrence.git) from the forked repo.
2. After Downloading the repo, enter the '/frontend-lawrence' directory, make sure you are using Node.js 20.14.0 (lts/iron) version. Then use the command ```npm install``` to install all the dependencies.
3. After successful dependency installation, enter ```npm run dev``` to check the website running locally by Vite.

### Project Structure
```
└── 📁src
    └── 📁components
        └── BlogCard.vue
        └── TabAccordion.vue
    └── 📁data
        └── Blogs.ts
    └── 📁interfaces
        └── IBlog.ts
        └── ITab.ts
    └── 📁router
        └── index.ts
    └── 📁views
        └── ExerciseOneView.vue
        └── ExerciseTwoView.vue
        └── HomeView.vue
    └── App.vue
    └── index.css
    └── main.ts
```

### Features

### Exercise 1
Cleared all todos in the project requirements, including: 
1. Match the website design, including layout, font styling, asset size, etc.
2. The webpage is fully responsive and tested on multiple devices, like iphone 13, iphone air, etc.
3. Designed a space theme and polished button animation for better user experience.

### Exercise 2
Cleared all todos in the project requirements, including:
1. read data.json to display on the widget.
2. display a tab view on desktop
3. display a accordion view on mobile
4. open the first tab/accordion on load
5. If the open accordion is selected, close it.
6. add simple animation for better user experience


