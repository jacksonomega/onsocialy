import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { ContactService, ContactData } from '../../services/contact.service';
import { NotificationComponent, NotificationType } from '../notification/notification.component';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, LucideAngularModule, NotificationComponent],
  template: `
    <section id="contacto" class="contact section">
      @if (notificationVisible()) {
        <app-notification 
          [message]="notificationMessage()" 
          [type]="notificationType()"
          (visibleChange)="onNotificationClose()"
        ></app-notification>
      }
      <div class="contact-grid">
        <!-- Left Side -->
        <div class="contact-info">
          <span class="section-tag">// CONTACTO</span>
          <h2 class="section-title">
            Hablemos de tu <span class="neon-text">proyecto</span>
          </h2>
          
          <!-- Free Highlight -->
          <div class="free-highlight">
            <div class="free-icon">
              <lucide-icon name="zap" [size]="24"></lucide-icon>
            </div>
            <div class="free-text">
              <strong>¡Plazas limitadas!</strong> Las primeras webs son GRATIS. 
              Reserva tu plaza antes de que se acaben.
            </div>
          </div>
          
          <ul class="contact-perks">
            <li>
              <span class="perk-check">✓</span>
              Respuesta en menos de 24h
            </li>
            <li>
              <span class="perk-check">✓</span>
              Presupuesto sin compromiso
            </li>
            <li>
              <span class="perk-check">✓</span>
              Videollamada de presentación
            </li>
            <li>
              <span class="perk-check">✓</span>
              Diseño previo antes de confirmar
            </li>
          </ul>
          
          <!-- Social -->
          <div class="contact-social">
            <span class="social-label">o encuéntranos en:</span>
            <div class="social-icons">
              <a href="https://www.instagram.com/0megadev/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="social-btn">
                <lucide-icon name="instagram" [size]="20"></lucide-icon>
              </a>
              <a href="https://www.tiktok.com/@0mega_dev" target="_blank" rel="noopener noreferrer" aria-label="TikTok" class="social-btn">
                <lucide-icon name="video" [size]="20"></lucide-icon>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Form Side -->
        <form 
          [formGroup]="contactForm" 
          (ngSubmit)="onSubmit()" 
          class="contact-form">
          
          <div class="form-row">
            <div class="form-group">
              <label for="name" class="form-label">Nombre *</label>
              <input 
                type="text" 
                id="name"
                formControlName="name"
                class="form-input"
                placeholder="Tu nombre"
                [attr.aria-invalid]="isFieldInvalid('name')">
              @if (isFieldInvalid('name')) {
                <span class="error-msg" role="alert">Campo obligatorio</span>
              }
            </div>
            
            <div class="form-group">
              <label for="email" class="form-label">Email *</label>
              <input 
                type="email" 
                id="email"
                formControlName="email"
                class="form-input"
                placeholder="tu&#64;email.com"
                [attr.aria-invalid]="isFieldInvalid('email')">
              @if (isFieldInvalid('email')) {
                <span class="error-msg" role="alert">Email inválido</span>
              }
            </div>
          </div>
          
          <div class="form-group">
            <label for="instagram" class="form-label">Instagram (opcional)</label>
            <input 
              type="text" 
              id="instagram"
              formControlName="instagram"
              class="form-input"
              placeholder="&#64;tuinstagram">
          </div>
          
          <div class="form-group">
            <label for="message" class="form-label">Cuéntanos tu idea *</label>
            <textarea 
              id="message"
              formControlName="message"
              class="form-input form-textarea"
              rows="4"
              placeholder="¿Qué tipo de web necesitas? ¿Cuál es tu estilo?"
              [attr.aria-invalid]="isFieldInvalid('message')"></textarea>
            @if (isFieldInvalid('message')) {
              <span class="error-msg" role="alert">Cuéntanos algo sobre tu proyecto</span>
            }
          </div>
          
          <button 
            type="submit" 
            class="btn-brutal submit-btn"
            [disabled]="isSubmitting()">
            @if (isSubmitting()) {
              <span class="spinner"></span>
              Enviando...
            } @else {
              Enviar mensaje →
            }
          </button>
          
          @if (submitted()) {
            <div class="success-msg" role="status">
              <span class="success-icon">✓</span>
              ¡Recibido! Te escribimos pronto.
            </div>
          }
        </form>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      position: relative;
    }
    
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: start;
    }
    
    .section-tag {
      display: inline-block;
      font-family: 'Inter', monospace;
      font-size: 0.85rem;
      color: #c6f135;
      margin-bottom: 1rem;
      letter-spacing: 0.1em;
    }
    
    /* Free Highlight */
    .free-highlight {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      background: rgba(198, 241, 53, 0.08);
      border: 2px solid rgba(198, 241, 53, 0.3);
      padding: 1.25rem;
      margin: 2rem 0;
      clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
    }
    
    .free-icon {
      font-size: 1.5rem;
    }
    
    .free-text {
      font-size: 0.95rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
    }
    
    .free-text strong {
      color: #c6f135;
    }
    
    /* Perks */
    .contact-perks {
      list-style: none;
      padding: 0;
      margin: 0 0 2rem 0;
    }
    
    .contact-perks li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.6rem 0;
      color: rgba(255, 255, 255, 0.7);
    }
    
    .perk-check {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #c6f135;
      color: #050507;
      font-size: 0.75rem;
      font-weight: 700;
    }
    
    /* Social */
    .contact-social {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .social-label {
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.5);
    }
    
    .social-icons {
      display: flex;
      gap: 0.5rem;
    }
    
    .social-btn {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid rgba(255, 255, 255, 0.15);
      color: rgba(255, 255, 255, 0.7);
      font-weight: 700;
      font-size: 0.8rem;
      transition: all 0.2s ease;
    }
    
    .social-btn:hover {
      border-color: #c6f135;
      color: #c6f135;
      transform: translateY(-3px);
    }
    
    /* Form */
    .contact-form {
      background: rgba(18, 18, 26, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 2.5rem;
      border-radius: 20px;
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.8);
    }
    
    .form-input {
      width: 100%;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.03);
      border: 2px solid rgba(255, 255, 255, 0.08);
      color: white;
      font-size: 1rem;
      font-family: inherit;
      transition: all 0.3s ease;
    }
    
    .form-input::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
    
    .form-input:focus {
      outline: none;
      border-color: #c6f135;
      background: rgba(198, 241, 53, 0.03);
    }
    
    .form-input[aria-invalid="true"] {
      border-color: #ef4444;
    }
    
    .form-textarea {
      resize: vertical;
      min-height: 120px;
    }
    
    .error-msg {
      display: block;
      margin-top: 0.5rem;
      font-size: 0.8rem;
      color: #ef4444;
    }
    
    .submit-btn {
      width: 100%;
      margin-top: 0.5rem;
    }
    
    .submit-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    
    .spinner {
      width: 18px;
      height: 18px;
      border: 2px solid rgba(0, 0, 0, 0.3);
      border-top-color: #050507;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    .success-msg {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      margin-top: 1.5rem;
      padding: 1rem;
      background: rgba(198, 241, 53, 0.1);
      border: 2px solid #c6f135;
      color: #c6f135;
      font-weight: 600;
    }
    
    .success-icon {
      font-size: 1.25rem;
    }
    
    @media (max-width: 900px) {
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
      
      .form-row {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);

  protected isSubmitting = signal(false);
  protected submitted = signal(false);

  // Notification state
  protected notificationVisible = signal(false);
  protected notificationMessage = signal('');
  protected notificationType = signal<NotificationType>('success');

  protected contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    instagram: [''],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  protected isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  protected onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    const formData: ContactData = this.contactForm.value;

    this.contactService.sendContact(formData).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.submitted.set(true);
        this.contactForm.reset();

        // Show success notification
        this.showNotification('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');

        setTimeout(() => this.submitted.set(false), 5000);
      },
      error: (err) => {
        this.isSubmitting.set(false);
        console.error('Error sending contact form:', err);

        // Show error notification
        this.showNotification('Hubo un error al enviar el mensaje. Inténtalo de nuevo.', 'error');
      }
    });
  }

  protected showNotification(message: string, type: NotificationType) {
    this.notificationMessage.set(message);
    this.notificationType.set(type);
    this.notificationVisible.set(true);
  }

  protected onNotificationClose() {
    this.notificationVisible.set(false);
  }
}
