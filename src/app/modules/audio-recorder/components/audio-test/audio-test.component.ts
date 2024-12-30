import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-audio-test',
  standalone: true,
  imports: [],
  templateUrl: './audio-test.component.html',
  styleUrl: './audio-test.component.scss'
})
export class AudioTestComponent {
  private constraints = { audio: true, video: false };
  private mediaRecorder:MediaRecorder | null = null;

  protected chunks: Array<Blob> = [];
  protected audioUrl = signal<SafeUrl | null>(null);

  private currentBlobAudio: string | null = null;
  private sanitaizer = inject(DomSanitizer);

  constructor(){
    if(navigator.mediaDevices){
      this.#setMediaRecorder();
    }else{
      alert('tu navegador no detecta o no permite el uso de dispositivos de audio, por favor graba el audio en formato mp3 y cargalo, gracias.')
    }
  }

  #setMediaRecorder(){
    navigator.mediaDevices
    .getUserMedia(this.constraints)
    .then((stream) => {
      this.mediaRecorder = new MediaRecorder(stream);
    })
    console.log(this.mediaRecorder);
    
  }

  startRecording(){
    if(this.mediaRecorder){  
      if(this.currentBlobAudio){
        this.#privatecleanStates();
      }   
      this.mediaRecorder.ondataavailable = (event) => {
        this.chunks.push(event.data);
      }
      this.mediaRecorder.start();
    }
  }

  stopRecording(){
    if(this.mediaRecorder) {
      this.mediaRecorder.onstop = () => {
        this.currentBlobAudio = URL.createObjectURL(new Blob(this.chunks, { type: 'audio/mp3' })); //esto seria lo que se guarda en el back.
        this.audioUrl.set(this.sanitaizer.bypassSecurityTrustUrl(this.currentBlobAudio));
      }
      this.mediaRecorder.stop();
    }
  }

  #privatecleanStates(){
    this.audioUrl.set(null);
    URL.revokeObjectURL(this.currentBlobAudio!);
    this.currentBlobAudio = null;
    this.chunks = [];
  }
}
