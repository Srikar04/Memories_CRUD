# Memovault 📝

Memovault is a full-stack web application built with React, Node, Express, and MongoDB for journaling memories.

**Live Demo:** [Memovault Demo](https://memories-client-mu.vercel.app/)

## Getting Started

To run this app locally, fork and clone this repo. Ensure you have Node.js installed and a MongoDB account.

### Installation

# Client
```bash
cd client
npm install
```

# Server
```bash
cd server
npm install --legacy-peer-deps
```
Create a .env in both client and server and fill required key-value pairs

## Start the React app:
```bash
cd client
npm start
```
## Start the Express server:
```bash
cd server
npm start
```
The app will run on http://localhost:3000 for the client and http://localhost:5000 for the server.

## Features

User authentication with JWT 🔐 (Ongoing)

Create, edit, delete memories with title, content, tags, location, and images 📝

View all public memories 👀

Search memories by title or tags 🔎

View memory details 📖

Responsive UI 📱


## Tech Stack
Client: React, Redux, MaterialUI

Server: Node, Express, MongoDB, JWT

