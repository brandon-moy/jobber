# Jobber

A React Native application for users to find jobs.

## 🤔 Why I built this?

React Native was something that interested me early on in my development path. Unfortunately I was not at a level where I was able to comprehend much of the information in the documentation and utilizing different tools to make an application work. After building multiple other applications I wanted to give React Native a try. While in the job search I felt that an application tailored to finding jobs would be perfect for my current situation!

## 💻 Technologies Used

- React / React Native
- JSX
- Expo
- Babel
- Axios
- JSearch API

## Features

- Users can view Popular and "Nearby" jobs on the Home Page
- Users can click tabs to search for Full-time, Part-time, or Contractor positions
- Users can click on a job to view a Job Details page and link out to the job's application page
- Users can search for a job title/job type

## Future Features

- Users can like jobs
- Users can use their location for the Nearby jobs
- Users can sign up for accounts
- Users can utilize a menu to navigate between home, liked jobs, and account details

## Preview

### Home page navigation:

![Navigating the home page](/assets/HomeNavigation.gif "Navigating the homepage")

### Viewing Job Details & Link to Application page:

![Job Details & Application Page](/assets/Details.gif "Job Details & Application")

### Search Feature:

![Search](/assets/Search.gif "Search")

## 🚀 Development or Test yourself!

Things you will need:

- Expo Go
- Rapid API account for a Rapid API Key.
  https://rapidapi.com/

1. Clone the repository

```
git clone https://github.com/brandon-moy/react-native-jobs.git
```

2. Install dependencies with Node Package Manager

```
npm i
```

3. Create a local .env file from the provided example

```
cp .env.example .env
```

4. Subscribe to the JSearch API and get your Rapid API Key
   https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch

5. Replace the changeMe in your .env file with your Rapid API Key

```
RAPID_API_KEY=changeMe <-- replace changeMe with RAPID API Key
```

6. Start the project with the script:

```
npm run start
```

7. Scan the QR code with your phone to open the application with Expo Go!

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
