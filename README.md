This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


TODO:
Goal: front-end assessment. Time: 4 hours or less.
It’s critical that you do not spend more time. We will consider it a failure if you do. We will pay attention to whether the requirements are met but also how the requirements are met.
Assignment
We want to task you to create a web application which has the functionalities in the list below. You must use React/TypeScript on Next.js 13 with App Router. Additional libraries are permitted.
Make sure your initial commit is a clean slate, e.g. the Next.js starter template, so we can get a sense of time spent.
On the / page we want to display a list of posts made by all users of the platform, sorted by date, newest first. Posts are sourced from LocalStorage.
On the /feed page we want to display a list of posts made by friends, similarly sorted by date, newest first. Posts are sourced from LocalStorage.
On the /signup page we want to display a form asking for a username and a password.
username must only contain alphanumeric characters and underscores.
password requirements are:
Must not contain the same character more than twice.
A character at index i must be different from characters at indices i - 1 and i - 2.
Valid inputs would be: f0o, b4rc0de, bazqaz. Invalid inputs would be: foo, b4r4ck, bazqaiqa.
Validation is triggered on input and on submit.
Valid form submissions are saved into LocalStorage
On the /signin page we want to display a form asking for a username and password.
Credentials are validated against accounts in LocalStorage.
On successful validation the current account is stored in SessionStorage.
On the /signout page we want to clear the account in SessionStorage and display a message when successfully logged out.
On the /:username page we want to display a list of posts from this user, sorted by date, newest first.
When /:username is not the currently signed in account we want to display a Befriend or Unfriend button, depending on whether /:username is in the list of friends of the currently signed in account.
On the /friends page we want to display the list of friends for the currently authenticated user.
Each friend also has an Unfriend button.
On every page we want to display a responsive navigation menu with our logo and some navigation links to pages.
Our logo is the ƒ character in bold text. Pressing the logo navigates the user to /.
Authenticated users will see:
Home navigates the user to /
My feed navigates the user to /feed
My friends navigates the user to /friends
My profile navigates the user to /:username
Sign out navigates the user to /signout
Unauthenticated users will see:
Home navigates the user to /
Sign in navigates the user to /signin
Sign up navigates the user to /signup
On mobile we want to display our logo and a menu toggle. The toggle button opens the navigation menu.
On screens which have the space available for it we want to display every menu item in a horizontal navigation bar.
The username tied to any post should navigate to the corresponding /:username page.
On every page, for authenticated users only, we want to display a big (+) button which opens a modal containing a form with a message field. Submitting the form saves the post to LocalStorage.
We don’t care too much about the visual side of things or whether animations are present (both can be a plus though). If you desire to work with an aesthetic, we like monospace, monochrome, hotpink, brackets for textual [buttons], and parentheses for (i) icon buttons.
