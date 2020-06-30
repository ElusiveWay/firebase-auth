import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaiterService {
  constructor() {
    
  }
  waiter(){
    this.unwaiter()
    document.querySelector('.waiter').innerHTML += `
    <div class="_waiter">
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        ._waiter{
          position:fixed;
          display: flex;
          justify-content: center;
          align-items: center;
          top:0;
          left:0;
          width: 100%;
          height: 100%;
          background-color: #00000005;
          z-index: 999999;
        }
        ._waiter i{
          color: #455e7d;
          font-size: 50px;
          animation: spin .8s ease-out infinite;
        }
      </style>
      <i class="fas fa-spinner"></i>
    </div>
    `
  }
  unwaiter(){
    document.querySelectorAll('._waiter').forEach(el=>el.remove())
  }
}
