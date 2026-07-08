# Adivinhe

An interactive word-guessing game built with React, TypeScript, and Vite during the Rocketseat Fullstack course.

The player receives a tip, tries to discover the hidden word one letter at a time, and has a limited number of attempts based on the word length. The game tracks used letters, highlights correct and incorrect guesses, and automatically starts a new round when the player wins or runs out of attempts.

## Features

- Random word selection from a local word bank
- Tip shown for each challenge
- Letter-by-letter guessing flow
- Automatic tracking of used letters
- Visual feedback for correct and incorrect guesses
- Restart action for starting a new match
- Attempt counter based on the selected word

## Technologies

- React 19
- TypeScript
- Vite
- CSS Modules

## Project Goals

This project was developed as part of the Rocketseat Fullstack learning journey to practice:

- Component composition in React
- State management with hooks
- TypeScript typing in a real UI flow
- Reusable UI building blocks
- Basic game logic in the frontend

## How It Works

1. When the app starts, it selects one word from the challenge list.
2. The player sees a tip related to the selected word.
3. Each submitted letter is checked against the hidden word.
4. Correct guesses reveal the matching letters.
5. Incorrect guesses still count as attempts.
6. The game ends when the word is fully discovered or when the attempt limit is reached.
7. After the match ends, the game automatically starts a new round.

## Getting Started

### Prerequisites

- Node.js installed
- npm installed

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the development server with Vite
- `npm run build` compiles TypeScript and creates the production bundle
- `npm run preview` serves the production build locally

## Project Structure

```text
src/
  App.tsx
  global.css
  app.module.css
  main.tsx
  assets/
  components/
    Button/
    Header/
    Input/
    Letter/
    LettersUsed/
    Tip/
  utils/
    words.ts
```

## Word Bank

The game uses a local list of challenges defined in `src/utils/words.ts`. Each item contains:

- `id`
- `word`
- `tip`

You can extend the game by adding new entries to that file.

## Notes

- The project currently focuses on core gameplay and UI feedback.
- The word list is intentionally simple and easy to expand.
- The game uses browser alerts for restart confirmation and end-of-round messages.

## Course Context

This project was created during the Rocketseat Fullstack course as a practical exercise to reinforce React fundamentals and frontend state handling.

## License

This project was created for educational purposes.