# Next.js Firebase Authentication

This is a simple user authentication project built with **Next.js** and **Firebase**, allowing users to sign up, log in and logout.

## Features

- User registration and login with **Firebase Authentication**.
- Form validation using **Zod** integrated with **React Hook Form**.
- Styled with **Tailwind CSS** and **shadcn/ui** components.
- Session management using **sessionStorage** and Firebase Auth state to protect a private “Home” route.
- Uses **React Firebase Hooks** for simplified Firebase integration.

## Approach

I have several years of experience with React, and recently I worked with **Expo**, so Next.js routing felt familiar. This was my first time setting up **Firebase Authentication** and working with **Next.js** in a real project.

All Firebase credentials are stored in a `.env` file to keep sensitive information out of the source code. Upon login or registration, a flag is saved in `sessionStorage` to control access to private routes. While this approach works for this test project, in a production environment, a more secure session management strategy (e.g., `Zustand`/`Redux` or HttpOnly cookies) would be recommended and better for next projects.

## Libraries & Tools Used

- [Next.js](https://nextjs.org/)
- [Firebase Authentication](https://firebase.google.com/products/auth)
- [React Firebase Hooks](https://github.com/CSFrequency/react-firebase-hooks)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)

## Environment Variables (.env)

For security reasons, the actual Firebase credentials are **not included** in the repository.  
Below is an example of how i structured my `.env` file:

```env
NEXT_PUBLIC_FIREBASE_API_KEY="YOUR_FIREBASE_API_KEY"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="YOUR_PROJECT.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="YOUR_PROJECT.appspot.com"
NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID="YOUR_SENDER_ID"
NEXT_PUBLIC_FIREBASE_APP_ID="YOUR_APP_ID"
```

## Challenges & Future Improvements

- Understanding Next.js routing and Firebase setup for the first time.
- Current session management with `sessionStorage` works, but is not fully secure. Future improvements could include:
  - Using `Zustand` or `Redux` for global auth state management.
  - Implementing `HttpOnly` cookies for authentication tokens.
  - Adding password reset and email verification flows.
