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
  private audioConstraints = { audio: true, video: false };
  private videoConstraints = { audio: true, video: false };
  private mediaRecorder:MediaRecorder | null = null;
  private currentBlobAudio: string | null = null;
  private currentBlobVideo: string | null = null;
  private sanitaizer = inject(DomSanitizer);

  protected chunks: Array<Blob> = [];
  protected audioUrl = signal<SafeUrl | null>(null);
  protected videoUrl = signal<SafeUrl | null>(null);

  constructor(){
    if(navigator.mediaDevices){
      // this.#setMediaRecorder();
      this.setMediaVideoRecorder();
    }else{
      alert('tu navegador no detecta o no permite el uso de dispositivos de audio, por favor graba el audio en formato mp3 y cargalo, gracias.')
    }
  }

  #setMediaRecorder(){
    navigator.mediaDevices
    .getUserMedia(this.audioConstraints)
    .then((stream) => {
      this.mediaRecorder = new MediaRecorder(stream);
    })
  }

  async setMediaVideoRecorder(){
    const stream = await navigator.mediaDevices.getDisplayMedia(this.videoConstraints);    
    this.mediaRecorder = new MediaRecorder(stream);
  }

  #cleanStates(){
    this.audioUrl.set(null);
    this.videoUrl.set(null);
    URL.revokeObjectURL(this.currentBlobAudio!);
    URL.revokeObjectURL(this.currentBlobVideo!);
    this.currentBlobAudio = null;
    this.currentBlobVideo = null;
    this.chunks = [];
  }

  startRecording(){
    if(this.mediaRecorder){  
      if(this.currentBlobAudio){
        this.#cleanStates();
      }   
      this.mediaRecorder.ondataavailable = (event) => {
        this.chunks.push(event.data);
      }
      this.mediaRecorder.start();
    }
  }

  startVideoRecording(){
    if(this.mediaRecorder){  
      if(this.currentBlobVideo){
        this.#cleanStates();
      }   
      this.mediaRecorder.ondataavailable = (event) => {
        console.log("entro");
        this.chunks.push(event.data);
      }
      this.mediaRecorder.start();
    }
  }

  stopRecording(){
    if(this.mediaRecorder) {
      // this.mediaRecorder.onstop = () => {
      //   this.currentBlobAudio = URL.createObjectURL(new Blob(this.chunks, { type: 'audio/mp3' })); //esto seria lo que se guarda en el back.
      //   this.audioUrl.set(this.sanitaizer.bypassSecurityTrustUrl(this.currentBlobAudio));
      // }
      this.mediaRecorder.onstop = () => {
        this.currentBlobVideo = URL.createObjectURL(new Blob(this.chunks, { type: 'video/webm' })); //esto seria lo que se guarda en el back.
        console.log({curretblobvideo: this.currentBlobVideo});
        
        this.videoUrl.set(this.sanitaizer.bypassSecurityTrustUrl(this.currentBlobVideo));
      }
      this.mediaRecorder.stop();
    }
  }

  
}
