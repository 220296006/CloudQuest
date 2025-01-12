
# Data Modeling

* @author Thabiso Matsaba
* @email <thabisomatsaba96@gmail.com>
* @create date 10-01-2025 03:03:52
* @modify date 10-01-2025 03:03:52
* @desc Data Modeling


## Step 1: Set Up Firebase in Your Project

First, make sure you have Firebase set up in your React Native project. If you haven't done this yet, follow these steps:

1. **Install Firebase and Firestore dependencies**:

   ```bash
   npm install @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/firestore
   ```

2. **Configure Firebase**:
   * Follow the React Native Firebase setup guide to configure Firebase in your project.
   * Add the `google-services.json` file to your `android/app` directory.
   * Add the `GoogleService-Info.plist` file to your `ios` directory.

### Step 2: Create Data Models

We'll create separate folders and files for the data models. Here's the structure we'll follow:

```bash
src/
  models/
    User.ts
    Module.ts
    Quiz.ts
    Progress.ts
  services/
    firebase.ts
```

### Step 3: Define Data Models

#### User Model (`src/models/User.ts`)

```typescript
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  profileImage: string; // URL
    progress: {
      modulesCompleted: Array<{ moduleId: string; progress: number }>;
      overallPercentage: number;
    };
    notifications: boolean;
}
```

#### Module Model (`src/models/Module.ts`)

```typescript
export interface Module {
  moduleId: string;
    title: string;
    description: string;
    topics: Array<{
      topicId: string;
      title: string;
      content: string; // URL to rich content
      duration: number; // minutes
    }>;
}
```

#### Quiz Model (`src/models/Quiz.ts`)

```typescript
export interface Quiz {
    quizId: string;
    moduleId: string;
    title: string;
    questions: Array<{
      questionId: string;
      text: string;
      options: string[];
      correctAnswer: string;
    }>;
  }
```

### Exams ('src/models/Exam.ts')

* **Collection**: `exams`
* **Interface**:

  ```typescript
  export interface Exam {
    examId: string;
    moduleId: string;
    title: string;
    questions: Array<{
      questionId: string;
      text: string;
      options: string[];
      correctAnswer: string;
    }>;
  }
  ```

### Progress Model (`src/models/Progress.ts`)

```typescript
export interface Progress {
  id: string;
  userId: string;
  moduleId: string;
  topicId: string;
  completed: boolean;
  score: number;
  completedAt: Date;
}
```

### Notifications

Manages system and user-triggered notifications.

* **Collection**: `notifications`
* **Interface**:

  ```typescript
  interface Notification {
    notificationId: string;
    userId: string;
    message: string;
    read: boolean;
    timestamp: Date;
  }
  ```

### Step 4: Set Up Firebase Services

Create a `firebase.ts` file to handle Firebase initialization and provide Firestore and Authentication services.

#### Firebase Service (`src/services/firebase.ts`)

```typescript
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp({
    // Your Firebase configuration
  });
}

export { firebase, auth, firestore };
```

### Step 5: Implement Firestore Operations

You can now implement Firestore operations using the defined models and Firebase services.

#### Example: Adding a User

```typescript
import { firestore } from '../services/firebase';
import { User } from '../models/User';

export const addUser = async (user: User) => {
  try {
    await firestore().collection('users').doc(user.id).set(user);
    console.log('User added successfully');
  } catch (error) {
    console.error('Error adding user: ', error);
  }
};
```

#### Example: Fetching Modules

```typescript
import { firestore } from '../services/firebase';
import { Module } from '../models/Module';

export const fetchModules = async (): Promise<Module[]> => {
  try {
    const modulesSnapshot = await firestore().collection('modules').get();
    const modules = modulesSnapshot.docs.map(doc => doc.data() as Module);
    return modules;
  } catch (error) {
    console.error('Error fetching modules: ', error);
    return [];
  }
};
```

### Step 6: Implement Firebase Authentication

You can implement Firebase Authentication using the `auth` service.

#### Example: User Registration

```typescript
import { auth } from '../services/firebase';
import { User } from '../models/User';
import { addUser } from './userService';

export const registerUser = async (name: string, email: string, password: string) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const user: User = {
      id: userCredential.user.uid,
      name,
      email,
      createdAt: new Date(),
    };
    await addUser(user);
    console.log('User registered successfully');
  } catch (error) {
    console.error('Error registering user: ', error);
  }
};
```

#### Example: User Login

```typescript
import { auth } from '../services/firebase';

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    console.log('User logged in successfully', userCredential.user);
  } catch (error) {
    console.error('Error logging in user: ', error);
  }
};
```

By following these steps, you can set up your data models and Firebase services for your Cloud Explorer app. If you have any further questions or need additional details, feel free to ask!
