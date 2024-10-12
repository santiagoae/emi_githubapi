import { NgClass } from '@angular/common';
import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { HandleToastService } from 'src/app/shared/handle-toast.service';

export type alertType = 'success' | 'error' | 'warning' | undefined;

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent implements AfterViewInit{
  
  selectedAlertType = signal<alertType>(undefined);
  message = signal<string>('');

  private toastHandlerService = inject(HandleToastService);

  ngAfterViewInit(): void {
    this.toastHandlerService.toastOptions$.subscribe({
      next: (data) => {
        this.selectedAlertType.set(data.alertType ?? undefined);
        this.message.set(data.message);
        setTimeout(() => {
          const toastId = document.getElementById('toast-alert');
          toastId!.classList.replace('animation-in', 'animation-out');
          setTimeout(() => {
            this.onCloseToast();
          }, 1700);
        }, 5000);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onCloseToast(){
    this.selectedAlertType.set(undefined);
  }
}
