import { Component } from '@angular/core';
import { AudioTestComponent } from "./components/audio-test/audio-test.component";

@Component({
  selector: 'app-audio-recorder',
  standalone: true,
  imports: [AudioTestComponent],
  templateUrl: './audio-recorder.component.html',
  styleUrl: './audio-recorder.component.scss'
})
export class AudioRecorderComponent {

}
