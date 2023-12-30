<div align="center">
<img src="public/favicon.svg" height="50px"/>
<h3>
 Simple Coffee Listing
</h3>
<p>Challenge from <a href="https://devchallenges.io/challenge/45">devchallenges.io</a></p>
</div>

<p></p>

<div align="center">

![Astro Badge](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=flat)
![GitHub stars](https://img.shields.io/github/stars/alessrdrgz/coffee-listing)
![GitHub issues](https://img.shields.io/github/issues/alessrdrgz/coffee-listing)
![GitHub forks](https://img.shields.io/github/forks/alessrdrgz/coffee-listing)
![GitHub PRs](https://img.shields.io/github/issues-pr/alessrdrgz/coffee-listing)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)

</div>

## 🛠️ Stack

- [**Astro**](https://astro.build/) - The web framework for content-driven websites.
- [**Preact**](https://preactjs.com) - Fast 3kB alternative to React with the same modern API
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript with syntax for types.
- [**Tailwindcss**](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- [**fontsource**](https://fontsource.org/) - Self-host Open Source fonts in neatly bundled NPM packages.

## 🚀 Getting Started

1. [Fork](https://github.com/alessrdrgz/coffee-listing) or clone this repository.

```bash
git clone git@github.com:alessrdrgz/coffee-listing.git
```

2. Install the dependencies:

- We use [bun](https://bun.sh) to install and manage the dependencies.

```bash
# Install bun for MacOS, WSL & Linux:
curl -fsSL https://bun.sh/install | bash

# Install bun for Windows:
powershell -c "iwr bun.sh/install.ps1|iex"

# Install with bun:
bun install
```

- or you can use [pnpm](https://pnpm.io):

```bash
# Install pnpm globally if you don't have it:
npm install -g pnpm

# Install dependencies:
pnpm install
```

3. Run the development server:

```bash
# Run with bun:
bun dev

# Run with pnpm:
pnpm dev
```

4. Open [**http://localhost:4321**](http://localhost:4321/) with your browser to see the result 🚀

## 🧞 Commands

|     | Command          | Action                                        |
| :-- | :--------------- | :-------------------------------------------- |
| ⚙️  | `dev` or `start` | Starts local dev server at `localhost:3000`.  |
| ⚙️  | `build`          | Build your production site to `./dist/`.      |
| ⚙️  | `preview`        | Preview your build locally, before deploying. |

## ✅ TODO

- [x] Create a coffee listing page that matches the given design.
- [x] Use React or other Front-end libraries for this challenge.
- [x] Create a Reusable Card component.
- [x] The card component should include a picture, name, pricing, rating, and number of votes if exists.
- [x] The card component should render popular tag, availability status conditionally.
- [x] Render Coffee list with given data. The data should come from a given API or downloaded JSON file.
- [x] Users can choose to list all products or just available products.
- [x] Deploy the solution and submit Repository URL and Demo URL.
