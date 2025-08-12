# Custom Tokenizer Web App
---

### Description

This is a **Custom Tokenizer Web App** that converts text into tokens and tokens back into text (decode).  
It gives you a **rough idea of how Large Language Models (LLMs)** like GPT handle text behind the scenes.  
After implementing this project, you will understand the **basics of tokenization**, a crucial step in Natural Language Processing (NLP) and AI model pipelines.

---

### Tech Stack

- **Frontend Framework:** [Next.js](https://nextjs.org/) (React-based)
- **Language:** JavaScript (ES6+)
- **Styling:** Tailwind CSS / Custom CSS
- **State Management:** React Hooks
- **Deployment:** [Vercel](https://vercel.com/)
- **Others:** Custom Tokenizer Logic

---

## Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/LuvSharma007/Custom-Tokenizer.git
cd Custom-Tokenizer

npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
### Srart the App
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
### Folder Structure
```bash
project-root/
│
├── app/
│   ├── page.js           # Main page component
│   ├── layout.js         # Global layout
│
├── components/           # Reusable UI components
│
├── helpers/              # Tokenizer logic & utilities
│
├── public/               # Static assets (images, icons)
│
├── styles/               # Global styles
│
├── package.json          # Project metadata & dependencies
└── next.config.js        # Next.js configuration
```


### Features
Convert text → tokens
Convert tokens → text
Simple, clean UI
Real-time encoding & decoding
Educational purpose — learn how LLM tokenization works

### Deployment
The easiest way to deploy this Next.js app is via vercel https://vercel.org :
For manual deployment, refer to the Next.js Deployment Docs https://nextjs.org/docs .

### Contributing
Contributions are welcome!
If you'd like to improve the tokenizer logic, UI, or add new features, feel free to fork the repo and create a pull request.
