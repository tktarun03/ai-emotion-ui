# ai-emotion-ui

An AI-powered Emotion-Driven UI that adapts based on user emotions using Angular, StencilJS, WebAssembly, and AI-powered facial sentiment analysis.

## 🚀 Features
- **AI-powered Emotion-Driven UI** using **Angular & StencilJS**.
- **Real-time facial sentiment analysis** powered by **WebAssembly AI processing**.
- **Dynamically adjusts UI based on user mood (happy, sad, angry, neutral, excited)**.

## 📂 Project Structure
```
ai-emotion-ui/
│── stencil-emotion-ui/  # Stencil-powered Emotion UI components
│   ├── src/components/emotion-detector/  # AI-powered sentiment analysis UI
│   ├── stencil.config.ts  # Stencil configuration
│── angular-emotion-dashboard/  # Angular host for AI-powered Emotion UI
│   ├── src/app/  # Angular app with Emotion UI interactions
│   ├── package.json  # Angular dependencies
│── wasm-emotion-processing/  # WebAssembly AI-powered sentiment recognition (Rust-based)
│   ├── src/main.rs  # AI-driven emotion recognition model
│   ├── Cargo.toml  # Rust package file
│── README.md
```

## 🛠 Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/tktarun03/ai-emotion-ui.git
   cd ai-emotion-ui
   ```

2. Install dependencies and build Stencil Emotion UI:
   ```bash
   cd stencil-emotion-ui
   npm install
   npm run build
   ```

3. Link Stencil components to Angular:
   ```bash
   cd ../angular-emotion-dashboard
   npm install
   npm start
   ```

4. Compile the WebAssembly AI Emotion Processing module:
   ```bash
   cd ../wasm-emotion-processing
   cargo build --target wasm32-unknown-unknown --release
   ```

5. Open **http://localhost:4200** to experience AI-powered Emotion-Driven UI.

## 👨‍💻 About the Author

🚀 Created by [Arunkumar Thamilarasu](https://github.com/tktarun03) | UI Technical Architect | AI & Emotion UI Expert

## ⭐ Contribute & Support
- Fork & Star this repository! ⭐
- Submit Issues and PRs to improve AI-powered Emotion UI.

---
🎯 **Follow me on GitHub**: [@tktarun03](https://github.com/tktarun03)
