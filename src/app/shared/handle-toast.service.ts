import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { alertType } from '../components/toast/toast.component';

interface toastOptions {
  alertType: alertType;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class HandleToastService {
  
  private toastOptions = new Subject<toastOptions>();
  toastOptions$ = this.toastOptions.asObservable();
  
  showToast(toastOptions: toastOptions){
    this.toastOptions.next(toastOptions);
  }
}
