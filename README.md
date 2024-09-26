# YouTube AdBlocker Chrome Extension

This Chrome extension blocks YouTube ads, including video ads, by using declarativeNetRequest and DOM manipulation.

## Features

- Blocks most of the YouTube video and display ads.
- Automatically skips YouTube video ads when they appear.

## Installation

Follow these steps to install the extension in your Chrome browser:

### Step 1: Download the Repository

1. Download the ZIP file of this repository.
2. Extract the ZIP file to a folder on your computer.

### Step 2: Enable Developer Mode in Chrome

Before you can install and test this Chrome extension, you need to enable **Developer Mode** in Chrome:

1. Open **Chrome** and type the following in the address bar:

   chrome://extensions/

2. Press **Enter** to open the Extensions management page.
3. In the top right corner, toggle the **Developer Mode** switch to turn it on.

   You will now be able to load unpacked Chrome extensions manually.

### Step 3: Load the Unpacked Extension

Now that Developer Mode is enabled, you can load the extension:

1. Click the **Load Unpacked** button that appears on the Extensions page after Developer Mode is enabled.
2. Navigate to the folder where you extracted the repository.
3. Select the folder and click **Open**.

The extension will now be installed in Chrome, and you should see the extension icon in the browser toolbar.

## How It Works

- The extension uses **declarativeNetRequest** to block known ad servers.
- It also includes a **content script** that monitors the DOM and removes ad containers from the page and automatically clicks the "Skip Ad" button.

### Rules Configuration

- The extension uses `rules.json` to define the ad-blocking rules, including domains such as `doubleclick.net`, `googlesyndication.com`, and others.
- The `contentScript.js` handles DOM manipulations to remove or hide ads that bypass the initial blocking.

## Usage

Once installed, the extension will automatically block YouTube ads and skip video ads as they appear. There is no user interaction needed.
