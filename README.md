# Sai Lakshmi Durga Koneti — Portfolio

> Personal portfolio website — React + Vite + Tailwind CSS + Framer Motion.

**Author:** Sai Lakshmi Durga Koneti  
**Live Site:** *(update after deployment)*  
**GitHub:** [github.com/sailakshmidurga](https://github.com/sailakshmidurga)

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Email | EmailJS |
| Icons | Lucide React |
| Deployment | Vercel / Netlify |

---

## Local Setup

```bash
git clone https://github.com/sailakshmidurga/portfolio.git
cd portfolio
npm install
cp .env.example .env   # fill in your EmailJS keys (see below)
npm run dev            # → http://localhost:5173
```

---

## 📧 EmailJS Setup (Required for Contact Form)

The contact form uses EmailJS to send real emails. Follow these steps:

### Step 1 — Create EmailJS Account
1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a free account (200 emails/month free)

### Step 2 — Add Email Service
1. In your dashboard click **Email Services → Add New Service**
2. Choose **Gmail** (easiest)
3. Connect your Gmail account (`konetisailakshmidurga@gmail.com`)
4. Copy the **Service ID** (looks like `service_xxxxxxx`)

### Step 3 — Create Email Template
1. Click **Email Templates → Create New Template**
2. Set the template like this:

**Subject:** `New Portfolio Message: {{subject}}`

**Body:**
```
You have a new message from your portfolio!

Name:    {{from_name}}
Email:   {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

3. In **To email**, type your own email address
4. Save and copy the **Template ID** (looks like `template_xxxxxxx`)

### Step 4 — Get Public Key
1. Go to **Account → General → API Keys**
2. Copy your **Public Key** (looks like `xxxxxxxxxxxxxxxxxxx`)

### Step 5 — Create .env File
In your project root, create a file named `.env` (no example, just `.env`):

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxx
```

### Step 6 — For Vercel/Netlify Deployment
Add the same 3 variables in your hosting platform's environment variables settings.
- Vercel: Project → Settings → Environment Variables
- Netlify: Site → Site Settings → Environment Variables

---

## 🔗 Where to Update Links (Beginner-Friendly Guide)

### All content is in ONE file:
**`src/data/portfolio.js`**

---

### 1. Portfolio GitHub Repository Link
```
File: src/data/portfolio.js
Search for: Personal Portfolio Website (project id: 5)
Field: github: '#'
Replace '#' with your actual portfolio repo URL.

Example:
github: 'https://github.com/sailakshmidurga/portfolio',
```

### 2. Portfolio Live URL (after deployment)
```
File: src/data/portfolio.js
Same project (id: 5)
Field: live: null
Replace null with your deployed URL.

Example:
live: 'https://sailakshmidurga.vercel.app',
```

### 3. Resume PDF Download Link
```
File: src/data/portfolio.js
Field: resumeUrl: '#'
Replace '#' with a direct download URL to your PDF.

Option A — Google Drive:
Upload resume → Share → Get link → change "view" to "uc?export=download"
Example: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID'

Option B — Upload to public folder, use '/resume.pdf'
```

### 4. Internship Certificate Link
```
File: src/data/portfolio.js
Under experience array, field: certificateUrl
Already set to your Google Drive link. Update if the link changes.
```

### 5. Certification Links (View + Verify)
```
File: src/data/portfolio.js
Under certifications array.
Each cert has: viewUrl, verifyUrl
Already filled in. Update if links change.
```

### 6. Project GitHub Links
```
File: src/data/portfolio.js
Under projects array.
Each project has a github field — all real links already filled in.
```

### 7. Cisco Certificate Link (if you have one)
```
File: src/data/portfolio.js
Find: title: 'Cisco Operating Basics'
Field: viewUrl: null
Replace null with your certificate Google Drive link.
```

---

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Add environment variables (EmailJS keys)
4. Deploy

### Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → Add site → Import from Git
3. Build command: `npm run build` · Publish directory: `dist`
4. Add environment variables
5. Deploy

---

## Changed Files in This Update

| File | Change |
|---|---|
| `src/data/portfolio.js` | All real links, portfolio project added, cert data updated |
| `src/components/sections/Projects.jsx` | Source Code + Live Demo buttons per card |
| `src/components/sections/Certifications.jsx` | View + Verify buttons with real links |
| `src/components/sections/Experience.jsx` | View Certificate button inside internship card |
| `src/components/sections/Contact.jsx` | Real EmailJS integration, proper error handling |
| `src/components/layout/Footer.jsx` | Removed "Built with..." line |
| `src/components/sections/Hero.jsx` | Badge moved below name — no navbar overlap |
| `src/App.jsx` | Certifications section added between Experience and Contact |
| `package.json` | Added @emailjs/browser dependency |
| `.env.example` | EmailJS environment variable template |

---

## License
MIT
