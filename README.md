# 📈 GSC Trending Plus

> Fetch and display your **most visited and trending pages** directly from **Google Search Console** using a simple Node.js module.  
> Perfect for **dashboards, analytics widgets, and SEO tools** built with **React**, **Next.js**, or **Node.js**.

---

[![npm version](https://img.shields.io/npm/v/gsc-trending-plus.svg?style=flat&color=blue)](https://www.npmjs.com/package/gsc-trending-plus)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D14-green)](https://nodejs.org/)
[![Google API](https://img.shields.io/badge/Google-Search%20Console-4285F4)](https://developers.google.com/webmaster-tools/search-console-api-original)

---

## 🚀 Features

✅ Fetch top-performing pages by **Clicks**, **Impressions**, **CTR**, and **Position**  
✅ Works with **Google Search Console API** (via Service Account)  
✅ Minimal setup — just one function call  
✅ Supports both **server-side (Node.js)** and **frontend (Next.js / React)** usage  
✅ Ideal for **custom dashboards**, **SEO analytics**, and **reporting tools**

---

## 🧠 Installation

```bash
npm install gsc-trending-plus
```

or

```bash
yarn add gsc-trending-plus
```

---

## ⚙️ Setup Guide

### 🧩 STEP 1 — Enable Search Console API in Google Cloud

1. Go to [Google Cloud Console](https://console.cloud.google.com/).  
2. Create a new project (e.g., “yourdomain GSC API”).  
3. Navigate to **APIs & Services → Library** → search for “Search Console API” → click **Enable**.  
4. Go to **APIs & Services → Credentials → Create Credentials → Service Account**.  
5. Name it (e.g., `gsc-service`) → click **Create and Continue** → assign no special roles → click **Done**.  
6. Click your new Service Account → **Keys → Add Key → Create New Key → JSON**.  
   - It will download a file like:  
     `gsc-service-xxxxxxxxxxxx.json`  
7. Save this file securely (e.g., inside your project folder).  
8. Copy the **Service Account Email** (found in the Service Account details).

---

### 🧩 STEP 2 — Grant Access to Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).  
2. Click **Settings → Users and Permissions → Add User**.  
3. Add your **Service Account email** (e.g., `gsc-service@yourproject.iam.gserviceaccount.com`).  
4. Grant **Full** or **Restricted** access (both work for read-only API calls).

---

### 🧩 STEP 3 — Add Your Key File

- Save your JSON key file (e.g., `./service-account.json`).  
- **Never** commit this file to Git — it’s ignored by default in `.gitignore`.  
- Keep it safe and private.

---

## 🧪 Usage Example

```js
import getGSCTrendingData from 'gsc-trending-plus';

(async () => {
  const data = await getGSCTrendingData({
    keyFile: './service-account.json',
    siteUrl: 'https://yourdomain.com',
    startDate: '2025-10-01',
    endDate: '2025-10-31',
    limit: 5
  });

  console.log(data);
})();
```

**Output Example:**

```json
[
  {
    "url": "https://yourdomain.com/blog/post1",
    "clicks": 1200,
    "impressions": 8500,
    "ctr": 14.12,
    "position": 4.8
  },
  {
    "url": "https://yourdomain.com/blog/post2",
    "clicks": 980,
    "impressions": 7100,
    "ctr": 13.8,
    "position": 5.2
  }
]
```

---

## 📊 Response Format

| Field         | Description                          |
|----------------|--------------------------------------|
| `url`          | Page URL from Google Search Console  |
| `clicks`       | Number of user clicks                |
| `impressions`  | Number of times the page appeared    |
| `ctr`          | Click-through rate (%)               |
| `position`     | Average ranking position             |

---

## ✅ Verify It Works

- Wait ~10–15 seconds after the first API call (cache warm-up).  
- Check your console — data should appear sorted by performance.  
- If you see **"GSC config missing"**, verify your key file path and permissions.

---

## ❓ FAQ

### Does this module store or send any personal data?
> ❌ No.  
All data is fetched securely from **your own Google Search Console property**.

### Can I use it in production?
> ✅ Yes.  
Use server-side secrets or environment variables to keep your key file safe.

---

## 🔒 Security Tips

- Never upload your Service Account JSON key to public repos.  
- Use `.env` or cloud secret storage in production.  
- Regenerate your key if it’s ever exposed.

---

## 🧩 Example Use Cases

- 🔹 SEO Dashboards in **Next.js**
- 🔹 Automated **Ranking Reports**
- 🔹 Custom **WordPress/Node Analytics**
- 🔹 Embedded **Widgets for Client Portals**

---

## 🧰 Tech Stack

- Node.js 14+  
- Google APIs Client Library  
- ESM + async/await support

---

## 📜 License

Licensed under the **MIT License**  
© 2025 [Rohit Saini](https://github.com/DevRohitSaini)

---

⭐ **If you find this project useful, please give it a star on GitHub!**  
It helps others discover and trust the package.
