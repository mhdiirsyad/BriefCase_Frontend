# BriefCase Frontend

The frontend for BriefCase, a legal assistant for asking questions about Indonesian legal documents. It provides a streamed chat interface, document source references, local conversation history, and a five-question limit per conversation.

## Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS v4
- Zustand for browser-based chat session storage
- React Markdown with GitHub Flavored Markdown support
- Manrope and DM Sans typography

## Requirements

- Node.js 20 or newer
- npm
- The BriefCase backend running locally

Backend repository: [github.com/mhdiirsyad/BriefCase_Backend](https://github.com/mhdiirsyad/BriefCase_Backend)

## Setup

From the `frontend` directory:

```bash
npm install
```

Create a `.env` file in the project root:

```env
NEXT_PUBLIC_API_URL=your-apu-url
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The backend must be available at the URL configured by `NEXT_PUBLIC_API_URL`. The chat client sends requests to `POST /chat/stream` and expects Server-Sent Events for source references, response tokens, errors, and completion.

## Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Serve the production build
npm run lint     # Run ESLint
```

## Chat Storage

Chat data is stored in the browser using Zustand and `localStorage`; no frontend database or user login is required.

- Each conversation allows up to five user questions.
- Use the new conversation action to start another session.
- Sessions older than seven days are removed automatically.
- Assistant responses retain their document source metadata locally.

## Project Structure

```text
app/
	(root)/chat/       Chat route
	globals.css        Tailwind theme and design tokens
components/chat/     Chat interface components
components/ui/       Shared UI primitives
lib/chat.ts          Backend SSE client
lib/store/           Zustand chat store
lib/type.ts          Shared frontend types
```

## Design System

The interface follows [`DESIGN.MD`](./DESIGN.MD), including the Executive Intelligence color palette, Manrope/DM Sans typography, responsive workspace layout, frosted input dock, and restrained teal, mint, and sky accents.
