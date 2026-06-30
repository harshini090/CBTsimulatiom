# Interactive CBT Therapy Simulation

A state-of-the-art interactive web simulation of a Cognitive Behavioral Therapy (CBT) session. This project provides a realistic, branch-based dialogue system where users act as a clinical supervisor or student observing and guiding a therapy session with a patient named Sarah.

## Features & Enhancements

This project has been extensively upgraded with premium UI/UX features and dynamic interactions:

### 🌟 Premium UI / UX
* **Interactive Guided Tour:** Uses `driver.js` to provide an automatic, step-by-step spotlight tour of the interface. Clicking the background seamlessly advances the tour, while clicking the "X" button stops the tutorial to jump straight into the simulation.
* **Glassmorphic Design:** Sleek, modern styling featuring frosted glass overlays for the quizzes, controls cheat-sheet, and transcript panels.
* **Smooth Animations:** Side panels smoothly slide in and out of the view. The live transcript features a sophisticated fade-in animation exclusively for the newest, ongoing dialogue while maintaining instant rendering for historical messages.
* **Unobtrusive Overlays:** The transcript panel is docked cleanly to the left so it remains readable even while answering quizzes.

### 🧠 Dynamic AI Avatars & Mood Tracking
* **Live Mood Tracking:** A dynamic mood badge on the patient's video feed actively tracks and displays the patient's emotional state (e.g., *Anxious*, *Relieved*, *Vulnerable*, *Empathetic*).
* **Contextual Expressions:** Characters dynamically change their facial expressions based on the dialogue context. The project utilizes a library of AI-generated expressions (e.g., disappointed, irritated, hesitant, kind).
* **Smart State Retention:** The patient's emotional expression visually persists in the UI even while the therapist is speaking, providing realistic emotional continuity. 
* **Dynamic Talking Loops:** The therapist's video feed loops through specifically generated active speaking expressions (warm, serious, standard) during their turn, rather than defaulting to static or listening faces.
* **Precision Avatar Cropping:** Automated background cropping ensures all AI-generated patient avatars seamlessly integrate into the UI without distracting dark borders. All media assets were upgraded to PNG to eliminate rendering artifacts and support transparency.

### 🎮 Robust Navigation & Quiz Flow
* **Non-Linear Navigation:** Fully functional "Previous" and "Next" buttons allow students to navigate backward and forward through the conversation. The transcript accurately rebuilds itself dynamically based on the current history point.
* **Enhanced Quizzes:** 
  * Options are neatly labeled (A, B, C, D) with inline feedback directly underneath selected choices.
  * Successful answers provide dual branching options: "Try Again" (to explore other feedback) or "Continue".
  * Navigation buttons gracefully suspend and bypass the quiz overlay if the user decides to navigate away.

### ⚡ Advanced Interactivity & Keyboard Shortcuts
* **Power User Navigation:** Full keyboard shortcut support. Users can press **Left/Right Arrows** to jump between dialogue nodes, and the **Spacebar** to toggle Play/Pause, keeping the simulation fluid and accessible.
* **Smart Keyboard Safeguards:** Keyboard navigation automatically disables when interacting with most popups or end screens. However, users can still press the **Left Arrow** key while a knowledge check is displayed to immediately revisit the previous dialogue context without closing the popup.
* **Select-All-That-Apply:** Knowledge checks now natively support complex multi-select answers, instantly adapting into checkbox layouts for nuanced clinical questions.
* **Always-On "Continue":** Users can now choose to move on from a knowledge check even after reading the feedback for an incorrect choice, ensuring they are never forced into "guessing until correct."

### 📝 Comprehensive Final Assessment
* **End-of-Scenario Evaluation:** A focused 5-question multiple-choice assessment seamlessly integrates at the end of the simulation dialogue, specifically evaluating CBT interventions, cognitive distortions, and collaborative empiricism.
* **Strict Validation & Immediate Feedback:** Students must answer all questions before submitting. Upon submission, they receive instant, color-coded feedback (green for correct, red for incorrect) explaining why each answer is right or wrong.
* **Frictionless Transition:** The video UI gracefully fades out upon dialogue completion to bring the student directly into the final assessment.

## ✨ Features & Experience

- **🎙️ Realistic Telehealth Environment**: The UI mimics a modern video call, complete with live transcripts, audio visualization, and session timers.
- **⏸️ Interactive Pause-and-Reflect**: The "call" freezes at critical clinical moments, prompting the user to select the most effective CBT response to navigate the session.
- **📈 Professional Clinical Feedback**: Feedback is provided instantly based on the dialogue choices made, focusing on real-world impact (e.g., cognitive restructuring, behavioral activation) rather than simple "Right/Wrong" grading.
- **📄 Session Transcript & Reflection**: Users can review the full conversation history at any time and write professional clinical takeaway notes at the end of the module.

## 🎭 The Scenario

**Patient:** Sarah
**Presenting Problem:** Workplace anxiety and perfectionism leading to cognitive distortions (overgeneralization).
**Goal:** Guide Sarah through identifying her cognitive distortions, evaluating the evidence, and forming a balanced replacement thought.

## 🛠️ Tech Stack

- **Vanilla HTML5, CSS3, & JavaScript**: Lightweight, fast, and completely dependency-free.
- **Glassmorphism UI**: A modern aesthetic for overlays and HUDs to give it a premium, polished feel.
- **Web Speech API**: Integrated for dynamic text-to-speech audio generation.

## 👩🏻‍💻 AUTHOR : HCK 

*Designed to bridge the gap between textbook theory and modern clinical practice.*
