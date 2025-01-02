import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-audio-test',
  standalone: true,
  imports: [],
  templateUrl: './audio-test.component.html',
  styleUrl: './audio-test.component.scss'
})
export class AudioTestComponent{
  private audioConstraints = { audio: true, video: false };
  private videoConstraints = { audio: true, video: true };
  private mediaRecorder:MediaRecorder | null = null;
  private videoStream:MediaStream | null = null;
  private currentBlobAudio: string | null = null;
  private currentBlobVideo: string | null = null;
  private sanitaizer = inject(DomSanitizer);

  protected chunks: Array<Blob> = [];
  protected audioUrl = signal<SafeUrl | null>(null);
  protected videoUrl = signal<SafeUrl | null>(null);

  // #setMediaRecorder(){
  //   navigator.mediaDevices
  //   .getUserMedia(this.audioConstraints)
  //   .then((stream) => {
  //     this.mediaRecorder = new MediaRecorder(stream);
  //   })
  // }

  // #setMediaVideoRecorder(){
  //   if(navigator.mediaDevices){
  //     navigator.mediaDevices.getDisplayMedia(this.videoConstraints)
  //     .then((stream) => {
  //       this.videoStream = stream;
  //       this.mediaRecorder = new MediaRecorder(stream);
  //     }); 
  //   }else{
  //     alert('tu navegador no detecta o no permite el uso de dispositivos de audio, por favor graba el audio en formato mp3 y cargalo, gracias.')
  //   }
    
  // }

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
    this.#cleanStates();
    navigator.mediaDevices
    .getUserMedia(this.audioConstraints)
    .then((stream) => {
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.ondataavailable = (event) => {
        this.chunks.push(event.data);
      }
      this.mediaRecorder.start();
    })
  }

  startVideoRecording(){   
    this.#cleanStates();
    if(navigator.mediaDevices){
      navigator.mediaDevices.getDisplayMedia(this.videoConstraints)
      .then((stream) => {
        this.videoStream = stream;
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.ondataavailable = (event) => {
          this.chunks.push(event.data);
        }
        this.mediaRecorder.start();
      });
    }else{
      alert('tu navegador no detecta o no permite el uso de dispositivos de audio, por favor graba el audio en formato mp3 y cargalo, gracias.')
    }

    
  }

  stopRecordingAudio(){
    if(this.mediaRecorder) {
      this.mediaRecorder.onstop = () => {
        this.currentBlobAudio = URL.createObjectURL(new Blob(this.chunks, { type: 'audio/mp3' })); //esto seria lo que se guarda en el back.
        this.audioUrl.set(this.sanitaizer.bypassSecurityTrustUrl(this.currentBlobAudio));
      }
      this.mediaRecorder.stop();
    }
  }

  stopRecordingVideo(){
    if(this.mediaRecorder) {
      this.mediaRecorder.onstop = () => {
        this.currentBlobVideo = URL.createObjectURL(new Blob(this.chunks, { type: 'video/webm' })); //esto seria lo que se guarda en el back.
        this.videoUrl.set(this.sanitaizer.bypassSecurityTrustUrl(this.currentBlobVideo));
      }
      this.mediaRecorder.stop();
      this.videoStream!.getTracks().forEach(track => track.stop()); // Detener la captura de pantalla
    }
  }

  
}
