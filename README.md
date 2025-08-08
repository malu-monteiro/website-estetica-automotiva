# MSS Studio Car - Website

Website of MSS Studio Car, an automotive detailing business located in Pinhais, PR, Brazil.  
Built with Next.js, featuring a modern, responsive design with fluid animations to showcase services, portfolio, and facilitate customer contact.

[Visit the live site](https://www.mssstudiocar.com.br/)

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-15.3.3-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Cypress-14.5.4-69D3A7?style=for-the-badge&logo=cypress&logoColor=black" alt="Cypress" />
  <img src="https://img.shields.io/badge/Framer_Motion-12.18.1-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

---

# ✨ Features
- Service Pages – Dedicated pages for each service.
- Informational Sections – Includes About pages and course details.
- SEO – Dynamic metatags, robots.txt, and sitemap for search engine visibility.
- WhatsApp Integration – CTA buttons with predefined messages.
- Responsive Design – Works on desktops and mobile devices.
- Animations & Micro-interactions – Framer Motion and related libraries.
- End-to-End Testing – Cypress test suite for core features.

---

# 📥 Installation
Follow the steps below to set up and run the project on your local machine.

1. Clone the repository:

```bash
git clone https://github.com/your-username/mss-studio-car.git
cd mss-studio-car
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:
Create a file named `.env` in the project root and add the necessary API keys. Use `.env.example` as a template.

```bash
# Example variables
NEXT_PUBLIC_MAPTILER_API_KEY=YOUR_KEY_HERE
```

4. Start the development server:
```bash
pnpm run dev
```
Open http://localhost:3000 in your browser to see the result.

---

# 🧪 Running Tests
This project uses Cypress for End-to-End testing.

1. To open the Cypress interactive runner:

```bash
pnpm cypress open
```
2. To run all tests in the terminal (headless mode, for CI):

```bash
pnpm cypress run
```

---

# 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests. 😊

---

Made with 💜 by [malu-monteiro](https://github.com/malu-monteiro) | [Linkedin](https://www.linkedin.com/in/m-monteiro/)
