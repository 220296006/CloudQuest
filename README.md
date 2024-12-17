# Cloud Explorer: A React Native Cloud Learning Application

![Alt](assets/CloudQuest.png)

## Overview

Cloud Explorer is a mobile application built with React Native designed to provide an interactive and fun way to learn about cloud computing concepts. This application is built with a component-based architecture, mirroring Angular's modularity, making it easy to understand and extend.

## Target Audience

This application is for:

- Individuals new to cloud computing.
- Students studying cloud technologies.
- Developers looking to reinforce their understanding of cloud concepts.
- Anyone curious about how the cloud works in a practical context.

## Core Features

- **Home/Landing Page:** An engaging starting point with introductory information and navigation options.
- **Cloud Concept Modules:** Separate modules for topics such as:
  - Cloud Service Models (IaaS, PaaS, SaaS)
  - Cloud Deployment Models (Public, Private, Hybrid)
  - Core Cloud Services (Compute, Storage, Database)
  - Cloud Security
- **Interactive Components:** Use of quizzes, diagrams, and examples to illustrate concepts.
- **Cross-Platform Support:** Built using React Native, ensuring the application works seamlessly on both iOS and Android devices.

## Technical Architecture

- **React Native:** The core framework for building cross-platform mobile applications.
- **Component-Based Architecture:** The application is broken down into reusable UI components.
- **Navigation:** React Navigation or a similar library for handling app navigation.
- **Styling:** Using React Native's built-in styling capabilities or styled-components/tailwind.
- **State Management:** Basic React state management for simpler scenarios, using context API if necessary for more complex cases.
- **UI Library:** We will utilize react-native-paper for UI elements

## Getting Started

### Prerequisites

Before starting make sure you have:

- Node.js (>=16)
- npm or yarn
- React Native CLI
- Android Studio or Xcode for mobile development

### Installation

1. **Create a new React Native project**

    ```bash
     npx react-native init CloudQuest
    ```

2. **Navigate to the project**

   ```bash
     cd CloudQuest
    ```

3. **Install dependencies:**

    ```bash
     npm install @react-navigation/native @react-navigation/stack @react-native-async-storage/async-storage react-native-safe-area-context react-native-screens react-native-paper styled-components @reduxjs/toolkit react-redux jest @testing-library/react-native nativewind

    npm install -D tailwindcss
    ```

- Optional Backend Dependencies

    ```bash
     npm install firebase @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/firestore
    npm install aws-amplify aws-amplify-react-native
    ```

- **Configuration for tailwind**

   If you have selected nativewind use these steps below

  1. Add `nativewind/babel` to your `babel.config.js`:

```javascript
module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: ['nativewind/babel'],
};
```