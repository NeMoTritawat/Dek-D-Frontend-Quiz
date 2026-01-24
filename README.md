# Dek-D FrontEnd

A mockup web application for managing Dek-D novel bookmarks, built with React, Vite and TailwindCSS

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** version 18.0.0 or higher
- **npm** or **yarn** for package management
- **Git** for cloning the repository

### Check Versions

```bash
node --version
npm --version
```

## 🚀 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/Dek-D-FrontEnd.git
cd Dek-D-FrontEnd
```

2. **Install dependencies**

```bash
npm install
```

Or if using yarn:

```bash
yarn install
```

## 🤔❓ How to Run

### Run in Development Mode

```bash
npm run dev
```

Or

```bash
yarn dev
```

After running the command, open your browser and navigate to `http://localhost:5173`

## 🎯 Features

### ✨ Main Features

- **📚 Bookmark Management** - Add and delete novel bookmarks
- **🖼️ Banner Carousel** - Swipe novel cover images
- **📖 Novel Cards** - Display novels with author, chapter, and last updated time
- **➕ Create New Bookmark** - Add new bookmarks through a Popup Modal
- **✏️ Delete Bookmarks** - Select and Delete multiple bookmarks
- **📱 Responsive Design** - Supports all device sizes (Mobile, Tablet, Desktop)

### 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and development server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **React Icons 5.5.0** - Icon library

## 📁 Project Structure

```
Dek-D-FrontEnd/
├── public/
│   └── images/          # Novel cover images
├── src/
│   ├── components/      # React Components
│   │   ├── Banner.jsx
│   │   ├── CreateNovelPopup.jsx
│   │   └── NovelCard.jsx
│   ├── pages/           # Page components
│   │   └── DekDNovelsPage.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

Made with ❤️ using React + Vite
