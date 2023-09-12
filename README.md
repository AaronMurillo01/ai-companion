Project Features
Welcome to my Next.js web application! Below, I outline the key features and technologies used in this project:

Design and Styling
Tailwind CSS: I employed the Tailwind CSS framework for styling the application, giving it a modern and polished appearance.
Tailwind Animations and Effects: To add dynamic and engaging user interactions, I utilized Tailwind CSS classes for animations and effects.
Full Responsiveness: The design is fully responsive, ensuring that the application functions smoothly on various screen sizes.

Authentication
Clerk Authentication: I integrated Clerk for user authentication, allowing users to sign in using their email, Google, or other popular social login methods.

Form Handling
react-hook-form: Form management was streamlined with the react-hook-form library, providing client-side form validation and seamless handling of form submissions.

Error Handling
react-toast: For a user-friendly error display, I utilized the react-toastify library to present server errors in a user-friendly manner.

Media Generation
Image Generation Tool (Open AI): I incorporated OpenAI's API to dynamically generate images based on user interactions.
Video Generation Tool (Replicate AI): For video generation, I relied on Replicate AI's API to create captivating video content.

Content Generation
Conversation Generation Tool (Open AI): OpenAI's API assisted in generating dynamic and engaging conversations within the application.
Music Generation Tool (Replicate AI): With Replicate AI's capabilities, I could generate music content on-the-fly.

Subscription Management
Stripe Monthly Subscription: The application supports subscription-based access through Stripe, allowing users to easily subscribe to premium features.
Free Tier: I included a free tier with API limitations for users to explore the application without subscribing.

Backend Development
Routes: I implemented POST, DELETE, and GET routes in route handlers (located in the app/api directory) for managing server-side data interactions.
Database Access: In some cases, I directly accessed the database from server-side React components, bypassing the need for a traditional API layer.
Component Relations: I established robust relationships between server-side components and child components to efficiently manage data flow.

Layout and Structure
Layout Reusability: The project showcases the reusability of layouts to maintain a consistent look and feel throughout the application.
Folder Structure: I followed a well-organized folder structure in accordance with Next.js 13 App Router best practices.

<img width="960" alt="Screenshot 2023-09-10 163636" src="https://github.com/AaronMurillo01/ai-companion/assets/113479474/02d370df-32a6-4d63-a9b0-73f3ec5b10ae">



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
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
