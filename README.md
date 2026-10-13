# Team Directory App

A React + Vite + Tailwind CSS directory built for the Team Directory laboratory activity. It uses local sample data only—no API or external website.

## Features
- Five routes: Home (`/`), Users (`/users`), User Details (`/users/:id`), About (`/about`), and Not Found (`*`)
- Navbar links use `NavLink` and visually distinguish the active page
- Reusable `Button` component with `label`, `onClick`, `variant`, and `children` props
- Reusable `UserCard` component with destructured props and a View Details link
- At least eight local users in `src/data/users.js`
- Users loaded into state after a one-second simulated loading delay
- Loading and no-results messages
- Controlled search input filters by name while typing
- Favorites stored in React state, with a count in the Navbar
- Dark/light mode toggle managed with `useState`
- User details use `useParams` and `useEffect`
- Browser page title updates on Users and User Details pages

## Requirements
Install Node.js (LTS recommended) and npm.

## Run the project
1. Extract the ZIP file.
2. Open a terminal in the `team-directory-app` folder.
3. Install packages:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local address printed by Vite, usually `http://localhost:5173`.

## Build
```bash
npm run build
npm run preview
```

## GitHub submission
Create an empty GitHub repository, then replace `YOUR-USERNAME` in the remote URL below with your own GitHub username.

```bash
git init
git add .
git commit -m "Set up Vite React app and local user data"
git add src/components
git commit -m "Create reusable components and active navigation"
git add src/pages src/App.jsx src/index.css
git commit -m "Add routing search favorites theme and page titles"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/team-directory-app.git
git push -u origin main
```

These commands are examples. Run each commit after the corresponding files exist, and use your actual GitHub repository URL.

## Folder structure
```text
team-directory-app/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── users.js
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Button.jsx
    │   ├── UserCard.jsx
    │   ├── Loader.jsx
    │   └── ErrorMessage.jsx
    └── pages/
        ├── Home.jsx
        ├── Users.jsx
        ├── UserDetails.jsx
        ├── About.jsx
        └── NotFound.jsx
```

## Be ready to explain
### UserCard component
`UserCard` receives `name`, `email`, `company`, `role`, `id`, `isFavorite`, and `onToggleFavorite` as props. It displays the user's information and calls `onToggleFavorite` when the favorite button is clicked.

### Users page `useEffect`
The effect with an empty dependency array starts a one-second timeout when the Users page mounts. After one second it copies the local user data into state and sets loading to false. The cleanup function clears the timeout if the page unmounts before the timeout finishes.

### User Details `useEffect`
The details page reads `id` from the URL with `useParams`. The effect depends on `id`, so it runs again when the URL ID changes, finds the matching local user, and updates the browser tab title.
