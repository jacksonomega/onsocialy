import { Component, ChangeDetectionStrategy, input, signal, OnInit } from '@angular/core';

export type NotificationType = 'success' | 'error';

@Component({
    selector: 'app-notification',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    template: `
    @if (visible()) {
      <div 
        class="notification" 
        [class.success]="type() === 'success'" 
        [class.error]="type() === 'error'"
        role="alert">
        <div class="icon">
          @if (type() === 'success') {
            <span>✓</span>
          } @else {
            <span>!</span>
          }
        </div>
        <div class="message">{{ message() }}</div>
        <button class="close-btn" (click)="close()">×</button>
      </div>
    }
  `,
    styles: [`
    .notification {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.5rem;
      background: #181822; /* App background roughly */
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
      z-index: 1000;
      animation: slideIn 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
      color: white;
      min-width: 300px;
    }

    .notification.success {
      border-color: rgba(198, 241, 53, 0.5); /* Brand Green */
    }

    .notification.error {
      border-color: rgba(255, 100, 100, 0.5); /* Red */
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      font-weight: bold;
      font-size: 0.8rem;
    }

    .success .icon {
      background: #c6f135;
      color: #050507;
    }

    .error .icon {
      background: #ff6464;
      color: #ffffff;
    }

    .message {
      font-size: 0.9rem;
      font-weight: 500;
      flex: 1;
    }

    .close-btn {
      background: transparent;
      border: none;
      color: rgba(255, 255, 255, 0.5);
      font-size: 1.2rem;
      cursor: pointer;
      transition: color 0.2s;
      margin-left: 0.5rem;
    }

    .close-btn:hover {
      color: white;
    }

    @keyframes slideIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class NotificationComponent implements OnInit {
    message = input.required<string>();
    type = input<NotificationType>('success');
    duration = input<number>(5000);

    visible = signal(true);

    ngOnInit() {
        if (this.duration() > 0) {
            setTimeout(() => {
                this.close();
            }, this.duration());
        }
    }

    close() {
        this.visible.set(false);
    }
}
