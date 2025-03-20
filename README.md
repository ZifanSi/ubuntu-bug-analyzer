# Ubuntu Feature Tracker

## Overview
Ubuntu updates are supposed to improve the system, but sometimes they introduce new problems. Users often find that features they relied on suddenly stop working. Some even regret updating and wish they could go back to an older version.

**Ubuntu Feature Tracker** is a web-based tool that helps users compare key features between different Ubuntu versions. It tracks:

- Features that **stopped working** in a newer version
- Features that **remained stable** across versions
- **New features** introduced in updates
- A **summary of known issues** reported for each version

This helps users make informed decisions before upgrading.

## Why It Matters
Ubuntu updates sometimes cause unexpected bugs and frustrations. Here’s what **five different users** reported after upgrading from Ubuntu 20.04 to 20.04.1:

- **User #1:** *"After installing without trial, the root partition cannot be searched when booting (cannot boot)."*
- **User #2:** *"After installing the system, the screen will go black when entering the password. You need to go to tty to install the graphics driver and restart the gdm service."*
- **User #3:** *"After installing updates and restarting the gdm service or restarting, the top status bar will become smaller (to be precise, all the text on the gnome desktop will become smaller)."*
- **User #4:** *"There are also some small bugs, such as the application list may freeze when closing the folder, and you need to close gnome-session (signal 10)."*
- **User #5:** *"To be honest, if I still had Iso, I would have installed it back long ago."*

These real-world frustrations show why a tool like Ubuntu Feature Tracker is needed.

## Features
- **Compare features across Ubuntu versions** to see what changed
- **Track which features broke, remained stable, or were newly introduced**
- **View a list of known issues** before upgrading
- **Help users decide whether an update is worth it**

## Getting Started
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/ubuntu-feature-tracker.git
   ```
2. Navigate to the project folder:
   ```sh
   cd ubuntu-feature-tracker
   ```
3. Install dependencies:
   ```sh
   npm install  # If using Node.js for frontend
   ```
4. Run the application:
   ```sh
   npm start  # Start the development server
   ```

## Contributing
Contributions are welcome! If you find a bug or want to suggest a feature, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
