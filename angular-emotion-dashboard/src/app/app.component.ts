import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Emotion-Driven UI Dashboard</h1>
    <div class="dashboard">
      <emotion-detector></emotion-detector>
      <wasm-emotion-processing></wasm-emotion-processing>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }