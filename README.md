# 🎞️ ReelScroll – Vertical Scrollable Short Video Viewer

A simple React app that mimics a short video feed (like TikTok or Instagram Reels), built using **React**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Features

- Full-screen vertically scrollable videos
- Snap-to-screen behavior for smooth video browsing
- Lightweight video player with autoplay, loop, and mute
- Interactive buttons for likes, comments, and sharing
- Animated modal for showing extra video information
- Smooth entrance and exit animations using Framer Motion's `AnimatePresence`

---

## 📁 Project Structure

```bash
src/
├── App.jsx                # Entry point that renders ReelScroll
└── components/
    └── ReelScroll.jsx     # Main video scrolling component
```

## 📦 Tech Stack
React – Functional components and hooks (useState)

Tailwind CSS – Utility-first styling

Framer Motion – Animations and transitions (AnimatePresence, motion.div)

## 🧠 How It Works
Videos are mapped and displayed in full-screen sections using snap-y and snap-start.

When the "More Info" button is clicked, the state is updated with the active video.

A modal appears with a sliding animation (y: 100% → 0) using motion.div.

On closing the modal, the exit animation (y: 0 → 100%) plays before the modal is removed.

AnimatePresence ensures the modal stays in the DOM during its exit animation.

## 🖼️ Demo Video Data
This demo uses placeholder video URLs and thumbnails:
```js
const videos = [
  {
    id: 1,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    creator: "@alexdev",
    title: "Cool Beach Vibes",
    description: "A short video of waves hitting the shore.",
    thumbnail: "https://placehold.co/300x200/png"
  },
  {
    id: 2,
    url: "https://www.w3schools.com/html/movie.mp4",
    creator: "@devgirl",
    title: "Coding Session",
    description: "Time-lapse of a night coding marathon.",
    thumbnail: "https://placehold.co/300x200/png"
  }
];
```
## 🛠️ Setup Instructions
1. Clone the repo:
```bash
git clone https://github.com/Harshmahto/reeltoscroll.git
cd reel-scroll
```
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```
## 📌 Future Improvements
Integrate real video API (e.g. YouTube Shorts, TikTok, Pexels)

Add user authentication

Like/comment/save functionality

Swipe support for mobile

Better accessibility support





