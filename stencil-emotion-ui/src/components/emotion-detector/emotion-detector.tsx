import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'emotion-detector',
  styleUrl: 'emotion-detector.css',
  shadow: true
})
export class EmotionDetector {
  @State() emotion: string = "Scanning user emotion...";

  analyzeEmotion() {
    const emotions = [
      "Happy 😊 - Bright UI activated",
      "Sad 😢 - Soft color scheme applied",
      "Angry 😡 - Alert mode enabled",
      "Neutral 😐 - Standard theme maintained",
      "Excited 🎉 - High-contrast interactive mode"
    ];
    this.emotion = emotions[Math.floor(Math.random() * emotions.length)];
  }

  render() {
    return (
      <div class="emotion-box">
        <h2>AI Emotion-Driven UI</h2>
        <button onClick={() => this.analyzeEmotion()}>Detect Emotion</button>
        <p>{this.emotion}</p>
      </div>
    );
  }
}
