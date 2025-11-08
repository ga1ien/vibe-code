# The Complete Beginner's Guide to Vibe Coding

## What is Vibe Coding?

Vibe coding is a new way of building websites and apps where you work *with* AI as your coding partner. Instead of memorizing code syntax, you describe what you want to build, and AI helps you create it. This guide will walk you through every single step needed to start vibe coding, even if you've never written a line of code before.

---

## What You'll Need

Before we start, here's what this guide will help you set up:

- **Node.js** - The engine that runs modern web applications
- **Cursor** - A code editor designed to work with AI
- **Claude** - Your AI coding partner (requires $17+/month subscription)
- **Supabase** - A database to store your app's data
- **GitHub** - Where you'll save your code
- **Vercel** - Where you'll publish your app to the internet
- **Domain Name** (optional) - A custom web address like yourname.com

**Time Required:** About 45-60 minutes for complete setup  
**Cost:** Approximately $17-25/month (Claude subscription)

---

## PART 1: CREATE YOUR PASSWORDS DOCUMENT

**Before you do anything else**, you need a secure place to store all your passwords and special keys.

### Step 1: Create Your Password Document

1. Open a text editor on your computer:
   - **Windows:** Press the Windows key, type "Notepad", press Enter
   - **Mac:** Press Command + Space, type "TextEdit", press Enter

2. Copy and paste this template into your document:

```
===========================================
MY VIBE CODING CREDENTIALS
Created: [Today's Date]
===========================================

CLAUDE
- Email: 
- Password: 
- API Token: 

SUPABASE
- Email: 
- Password: 
- Organization Name: 
- Project Name: 
- Database Password: 
- API URL: 
- API Anon Key: 
- API Service Role Key: 
- Access Token: 

GITHUB
- Username: 
- Email: 
- Password: 
- Personal Access Token: 

VERCEL
- Email: 
- Password: 

GODADDY (if applicable)
- Email: 
- Password: 
- Domain Name: 

NODE.JS VERSION
- Version Installed: 

CURSOR
- License Key (if purchased): 
```

3. Save this file:
   - **Windows:** Click File → Save As → Name it "vibe-coding-credentials.txt" → Save to your Documents folder
   - **Mac:** Click File → Save → Name it "vibe-coding-credentials.txt" → Save to your Documents folder

4. **IMPORTANT:** Keep this file safe and never share it with anyone

---

## PART 2: INSTALL NODE.JS

Node.js is the foundation that lets your computer run modern web applications.

### Step 1: Download Node.js

1. Open your web browser (Chrome, Safari, Firefox, etc.)
2. Go to: **https://nodejs.org**
3. You'll see two big green buttons. Click the one that says **"LTS"** (Long Term Support) - it will have a version number like "20.x.x"
4. The download will start automatically (file will be about 70-100 MB)
5. Wait for the download to complete

### Step 2: Install Node.js on Windows

1. Go to your Downloads folder
2. Double-click the file named something like "node-v20.x.x-x64.msi"
3. A window will appear asking "Do you want to allow this app to make changes?" Click **Yes**
4. Click **Next** on the welcome screen
5. Check the box that says "I accept the terms in the License Agreement"
6. Click **Next**
7. Leave the default location as is, click **Next**
8. On the "Custom Setup" page, leave everything as default, click **Next**
9. Check the box that says **"Automatically install the necessary tools"** if you see it
10. Click **Next**, then click **Install**
11. Wait for installation to complete (2-3 minutes)
12. Click **Finish**
13. If a window opens asking to install additional tools, click any key to continue, then let it run (this may take 5-10 minutes)

### Step 2: Install Node.js on Mac

1. Go to your Downloads folder
2. Double-click the file named something like "node-v20.x.x.pkg"
3. Click **Continue** on the introduction screen
4. Click **Continue** on the license screen
5. Click **Agree**
6. Leave the default installation location, click **Install**
7. Enter your Mac password when prompted
8. Wait for installation to complete (2-3 minutes)
9. Click **Close**

### Step 3: Verify Node.js Installation

Let's make sure Node.js installed correctly:

**On Windows:**
1. Press the Windows key
2. Type "cmd" or "Command Prompt"
3. Press Enter (a black window will open)
4. Type: `node --version`
5. Press Enter
6. You should see something like "v20.x.x"
7. Type: `npm --version`
8. Press Enter
9. You should see something like "10.x.x"

**On Mac:**
1. Press Command + Space
2. Type "Terminal"
3. Press Enter (a white or black window will open)
4. Type: `node --version`
5. Press Enter
6. You should see something like "v20.x.x"
7. Type: `npm --version`
8. Press Enter
9. You should see something like "10.x.x"

**If you see version numbers, congratulations! Node.js is installed correctly.**

10. **Write down your Node.js version** in your credentials document

---

## PART 3: DOWNLOAD AND INSTALL CURSOR

Cursor is a special code editor built to work seamlessly with AI.

### Step 1: Download Cursor

1. Open your web browser
2. Go to: **https://cursor.sh**
3. Click the big **"Download"** button
4. Wait for the download to complete (file is about 100-150 MB)

### Step 2: Install Cursor on Windows

1. Go to your Downloads folder
2. Find the file named something like "cursor-setup.exe"
3. Double-click it
4. Click **Yes** if asked "Do you want to allow this app to make changes?"
5. Cursor will install automatically (takes about 1-2 minutes)
6. Cursor will open automatically when installation is complete

### Step 2: Install Cursor on Mac

1. Go to your Downloads folder
2. Find the file named something like "Cursor.dmg"
3. Double-click it
4. A window will open showing the Cursor icon
5. Drag the Cursor icon into the Applications folder
6. Close the window
7. Open your Applications folder (Command + Space, type "Applications")
8. Double-click Cursor
9. If you see "Cursor is from an unidentified developer":
   - Click **OK**
   - Open System Preferences → Security & Privacy
   - Click **Open Anyway** next to the Cursor message
   - Click **Open** in the confirmation dialog

### Step 3: Set Up Cursor

1. Cursor will open for the first time
2. Choose your color theme (Dark or Light - you can change this later)
3. Click through any welcome screens
4. You now have Cursor installed!

---

## PART 4: CREATE YOUR CLAUDE ACCOUNT

Claude is the AI that will be your coding partner.

### Step 1: Sign Up for Claude

1. Open your web browser
2. Go to: **https://claude.ai**
3. Click **"Sign Up"** or **"Get Started"**
4. Enter your email address
5. Click **"Continue with Email"**
6. Check your email for a verification code
7. Enter the 6-digit code from your email
8. Create a password (must be at least 8 characters)
9. Enter your name
10. Click **"Continue"** or **"Create Account"**
11. **Write your email and password** in your credentials document

### Step 2: Subscribe to Claude Pro or Team

You need at least the $17/month plan to use Claude for coding.

1. Once logged into Claude, look for your profile picture in the bottom-left corner
2. Click on it
3. Click **"Upgrade"** or **"Plans"**
4. You'll see different subscription options:
   - **Claude Pro ($20/month)** - Good for individual developers
   - **Claude Team ($25-30/month per user)** - For teams working together
5. Choose **Claude Pro** (or Team if you have a team)
6. Click **"Subscribe"** or **"Get Started"**
7. Enter your payment information (credit card)
8. Complete the purchase

### Step 3: Get Your Claude API Token

This is a special key that lets your code editor talk to Claude.

1. Stay on **https://claude.ai**
2. Look at the top-right corner of the screen
3. Click on your **profile picture** (the circle with your initial or photo)
4. Click **"Account Preferences"** or **"Settings"**
5. On the left side menu, click **"Access Tokens"** (or API Keys)
6. Click **"Create New Token"** or **"Generate Token"**
7. Give it a name like "Cursor Coding"
8. For expiration, select **"Never"** (so it doesn't expire)
9. Click **"Create"** or **"Generate"**
10. A long string of letters and numbers will appear - this is your API token
11. Click the **copy button** (looks like two overlapping squares)
12. **IMMEDIATELY paste this into your credentials document** under "Claude API Token"
13. **IMPORTANT:** You won't be able to see this token again, so make sure it's saved!

---

## PART 5: CREATE YOUR SUPABASE ACCOUNT

Supabase is where your app will store data (like user accounts, posts, etc.)

### Step 1: Sign Up for Supabase

1. Open your web browser
2. Go to: **https://supabase.com**
3. Click **"Start your project"** or **"Sign Up"**
4. You can sign up with:
   - **GitHub** (recommended - we'll create GitHub next if you don't have it)
   - **Email**
5. If using email:
   - Enter your email address
   - Create a password
   - Click **"Sign Up"**
   - Check your email and click the verification link
6. **Write your email and password** in your credentials document

### Step 2: Create Your Organization

An organization is like a folder for all your projects.

1. After signing in, you'll see **"Create a new organization"**
2. In the "Organization name" field, enter a name for your organization
   - Use your company name, project name, or personal name
   - Examples: "MyCompany", "JohnDoeApps", "StartupXYZ"
3. Click **"Create organization"**
4. **Write your organization name** in your credentials document

### Step 3: Create Your First Project

A project is a single app or website.

1. You'll see **"Create a new project"** or **"New project"**
2. Click on it
3. Fill in the form:
   - **Name:** Give your project a name (like "my-first-app" or your app's name)
   - **Database Password:** Create a strong password
     - Must be at least 12 characters
     - Use letters, numbers, and symbols
     - Example: MyApp2024!Secure#Pass
   - **Region:** Choose the one closest to where most users will be
     - US East, US West, Europe, Asia, etc.
4. Click **"Create new project"**
5. Wait 2-3 minutes while Supabase sets everything up
6. **Write your project name and database password** in your credentials document

### Step 4: Get Your Supabase API URL

1. Your project dashboard will load
2. Look on the left sidebar
3. Click on **"Project Settings"** (looks like a gear icon)
4. Click on **"API"** in the settings menu
5. You'll see a section called **"Project URL"** or **"API URL"**
6. It will look like: `https://abcdefghijklmnop.supabase.co`
7. Click the **copy button** next to it
8. **Paste this into your credentials document** under "Supabase API URL"

### Step 5: Get Your Supabase API Keys

Still on the same API settings page:

1. Scroll down to **"Project API keys"**
2. You'll see two keys:
   - **anon / public** - Safe to use in your website/app frontend
   - **service_role / secret** - Powerful key for backend operations only

#### Get the Anon (Public) Key:
1. Find the **anon** or **public** key
2. Click the **copy button** next to it
3. **Paste it in your credentials document** under "API Anon Key"

#### Get the Service Role Key:
1. Find the **service_role** key
2. Click **"Reveal"** next to it (you may need to confirm)
3. Click the **copy button**
4. **Paste it in your credentials document** under "API Service Role Key"

**IMPORTANT SECURITY NOTE:**
- **Anon Key** → Use in your frontend code (websites, mobile apps) - it's safe for users to see
- **Service Role Key** → ONLY use in backend code or server functions - NEVER put this in frontend code or commit it to public GitHub repos. This key bypasses all security rules!

### Step 6: Get Your Supabase Access Token

The Access Token lets you manage your Supabase projects programmatically (create databases, manage settings, etc.)

1. While still on Supabase, click your **profile icon** in the top-right corner
2. Click **"Account"** or **"Account Settings"**
3. In the left sidebar, look for **"Access Tokens"**
4. Click **"Access Tokens"**
5. Click **"Generate New Token"** or **"Create New Token"**
6. Give it a name like "Development Access"
7. For expiration, you can choose:
   - **"Never"** - Token never expires (convenient but less secure)
   - **"30 days"** - Need to regenerate monthly (more secure)
   - Choose based on your preference
8. Click **"Generate Token"** or **"Create"**
9. A long token will appear starting with "sbp_"
10. Click the **copy button**
11. **IMMEDIATELY paste this into your credentials document** under "Supabase Access Token"
12. **CRITICAL:** You won't be able to see this token again!

**When do you use the Access Token?**
- Usually for advanced automation or CI/CD pipelines
- For now, just save it - you probably won't need it for your first projects
- Claude might ask for it if you're doing advanced Supabase management

---

## PART 6: CREATE YOUR GITHUB ACCOUNT

GitHub is where you'll save all your code safely.

### Step 1: Sign Up for GitHub

1. Open your web browser
2. Go to: **https://github.com**
3. Click **"Sign up"** in the top-right corner
4. Enter your email address, click **"Continue"**
5. Create a password, click **"Continue"**
6. Create a username (this will be public)
   - Use letters, numbers, and hyphens only
   - Examples: john-doe, mycompany-dev, startup-builder
   - Click **"Continue"**
7. Choose if you want email updates (y/n), click **"Continue"**
8. Complete the puzzle verification
9. Click **"Create account"**
10. Check your email for a verification code
11. Enter the code
12. **Write your GitHub username, email, and password** in your credentials document

### Step 2: Complete GitHub Setup

1. GitHub will ask you a few questions (optional):
   - How many team members? (You can skip)
   - Are you a student or teacher? (Answer or skip)
2. Choose the **Free** plan (you don't need paid features yet)
3. You'll land on your GitHub dashboard

### Step 3: Create a GitHub Personal Access Token

This special token lets Claude Code automatically save your work to GitHub for you.

1. While logged into GitHub, click your **profile picture** in the top-right corner
2. Click **"Settings"** (near the bottom of the menu)
3. Scroll down the left sidebar to the very bottom
4. Click **"Developer settings"** (second to last option)
5. In the left sidebar, click **"Personal access tokens"**
6. Click **"Tokens (classic)"**
7. Click the green **"Generate new token"** button in the top-right
8. Click **"Generate new token (classic)"**
9. GitHub may ask for your password - enter it
10. Fill out the form:
    - **Note:** Type "Claude Code Access" (this is just a label for you)
    - **Expiration:** Select **"No expiration"** from the dropdown
    - **Select scopes:** Check these boxes:
      - ✅ **repo** (this will automatically check all boxes under it)
      - ✅ **workflow**
      - ✅ **write:packages**
      - ✅ **read:packages**
11. Scroll to the bottom and click the green **"Generate token"** button
12. A green box will appear with a long token starting with "ghp_"
13. Click the **copy icon** (two overlapping squares) next to the token
14. **IMMEDIATELY paste this into your credentials document** under "GitHub Personal Access Token"
15. **CRITICAL:** You won't be able to see this token again! If you lose it, you'll need to create a new one

---

## PART 7: CREATE YOUR VERCEL ACCOUNT

Vercel is where you'll publish your website/app to make it live on the internet.

### Step 1: Sign Up for Vercel

1. Open your web browser
2. Go to: **https://vercel.com**
3. Click **"Sign Up"** in the top-right corner
4. Click **"Continue with GitHub"** (easiest option)
5. It will open GitHub - click **"Authorize Vercel"**
6. You're now signed into Vercel!
7. **Write "Same as GitHub"** in your credentials document under Vercel, or write the email/password if you used a different method

---

## PART 8: (OPTIONAL) GET A DOMAIN NAME

Only do this if you want a custom web address like "myapp.com" instead of "myapp.vercel.app"

### Step 1: Choose a Domain on GoDaddy

1. Go to: **https://godaddy.com**
2. Type your desired domain name in the search box
   - Example: "myawesomeapp.com"
3. Click **"Search"**
4. Browse available domain names (look for green "Available" tags)
5. Choose one and add it to your cart
6. Domains cost $10-20/year typically
7. Create a GoDaddy account or sign in
8. Complete the purchase
9. **Write your GoDaddy email, password, and domain name** in your credentials document

**Note:** You'll connect this to Vercel later when you're ready to deploy your app.

---

## PART 9: INSTALL CLAUDE CODE

Claude Code is a command-line tool that lets you code directly with Claude AI.

### Step 1: Install Claude Code via Terminal

**On Windows:**

1. Press the Windows key
2. Type "PowerShell"
3. **Right-click** on "Windows PowerShell"
4. Click **"Run as administrator"**
5. Click **"Yes"** when asked if you want to allow changes
6. A blue window will open
7. Type or paste this command:
```
npm install -g @anthropic-ai/claude-code
```
8. Press Enter
9. Wait for installation (1-2 minutes) - you'll see lots of text scrolling
10. When it's done, you'll see a command prompt again

**On Mac:**

1. Press Command + Space
2. Type "Terminal"
3. Press Enter
4. A window will open
5. Type or paste this command:
```
npm install -g @anthropic-ai/claude-code
```
6. Press Enter
7. If asked for your password, type it (you won't see it as you type) and press Enter
8. Wait for installation (1-2 minutes) - you'll see lots of text scrolling
9. When it's done, you'll see a command prompt again

### Step 2: Configure Claude Code with Your API Token

Now we need to tell Claude Code how to connect to your Claude account.

**On Windows (PowerShell) or Mac (Terminal):**

1. Type this command:
```
claude auth
```
2. Press Enter
3. It will ask: "Enter your Anthropic API key:"
4. Open your credentials document
5. Copy your Claude API Token
6. Paste it into the terminal (right-click → paste, or Ctrl+V on Windows, Cmd+V on Mac)
7. Press Enter
8. You should see: "Authentication successful!"

### Step 3: Verify Claude Code Installation

Let's make sure it works:

1. In the same terminal window, type:
```
claude --version
```
2. Press Enter
3. You should see a version number like "1.x.x"

**If you see a version number, Claude Code is installed correctly!**

---

## PART 10: INSTALL CLAUDE CODE EXTENSION IN CURSOR

Now let's add Claude Code directly into your code editor.

### Step 1: Open Cursor

1. Open Cursor (the code editor you installed earlier)
2. If you closed it, find it:
   - **Windows:** Press Windows key, type "Cursor", press Enter
   - **Mac:** Press Command + Space, type "Cursor", press Enter

### Step 2: Open the Extensions Panel

1. Look at the left side of Cursor
2. You'll see a vertical toolbar with icons
3. Click the icon that looks like **four squares** (Extensions) - usually 5th or 6th icon down
4. Or use the keyboard shortcut:
   - **Windows:** Press `Ctrl + Shift + X`
   - **Mac:** Press `Cmd + Shift + X`

### Step 3: Search for Claude Code Extension

1. At the top of the Extensions panel, you'll see a search box that says "Search Extensions in Marketplace"
2. Click in the search box
3. Type: **Claude Code**
4. Press Enter
5. Look for the extension called **"Claude Code"** by Anthropic
6. Click on it

### Step 4: Install the Extension

1. You'll see a blue button that says **"Install"**
2. Click **"Install"**
3. Wait 10-20 seconds for installation
4. The button will change to **"Uninstall"** or show a gear icon when it's done
5. You might see a message saying "Please reload to activate" - if so, click **"Reload"**

### Step 5: Configure the Extension with Your API Key

1. After installation, you might see a notification asking for your API key
2. If you see this, click **"Enter API Key"** or **"Configure"**
3. A text box will appear
4. Open your credentials document
5. Copy your Claude API Token
6. Paste it into the text box
7. Press Enter

**If you don't see a prompt for API key:**

1. Press `Ctrl + Shift + P` (Windows) or `Cmd + Shift + P` (Mac)
2. Type: **Claude: Set API Key**
3. Press Enter
4. Paste your API token
5. Press Enter

### Step 6: Verify the Extension is Working

1. Open a new file in Cursor:
   - Press `Ctrl + N` (Windows) or `Cmd + N` (Mac)
2. Press `Ctrl + Shift + P` (Windows) or `Cmd + Shift + P` (Mac)
3. Type: **Claude**
4. You should see several Claude commands appear like:
   - "Claude: Start Coding Session"
   - "Claude: Ask Claude"
   - "Claude: Chat with Claude"

**If you see these commands, the extension is installed correctly!**

---

## PART 11: INSTALL ADDITIONAL REQUIRED TOOLS

### Install Git (Version Control)

Git works with GitHub to save your code.

**On Windows:**

1. Go to: **https://git-scm.com/download/win**
2. Download will start automatically
3. Run the installer (git-setup.exe)
4. Click **"Next"** through all options (defaults are fine)
5. Click **"Install"**
6. Click **"Finish"**

**On Mac:**

1. Open Terminal (Command + Space, type "Terminal")
2. Type: `git --version`
3. Press Enter
4. If Git is not installed, a popup will appear asking to install Command Line Developer Tools
5. Click **"Install"**
6. Wait for installation (5-10 minutes)
7. Click **"Done"**

**Verify Git Installation:**

1. Open Terminal (Mac) or Command Prompt (Windows)
2. Type: `git --version`
3. Press Enter
4. You should see something like "git version 2.x.x"

### Configure Git with Your Information

1. In Terminal or Command Prompt, type:
```
git config --global user.name "YourName"
```
(Replace YourName with your actual name)

2. Press Enter

3. Type:
```
git config --global user.email "youremail@example.com"
```
(Replace with your actual email - use the same one as GitHub)

4. Press Enter

---

## PART 12: CREATE YOUR DEVELOPMENT FOLDER

Before starting any project, you need an organized place to keep all your code.

### Step 1: Create Your Development Folder

**On Windows:**

1. Press **Windows + E** to open File Explorer
2. In the left sidebar, click **"This PC"** or **"Computer"**
3. Double-click your main drive (usually **"C:"**)
4. Double-click **"Users"**
5. Double-click your username folder (the one with your name)
6. You should now see folders like Documents, Downloads, Music, Pictures, etc.
7. Right-click in the empty space
8. Click **"New"** → **"Folder"**
9. Type exactly: **development**
10. Press Enter

**On Mac:**

1. Press **Command + Space** to open Spotlight
2. Type: **Finder**
3. Press Enter
4. In the Finder menu at the top, click **"Go"**
5. Click **"Home"** (or press Shift + Command + H)
6. You should see folders like Documents, Downloads, Music, Pictures, etc.
7. Right-click in the empty space
8. Click **"New Folder"**
9. Type exactly: **development**
10. Press Enter

**Your development folder is now at:**
- Windows: `C:\Users\YourName\development`
- Mac: `/Users/YourName/development`

This is where ALL your projects will live from now on!

---

## PART 13: CHOOSE YOUR PROJECT TYPE & FRAMEWORK

Before building anything, you need to decide what you're making. This determines which framework Claude will use.

### Understanding Frameworks

A framework is like a foundation and toolset for building. Different projects need different frameworks:

#### **Next.js with TypeScript** (RECOMMENDED for Web)
**What it is:** The most popular React framework for building modern websites and web applications  
**Best for:**
- Business websites
- Landing pages
- Blogs & content sites
- E-commerce stores
- Web dashboards
- SaaS products (software accessed through browsers)
- Admin panels
- Social media platforms
- Any app that runs in a web browser

**Platform:** Works on ALL devices through web browsers (desktop, tablet, mobile)  
**Examples:** Airbnb, TikTok (web version), Netflix (web version), Notion, Vercel's homepage  

**Why TypeScript?**
- Catches errors BEFORE you run your code
- Makes Claude's suggestions more accurate
- Required by most modern packages
- Industry standard for professional projects
- Better autocomplete in Cursor

**Pros:**
- ✅ Easy to deploy (just push to Vercel)
- ✅ Works on all devices through browsers
- ✅ Great for SEO (Google can find your site)
- ✅ Huge ecosystem of tools and packages
- ✅ Can be indexed by search engines
- ✅ No app store approval needed

**Cons:**
- ❌ Not a "native" app (can't be in App Store/Play Store)
- ❌ Can't access phone hardware easily (camera, GPS, etc.)
- ❌ Requires internet connection to use

---

#### **React Native (Expo)** (For Mobile & Desktop Apps)
**What it is:** A framework for building native mobile apps that work on iOS, Android, AND desktop  
**Best for:**
- iPhone and Android apps
- Apps that need phone features (camera, GPS, push notifications, biometrics)
- Apps that work offline
- Apps you want in App Store and Play Store
- Cross-platform apps (same code for iOS, Android, web, and desktop)

**Platform:** iOS, Android, Web (PWA), Windows, macOS, Linux  
**Examples:** Instagram, Discord (mobile), Facebook, Uber Eats, Shopify mobile app  

**Pros:**
- ✅ Real native mobile apps
- ✅ Can access ALL phone features (camera, location, contacts, etc.)
- ✅ Can work offline
- ✅ Can publish to App Store and Play Store
- ✅ Same codebase works on iOS, Android, AND desktop (with Expo)
- ✅ Feels faster and more responsive than web

**Cons:**
- ❌ More complex to test (need phone or simulator)
- ❌ App store approval process (can take days/weeks)
- ❌ Harder to deploy and update
- ❌ Users must download and install

---

#### **React** (Plain)
**What it is:** Just the React library without framework extras  
**Best for:**
- Very simple single-page apps
- Learning React basics
- Embedding into existing websites
- Chrome extensions

**Examples:** Simple calculator, tic-tac-toe game, portfolio page  

**Pros:**
- ✅ Lightweight and simple
- ✅ Good for learning

**Cons:**
- ❌ Missing important features (routing, API handling, optimization)
- ❌ You'll probably need to add Next.js features anyway

**Recommendation:** Just use Next.js instead - it includes everything React has plus more

---

#### **Python/FastAPI or Flask**
**What it is:** Backend frameworks for building APIs and data processing  
**Best for:**
- REST APIs that your frontend talks to
- AI/ML applications (ChatGPT-like apps)
- Data analysis and processing
- Web scraping and automation
- Microservices

**Examples:** AI chatbot backend, recommendation engine, data pipeline  

**Pros:**
- ✅ Best language for AI/ML (works with OpenAI, Anthropic, etc.)
- ✅ Simple syntax, beginner-friendly
- ✅ Great for data science

**Cons:**
- ❌ Just the backend - you still need a frontend (Next.js)
- ❌ Not great for mobile apps

---

### Quick Decision Tree

Ask yourself these questions in order:

#### 1. **Does it need to be in the App Store or Play Store?**
   - **YES** → Use **React Native (Expo)**
   - **NO** → Continue to question 2

#### 2. **Does it need phone hardware features?**
   (Camera, GPS, push notifications, offline mode, biometric auth)
   - **YES** → Use **React Native (Expo)**
   - **NO** → Continue to question 3

#### 3. **Will people use it in a web browser?**
   (Website, web app, dashboard, SaaS product)
   - **YES** → Use **Next.js with TypeScript**
   - **NO** → Continue to question 4

#### 4. **Is it mainly AI, automation, or data processing?**
   - **YES** → Use **Python/FastAPI** (+ Next.js frontend if needed)
   - **NO** → Default to **Next.js with TypeScript**

---

### Framework Recommendations by Project Type

| Project Type | Framework | Why |
|-------------|-----------|-----|
| Business website | **Next.js + TypeScript** | SEO, easy deployment, professional |
| E-commerce store | **Next.js + TypeScript** | Payment integrations, SEO |
| SaaS dashboard | **Next.js + TypeScript** | Complex UI, auth, database |
| Mobile app | **React Native Expo** | Native features, app stores |
| AI chatbot | **Next.js + Python** | Next.js for UI, Python for AI |
| Fitness tracker app | **React Native Expo** | GPS, offline mode, notifications |
| Social media platform | **Next.js + TypeScript** | Web-first, then mobile later |
| Game | **React Native Expo** | Better performance on mobile |
| Admin panel | **Next.js + TypeScript** | Desktop-optimized, data tables |
| Portfolio site | **Next.js + TypeScript** | Simple, fast, SEO-friendly |

---

### For Your First Project

**We strongly recommend starting with Next.js + TypeScript because:**
1. ✅ Easiest to see your work (just open browser)
2. ✅ Deploy to internet in 2 minutes with Vercel
3. ✅ No app store approvals
4. ✅ Works on all devices
5. ✅ Largest community for help
6. ✅ Most jobs use Next.js
7. ✅ TypeScript catches mistakes early

**Start with Next.js, then learn React Native for your second project!**

---

## PART 14: UNDERSTANDING KEY PACKAGES & TOOLS

When building with Next.js or React Native, you'll use several popular packages that make development faster and better. Here's what they do:

### Core Styling Tools

#### **Tailwind CSS** ⭐ (Essential)
**What it is:** A utility-first CSS framework for styling  
**Why you need it:** Instead of writing custom CSS, you use pre-made classes  

**Example:**
```jsx
// Instead of writing CSS files:
<button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
  Click Me
</button>
```

**Benefits:**
- ✅ No CSS files to manage
- ✅ Consistent design system
- ✅ Fast to build UI
- ✅ Industry standard

**When to use:** Every Next.js and React Native (with NativeWind) project  
**Claude knows:** Yes - Claude is excellent with Tailwind

---

#### **shadcn/ui** ⭐ (Highly Recommended)
**What it is:** Beautiful, accessible pre-built components  
**Why you need it:** Don't build buttons, modals, forms from scratch  

**What's included:**
- Buttons, forms, modals, dropdowns
- Data tables, charts, cards
- Navigation menus, tabs, accordions
- Toast notifications, dialogs, tooltips
- All fully customizable with Tailwind

**Example components:** Dialog, Button, Card, Table, Select, Checkbox, Input, Textarea, Sheet, Tabs, Toast, Dropdown Menu, Avatar, Badge...

**Benefits:**
- ✅ Professional-looking UI instantly
- ✅ Accessible (works for disabled users)
- ✅ Customizable to your brand
- ✅ Copy-paste components into your project (you own the code)

**When to use:** Any Next.js project that needs a professional UI  
**Claude knows:** Yes - Claude can install and use all shadcn/ui components  
**Website:** https://ui.shadcn.com

---

#### **Framer Motion** (For Animations)
**What it is:** Animation library for React and React Native  
**Why you need it:** Add smooth animations and transitions  

**What you can animate:**
- Page transitions
- Hover effects
- Scroll animations
- Loading states
- Drag and drop
- Gesture-based interactions

**Example:**
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content fades in and slides up!
</motion.div>
```

**Benefits:**
- ✅ Makes apps feel premium
- ✅ Simple API
- ✅ Performance optimized

**When to use:** When you want polished, animated UIs (landing pages, portfolios, marketing sites)  
**Claude knows:** Yes - Claude can create complex animations  
**Website:** https://www.framer.com/motion/

---

### AI & Backend Tools

#### **Vercel AI SDK** ⭐ (For AI Apps)
**What it is:** Official SDK for building AI apps (chatbots, AI features)  
**Why you need it:** Easy integration with OpenAI, Anthropic, and other AI providers  

**What it does:**
- Streaming AI responses (like ChatGPT)
- Function/tool calling
- Multi-step AI workflows
- Works with any LLM (Claude, GPT-4, Llama, etc.)

**Use cases:**
- AI chatbots
- Content generation
- AI assistants
- Code generation
- Image analysis

**Benefits:**
- ✅ Handles streaming automatically
- ✅ Works with Next.js Route Handlers
- ✅ React hooks for UI
- ✅ Built-in error handling

**When to use:** Any project with AI features  
**Claude knows:** Yes - Claude is expert with AI SDK  
**Website:** https://sdk.vercel.ai/docs

---

#### **Supabase Client** ⭐ (Essential)
**What it is:** JavaScript library to connect to your Supabase database  
**Why you need it:** Read/write data, authenticate users, upload files  

**What it does:**
- Database queries (like SQL but easier)
- User authentication (sign up, login, logout)
- File storage (upload images, PDFs, etc.)
- Real-time subscriptions (live updates)
- Row-level security

**When to use:** Every project that stores data  
**Claude knows:** Yes - Claude is excellent with Supabase  
**Website:** https://supabase.com/docs

---

### Other Common Packages

#### **React Hook Form**
**What it is:** Form handling library  
**Why:** Managing form state and validation is complex - this makes it easy  
**When to use:** Any app with forms (contact forms, sign up, surveys)  
**Claude knows:** Yes

---

#### **Zod**
**What it is:** TypeScript-first schema validation  
**Why:** Validate data from forms, APIs, etc. with great TypeScript support  
**When to use:** Pair with React Hook Form for bulletproof forms  
**Claude knows:** Yes

---

#### **Recharts or Chart.js**
**What it is:** Chart and graph libraries  
**Why:** Display data visually (line charts, bar charts, pie charts)  
**When to use:** Dashboards, analytics, data visualization  
**Claude knows:** Yes - both libraries

---

#### **Lucide Icons** or **React Icons**
**What it is:** Icon libraries with thousands of icons  
**Why:** Every app needs icons (menu, close, search, user, etc.)  
**When to use:** Every project  
**Claude knows:** Yes - especially Lucide (works great with shadcn/ui)

---

#### **date-fns** or **Day.js**
**What it is:** Date/time manipulation libraries  
**Why:** JavaScript dates are painful - these make it easy  
**When to use:** Any app showing dates (calendars, timestamps, scheduling)  
**Claude knows:** Yes

---

#### **Zustand** or **Jotai** (State Management)
**What it is:** Simple state management for React  
**Why:** Share data between components without prop drilling  
**When to use:** Medium to large apps with lots of shared state  
**Claude knows:** Yes

---

### Typical Tech Stack Examples

#### **Modern SaaS Application:**
```
Framework: Next.js 14+ with TypeScript
Database: Supabase (PostgreSQL)
Styling: Tailwind CSS
Components: shadcn/ui
Forms: React Hook Form + Zod
Icons: Lucide Icons
Deployment: Vercel
```

#### **AI-Powered App:**
```
Framework: Next.js 14+ with TypeScript
AI: Vercel AI SDK + Anthropic Claude
Database: Supabase
Styling: Tailwind CSS
Components: shadcn/ui
Animations: Framer Motion
Deployment: Vercel
```

#### **Mobile App:**
```
Framework: React Native (Expo)
Database: Supabase
Styling: NativeWind (Tailwind for React Native)
Navigation: Expo Router
Icons: Expo Icons
Forms: React Hook Form + Zod
```

#### **Landing Page:**
```
Framework: Next.js 14+ with TypeScript
Styling: Tailwind CSS
Components: shadcn/ui
Animations: Framer Motion
Forms: React Hook Form
Deployment: Vercel
```

---

### How Claude Uses These Packages

When you tell Claude to build something, it automatically:
1. **Installs the right packages** for your project type
2. **Configures them properly** (Tailwind config, TypeScript, etc.)
3. **Uses best practices** for each package
4. **Combines them effectively** (e.g., shadcn/ui + Tailwind + Framer Motion)

**You don't need to know all these packages upfront!** Just tell Claude what you want to build, and it will choose and set up the right tools.

**Example prompts:**
- "Add smooth scroll animations using Framer Motion"
- "Create a contact form with validation using React Hook Form and Zod"
- "Add a data table with sorting using shadcn/ui Table component"
- "Integrate Claude AI using Vercel AI SDK for a chatbot"
- "Add authentication with Supabase Auth"

Claude knows when and how to use each package!

---

## PART 15: CREATE YOUR GITHUB REPOSITORY

Before writing any code, create a place on GitHub to save it.

### Step 1: Create a New Repository

1. Go to **https://github.com**
2. Make sure you're logged in
3. Click the **+** icon in the top-right corner
4. Click **"New repository"**
5. Fill out the form:
   - **Repository name:** Type your app name in lowercase with dashes
     - Good: `my-awesome-app`, `fitness-tracker`, `recipe-finder`
     - Bad: `My Awesome App`, `app123`, `test`
   - **Description:** Brief description of your project (optional but recommended)
     - Example: "A recipe finder app with AI recommendations"
   - **Public or Private:** 
     - **Public** - Anyone can see your code (free)
     - **Private** - Only you can see it (also free)
     - Choose **Public** for learning projects, **Private** for business ideas
   - **Initialize repository:** Leave ALL boxes UNCHECKED
     - ⬜ Do NOT check "Add a README file"
     - ⬜ Do NOT check "Add .gitignore"
     - ⬜ Do NOT check "Choose a license"
6. Click the green **"Create repository"** button

### Step 2: Save Your Repository URL

1. After creating, you'll see a page with setup instructions
2. At the top, you'll see a URL that looks like:
   - `https://github.com/yourusername/your-app-name.git`
3. Click the **copy button** next to this URL (or write it down)
4. You'll need this in the next step!

**Don't close this page yet** - keep it open in a browser tab.

---

## PART 16: SET UP YOUR PROJECT LOCALLY

Now let's create a folder on your computer that matches your GitHub repo.

### Step 1: Create Your Project Folder

**On Windows:**

1. Press **Windows + E** to open File Explorer
2. Navigate to your development folder:
   - Go to `C:\Users\YourName\development`
3. Right-click in the empty space
4. Click **"New"** → **"Folder"**
5. Type the EXACT SAME NAME as your GitHub repo
   - If your repo is `my-awesome-app`, name the folder `my-awesome-app`
6. Press Enter

**On Mac:**

1. Press **Command + Space**, type "Finder", press Enter
2. Navigate to your development folder:
   - Go → Home → development
3. Right-click in empty space
4. Click **"New Folder"**
5. Type the EXACT SAME NAME as your GitHub repo
   - If your repo is `my-awesome-app`, name the folder `my-awesome-app`
6. Press Enter

### Step 2: Open Your Project in Cursor

1. Open Cursor
2. Click **"File"** → **"Open Folder"** (or "Open..." on Mac)
3. Navigate to your development folder
4. Select your new project folder (e.g., `my-awesome-app`)
5. Click **"Open"** or **"Select Folder"**
6. Cursor will now show your empty project folder

### Step 3: Give Claude Code Access to GitHub

Now we'll connect Claude Code to your GitHub account so it can automatically save your work.

1. In Cursor, press **Ctrl + `** (Control + backtick on Windows) or **Cmd + `** (on Mac)
   - This opens the integrated terminal at the bottom
2. If terminal doesn't open, click **"Terminal"** → **"New Terminal"** from the top menu
3. Type this command:
```
git config --global user.name "YourGitHubUsername"
```
(Replace YourGitHubUsername with your actual GitHub username)

4. Press Enter

5. Type this command:
```
git config --global user.email "youremail@example.com"
```
(Replace with the email you used for GitHub)

6. Press Enter

7. Now we'll save your GitHub token so Claude can use it. Type:

**On Windows:**
```
git config --global credential.helper wincred
```

**On Mac:**
```
git config --global credential.helper osxkeychain
```

8. Press Enter

**Note:** The first time Claude tries to push code to GitHub, you'll be asked for credentials:
- **Username:** Your GitHub username
- **Password:** Use your **GitHub Personal Access Token** (from your credentials document), NOT your GitHub password

---

## PART 17: YOUR FIRST VIBE CODING SESSION

Now comes the magic! You'll tell Claude what to build, and it will create everything for you.

### Step 1: Start a Conversation with Claude

1. In Cursor, make sure your project folder is open
2. Press **Ctrl + L** (Windows) or **Cmd + L** (Mac)
   - This opens Claude's chat panel on the right side
3. If that doesn't work, press **Ctrl + Shift + P** (Windows) or **Cmd + Shift + P** (Mac)
4. Type: **Claude: Open Chat**
5. Press Enter

### Step 2: Create Your Project Prompt

This is where you describe your entire project. Claude will build the complete scaffolding (structure) for you.

Here's a template - customize it for your project:

```
I want to create a [TYPE OF APP] called [APP NAME] using [FRAMEWORK].

Project Description:
[Describe what your app does - 2-3 sentences]

Key Features:
- [Feature 1]
- [Feature 2]
- [Feature 3]
- [Feature 4]

Tech Stack:
- Framework: [Next.js / React Native Expo / etc.]
- Database: Supabase
- Styling: Tailwind CSS
- Deployment: Vercel (for web) or Expo (for mobile)

Please help me:
1. Initialize this project with all necessary configuration files
2. Set up the folder structure following best practices
3. Install all required dependencies
4. Create a basic layout/navigation structure
5. Set up Supabase connection with environment variables
6. Create a .env.example file showing what environment variables are needed
7. Initialize Git and make the first commit
8. Create a README.md with setup instructions

My Supabase credentials (for .env.example template):
- Project URL: [paste from your credentials document]
- Anon Key: [paste from your credentials document]

After setup, I want to be able to run the development server and see a basic working app.
```

### Step 3: Example Prompts for Different Projects

#### Example 1: Next.js Landing Page with Animations
```
I want to create a landing page website called "fitness-coach-site" using Next.js with TypeScript.

Project Description:
A modern landing page for a fitness coaching business with smooth animations and professional design. It should have a hero section, services showcase, testimonials, and contact form. The site should be fully responsive and look professional.

Key Features:
- Animated hero section with call-to-action button
- Services section with 3-4 service cards that animate on scroll
- Testimonials carousel with smooth transitions
- Contact form with validation that saves to Supabase
- Mobile-responsive design
- Smooth page transitions and hover effects

Tech Stack:
- Framework: Next.js 14+ (App Router) with TypeScript
- Database: Supabase
- Styling: Tailwind CSS
- Components: shadcn/ui (Button, Card, Input, Textarea, Form components)
- Animations: Framer Motion for scroll animations and transitions
- Forms: React Hook Form with Zod validation
- Icons: Lucide Icons
- Deployment: Vercel

Please help me:
1. Initialize this Next.js project with TypeScript
2. Set up the folder structure following Next.js App Router best practices
3. Install and configure all required dependencies (Tailwind, shadcn/ui, Framer Motion, Supabase client, React Hook Form, Zod)
4. Set up shadcn/ui with the components I'll need
5. Create a basic page layout with navigation
6. Set up Supabase connection with environment variables
7. Create a components folder with reusable component structure
8. Create a .env.local.example file showing required environment variables
9. Initialize Git and make the first commit
10. Create a comprehensive README.md with setup instructions

My Supabase credentials (for .env.local.example template):
- Project URL: https://xxxxx.supabase.co
- Anon Key: your-anon-key-here

After setup, I want to be able to run 'npm run dev' and see a basic working homepage with navigation.
```

#### Example 2: React Native Mobile App with Auth
```
I want to create a mobile app called "daily-habit-tracker" using React Native Expo.

Project Description:
A simple habit tracking app where users can create daily habits, check them off, and see their streak. Users should be able to sign in with email or social auth and have their data synced across devices using Supabase.

Key Features:
- User authentication (email/password + social auth)
- Create, edit, and delete habits
- Check off daily habits with satisfying animations
- View habit streaks and statistics
- Push notifications for daily reminders
- Dark mode support
- Offline functionality with sync when online

Tech Stack:
- Framework: React Native (Expo) with TypeScript
- Database: Supabase (with real-time subscriptions)
- Navigation: Expo Router
- Styling: NativeWind (Tailwind for React Native)
- Animations: Reanimated for smooth native animations
- Auth: Supabase Auth
- Icons: Expo Icons
- Notifications: Expo Notifications

Please help me:
1. Initialize this Expo project with TypeScript
2. Set up the folder structure following Expo Router best practices
3. Install all required dependencies (Supabase, Expo Router, NativeWind, Reanimated, Expo Notifications)
4. Configure NativeWind for Tailwind styling
5. Create navigation structure (auth stack + main app tabs)
6. Set up Supabase connection and auth flow
7. Create database schema suggestions for habits table
8. Set up environment variables
9. Create a .env.example file
10. Initialize Git and make the first commit
11. Create a README.md with setup instructions including how to run on iOS/Android

My Supabase credentials (for .env.example template):
- Project URL: https://xxxxx.supabase.co
- Anon Key: your-anon-key-here

After setup, I want to be able to run 'npx expo start' and see a working authentication flow in Expo Go app.
```

#### Example 3: Full-Stack SaaS Dashboard with AI
```
I want to create a business dashboard called "sales-analytics-dashboard" using Next.js with AI-powered insights.

Project Description:
A comprehensive dashboard for tracking sales metrics with interactive charts, data tables, and AI-powered insights. Users can sign in, view analytics, filter data by date range, and ask questions about their data in natural language. Admin users can add new sales data.

Key Features:
- User authentication with role-based access (admin/user roles)
- Interactive charts (line, bar, pie charts) with animations
- Data tables with sorting, filtering, and pagination
- Date range selector with calendar picker
- AI chatbot that answers questions about sales data
- Add/edit/delete sales records (admin only)
- Real-time updates when data changes
- Responsive design with sidebar navigation
- Dark mode toggle

Tech Stack:
- Framework: Next.js 14+ (App Router) with TypeScript
- Database: Supabase (PostgreSQL)
- AI: Vercel AI SDK + Anthropic Claude API
- Charts: Recharts
- Styling: Tailwind CSS
- Components: shadcn/ui (Table, Dialog, Button, Form, Calendar, Select, etc.)
- Forms: React Hook Form with Zod validation
- Authentication: Supabase Auth with Row Level Security
- Icons: Lucide Icons
- Date handling: date-fns
- Deployment: Vercel

Please help me:
1. Initialize this Next.js project with TypeScript
2. Set up the folder structure with app router (app/, components/, lib/, types/)
3. Install all dependencies (Supabase, AI SDK, Recharts, shadcn/ui, React Hook Form, Zod, date-fns)
4. Set up shadcn/ui with all necessary components
5. Create authentication flow (login, signup, protected routes with middleware)
6. Set up Supabase connection and suggest database schema for:
   - users table with roles
   - sales_records table
   - Row Level Security policies
7. Create AI chat API route using Vercel AI SDK
8. Create layout with responsive sidebar navigation
9. Set up environment variables for Supabase and Anthropic API
10. Create a .env.local.example file
11. Initialize Git and make the first commit
12. Create a comprehensive README.md with:
    - Setup instructions
    - Database migration guide
    - Environment variables needed
    - How to run development server

My credentials (for .env.local.example template):
- Supabase Project URL: https://xxxxx.supabase.co
- Supabase Anon Key: your-anon-key-here
- Anthropic API Key: your-claude-api-key-here

After setup, I want to be able to run 'npm run dev' and see a working authentication flow, dashboard layout with sidebar, and a functional AI chat interface.
```

#### Example 4: Simple Portfolio Site
```
I want to create a personal portfolio website called "john-doe-portfolio" using Next.js with TypeScript.

Project Description:
A clean, modern portfolio site to showcase my work as a developer/designer. Should have smooth animations, a project gallery, an about section, and a contact form.

Key Features:
- Animated hero section with my name and title
- About section with bio and skills
- Project gallery with filterable categories
- Individual project pages with details
- Contact form that saves to Supabase
- Blog section (optional)
- Dark/light mode toggle
- Smooth page transitions

Tech Stack:
- Framework: Next.js 14+ (App Router) with TypeScript
- Styling: Tailwind CSS
- Components: shadcn/ui
- Animations: Framer Motion
- Forms: React Hook Form + Zod
- Database: Supabase (for contact form submissions)
- Icons: Lucide Icons
- Deployment: Vercel

Please help me:
1. Initialize Next.js with TypeScript
2. Install Tailwind, shadcn/ui, Framer Motion, Supabase client
3. Set up project structure with best practices
4. Create page layouts for home, about, projects, contact
5. Set up Supabase for contact form storage
6. Configure shadcn/ui with needed components
7. Set up environment variables
8. Initialize Git
9. Create README.md

My Supabase credentials:
- Project URL: https://xxxxx.supabase.co
- Anon Key: your-anon-key-here

After setup, I want to see a beautiful homepage with working navigation.
```

---

### Step 4: Send Your Prompt to Claude

1. Copy one of the example prompts above (or create your own)
2. Customize it with your project details
3. Paste your actual Supabase URL and Anon Key
4. Paste it into the Claude chat in Cursor
5. Press **Enter** or click the **Send** button
6. Wait for Claude to respond (usually 30-60 seconds)

### Step 5: Let Claude Build Your Project

Claude will now:
1. Analyze your requirements
2. Create all necessary files and folders
3. Install dependencies
4. Set up configuration
5. Create initial components
6. Initialize Git
7. Make the first commit

**You'll see Claude doing work in the terminal** - lots of commands running, files being created, dependencies being installed.

**This can take 2-5 minutes** - be patient!

### Step 6: Connect Your Project to GitHub

After Claude finishes setting up, you need to connect your local project to the GitHub repo you created.

1. In the terminal at the bottom of Cursor, type:
```
git remote add origin https://github.com/yourusername/your-repo-name.git
```
(Replace with your actual GitHub URL from earlier)

2. Press Enter

3. Type:
```
git branch -M main
```

4. Press Enter

5. Type:
```
git push -u origin main
```

6. Press Enter

7. If prompted for credentials:
   - Username: Your GitHub username
   - Password: Your **GitHub Personal Access Token** (from credentials document)

8. Wait for upload to complete

9. Go back to your GitHub repo in your browser and refresh - you should see all your code!

### Step 7: Run Your Project

Now let's see your app running!

**For Next.js projects:**
1. In the terminal, type:
```
npm run dev
```
2. Press Enter
3. Wait 10-20 seconds for the server to start
4. You'll see a message like: "Local: http://localhost:3000"
5. Hold **Ctrl** (or **Cmd** on Mac) and click that link
6. Your browser will open showing your app!

**For React Native (Expo) projects:**
1. In the terminal, type:
```
npx expo start
```
2. Press Enter
3. Wait 20-30 seconds
4. A QR code will appear in the terminal
5. On your phone:
   - **iPhone:** Download "Expo Go" from App Store, open it, scan QR code with iPhone camera
   - **Android:** Download "Expo Go" from Play Store, open it, tap "Scan QR Code"
6. Your app will load on your phone!

**If you see your app working, congratulations! You just did vibe coding! 🎉**

---

## TROUBLESHOOTING COMMON ISSUES

### "Command not found" errors

**Problem:** When you type `node --version` or `npm install`, you get "command not found"

**Solution:**
1. Close and reopen your terminal/command prompt
2. Try the command again
3. If still not working, restart your computer and try again
4. If still failing, reinstall Node.js following the instructions again

### Claude Code won't authenticate

**Problem:** When you type `claude auth`, it doesn't work or says API key is invalid

**Solution:**
1. Go back to claude.ai
2. Generate a new API token following PART 4, Step 3
3. Make sure you copy the ENTIRE token (they're very long)
4. Try authenticating again with the new token

### Cursor extension not appearing

**Problem:** You can't find the Claude commands in Cursor

**Solution:**
1. Click the Extensions icon in Cursor
2. Search for "Claude Code"
3. Click "Uninstall" if it's installed
4. Click "Install" again
5. Reload Cursor (close and reopen)
6. Try the keyboard shortcut Ctrl/Cmd + Shift + P again

### Can't push to GitHub

**Problem:** Getting "authentication failed" or "permission denied" when pushing to GitHub

**Solution:**
1. Make sure you're using your GitHub Personal Access Token as the password, NOT your GitHub password
2. The token should start with "ghp_"
3. Copy it directly from your credentials document
4. Try the push command again
5. If still failing, create a new Personal Access Token in GitHub settings

### "Git is not recognized" error

**Problem:** Terminal says git is not recognized or git command not found

**Solution:**
1. Make sure Git is installed (follow PART 11 again if needed)
2. Restart your terminal or Cursor
3. Restart your computer
4. Try the command again

### Can't connect to Supabase

**Problem:** Your app can't connect to your database

**Solution:**
1. Double-check you copied the correct API URL (should start with https://)
2. Make sure you copied the anon/public key
3. Check there are no extra spaces before or after the keys in your .env file
4. Make sure your .env file is named exactly `.env.local` for Next.js projects
5. Restart your development server after adding environment variables

### Development server won't start

**Problem:** `npm run dev` or `npx expo start` shows errors

**Solution:**
1. Make sure you're in the correct project folder in terminal
2. Try deleting `node_modules` folder and running `npm install` again
3. Check if another app is already running on that port (close it)
4. Look at the error message and ask Claude to help fix it
5. Make sure all dependencies installed correctly (check for red error messages during npm install)

---

## WHAT'S NEXT?

Now that you have everything set up and your first project scaffolded, here's how to keep building:

### Building Your First Features

Once you have your project running, you can ask Claude to add features one at a time:

**Example requests:**
- "Add a contact form component that saves submissions to Supabase"
- "Create a user authentication flow with email and password"
- "Add a dashboard page that displays data from Supabase in a table"
- "Create a mobile navigation menu that slides in from the left"
- "Add dark mode toggle functionality"

**Pro tip:** Build features incrementally. Get one thing working before adding the next!

### Starting Your Next Project

To start a new project, follow this quick workflow:

1. **Create a new GitHub repo** with your new project name
2. **Create a matching folder** in your `development` folder
3. **Open that folder** in Cursor
4. **Tell Claude** what you want to build (use the prompt templates from PART 17)
5. **Let Claude scaffold** the entire project
6. **Connect to GitHub** and push your first commit
7. **Start building** features!

You'll get faster each time you do this!

### Great First Projects to Try

1. **Personal Portfolio** - Showcase your work and skills
2. **Todo List App** - Learn CRUD operations (Create, Read, Update, Delete)
3. **Blog with CMS** - Practice content management
4. **Recipe App** - Work with external APIs
5. **Habit Tracker** - Build with authentication and data persistence

### Deploying Your App

Once you're ready to put your app online:

**For Next.js (web apps):**
1. Make sure your code is pushed to GitHub
2. Go to vercel.com and sign in
3. Click "New Project"
4. Select your GitHub repository
5. Add your Supabase environment variables
6. Click "Deploy"
7. Your app is live in 2-3 minutes!

**For React Native (mobile apps):**
1. Build with `eas build` (ask Claude to help set this up)
2. Submit to App Store and/or Play Store
3. This process is more complex - Claude can guide you through it

### Learning Resources

- **Ask Claude anything!** - Your best resource is right in Cursor
- **Next.js Docs:** https://nextjs.org/docs
- **Supabase Tutorials:** https://supabase.com/docs/guides/getting-started
- **Vercel Documentation:** https://vercel.com/docs
- **Expo Docs:** https://docs.expo.dev (for mobile apps)
- **Cursor Tips:** https://cursor.sh/docs

### Pro Tips for Vibe Coding Success

1. **Be specific with Claude** - Instead of "make a website," say "create a landing page with a hero section, three feature cards with icons, and a contact form that saves to Supabase"

2. **Ask Claude to explain** - If you don't understand something, ask "Can you explain what this code does and why we need it?"

3. **Iterate and improve** - Build something basic first, then ask Claude to add features one at a time

4. **Test as you go** - Run your dev server frequently to catch issues early

5. **Commit often** - Save your work to GitHub after each working feature (ask Claude: "help me commit this feature to git")

6. **Read Claude's responses** - Claude often explains what it's doing and why - this helps you learn

7. **Save error messages** - If something breaks, copy the entire error message and paste it to Claude

8. **Start small** - Your first project should take days, not weeks

---

## SAFETY REMINDERS

⚠️ **Never share your API keys, tokens, or passwords with anyone**

⚠️ **Don't commit your credentials document to GitHub** - Keep it only on your computer

⚠️ **Don't commit .env or .env.local files to GitHub** - These should be in .gitignore (Claude will set this up for you)

⚠️ **CRITICAL: Never put your Supabase Service Role Key in frontend code or public repos** - This key bypasses all security! Only use it in server-side code or backend functions.

⚠️ **Use the Anon Key in your frontend** - It's designed to be public and works with Supabase's Row Level Security

⚠️ **Keep your credentials document in a safe place** and back it up somewhere secure

⚠️ **Your GitHub Personal Access Token is as powerful as your password** - treat it the same way

---

## FINAL CHECKLIST

Before you start your first project, make sure you have:

**Setup Complete:**
- [ ] Node.js installed and working (`node --version` shows a version number)
- [ ] Cursor installed and opens correctly
- [ ] Git installed and configured with your name/email
- [ ] Claude account with Pro subscription ($17+/month)
- [ ] Claude API token copied to your credentials document
- [ ] Claude Code installed via npm (`claude --version` works)
- [ ] Claude Code extension installed in Cursor
- [ ] Claude Code authenticated with your API token

**Accounts Created:**
- [ ] Supabase account created
- [ ] Supabase organization and project created
- [ ] Supabase API URL, anon key, service role key, and access token all saved
- [ ] GitHub account created
- [ ] GitHub Personal Access Token created and saved
- [ ] Vercel account created (connected to GitHub)
- [ ] (Optional) Domain name purchased from GoDaddy

**Project Structure:**
- [ ] "development" folder created in your home directory
- [ ] You know what type of app you want to build
- [ ] You've chosen a framework (Next.js, React Native, etc.)
- [ ] You've created a GitHub repository for your project
- [ ] You've created a matching local project folder
- [ ] Your project folder is open in Cursor

**Credentials Saved:**
- [ ] Credentials document saved safely with all information filled in
- [ ] Claude API Token saved
- [ ] GitHub Personal Access Token saved
- [ ] Supabase URL, anon key, service role key, and access token saved
- [ ] All passwords documented securely

**If you checked all boxes, you're ready to start building! 🎉**

---

## NEED HELP?

If you get stuck:

1. **Check the Troubleshooting section** above for common issues
2. **Ask Claude directly** - Open Claude Code in Cursor and describe your problem
3. **Double-check your API keys** - Most issues come from incorrect or expired keys
4. **Restart your computer** - Sometimes a fresh start fixes configuration issues
5. **Review each step** - Go back through the setup guide and verify you didn't miss anything

Remember: Everyone starts as a beginner. Take your time with each step, and soon you'll be building amazing things!

Happy vibe coding! 🚀