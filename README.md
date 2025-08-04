# Todo App

This is a simple, user-friendly Todo app built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Shadcn UI**.

You can add, edit, delete, and mark tasks as done—with all todos saved in your browser’s local storage. The app is responsive and displays **green success alerts** or **red error alerts** in the top-right corner.

---

## 🚀 Features

- **Add Tasks**: Type a task and hit **"Add Todo"**. It appears at the bottom of the list.
- **Edit Tasks**: Click the ✏️ icon to edit, then save or cancel.
- **Delete Tasks**: Click the 🗑️ icon to remove the task.
- **Mark as Done**: Check/uncheck the box to mark as complete/incomplete.
- **Alerts**:
  - ✅ Green for success (e.g., "Todo added successfully")
  - ❌ Red for errors (e.g., "Cannot add empty todo")
- **Responsive**: Works on phones, tablets, and desktops.
- **Local Storage**: Tasks persist even after refreshing or closing the browser.

---

## 🧰 Tech Stack

| Tool         | Use                                |
|--------------|-------------------------------------|
| React        | UI building                         |
| TypeScript   | Type safety                         |
| Vite         | Fast dev server and build system    |
| Tailwind CSS | Utility-first responsive styling    |
| Shadcn UI    | Prebuilt, accessible UI components  |
| Lucide React | Clean, consistent icon set          |

---

## 📦 Installation & Setup

Make sure you have **Node.js v16+** and **npm v7+**.

### 🔧 Clone the Repo

```bash
git clone https://github.com/faaasiill/todo-reactJS
cd todo-app
````

### 📥 Install Dependencies

```bash
npm install
```

### 🎨 Add Shadcn UI Components

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add alert button checkbox input
```

### 🔔 Add Lucide Icons

```bash
npm install lucide-react
```

---

## 🧪 How to Run

Start the development server:

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Try It Out

* Add a task (e.g., "Buy groceries") → ✅ success alert
* Try submitting an empty task → ❌ error alert
* Mark a task as done → red line-through
* Edit or delete any task
* Resize your browser → test responsiveness

---

## 📁 Folder Structure

```
todo-app/
├── public/
├── src/
│   ├── components/
│   │   ├── custom/
│   │   │   ├── InputField.tsx      # Form input
│   │   │   ├── TodoDisplay.tsx     # Todo list + alerts
│   │   │   ├── TodoTitle.tsx       # Single todo item
│   │   └── ui/                     # Shadcn UI components
│   ├── types/
│   │   ├── todo.ts                 # Todo type
│   │   ├── alert.ts                # Alert type
│   ├── utils/
│   │   └── localStorage.ts         # Save/load todos
│   ├── App.tsx                     # App root
│   ├── App.css                     # Responsive styles
│   ├── index.css                   # Global styles
│   ├── main.tsx                    # Entry point
│   └── vite-env.d.ts               # Vite TS setup
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

---

## ⚙️ Notes

* Todos are stored under the localStorage key: `"vite-todo-list"`
* Alerts:

  * Green = success (`.alert-success`)
  * Red = error (`.alert-error`)
* If alert styles are missing, add this to `src/App.css`:

```css
.alert-success {
  background-color: #d1fae5;
  color: #065f46;
  border-color: #10b981;
}

.alert-error {
  background-color: #fee2e2;
  color: #991b1b;
  border-color: #ef4444;
}
```

Update `TodoDisplay.tsx` to apply these classes.

---

## 🛠️ Troubleshooting

* **TypeScript issues**: Make sure `tsconfig.json` has `"strict": true` and correct paths in `src/types/`.
* **Alert styling**: Double-check your `ui/alert.tsx` does not override Tailwind styles.
* **Responsiveness**: Test on multiple screen sizes; tweak `max-w-2xl` or padding in `App.tsx` if needed.

---

## 🎉 Enjoy!

If you encounter any issues or want to suggest improvements, feel free to open an issue or PR!

Let me know if you want to auto-generate the GitHub badges (stars, forks, license, etc.) or want a `CONTRIBUTING.md` to go with it.
