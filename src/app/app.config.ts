import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';


import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {
  LucideAngularModule,
  Rocket,
  DollarSign,
  Zap,
  Palette,
  Smartphone,
  Search,
  MessageSquare,
  RefreshCw,
  Gift,
  Dumbbell,
  Utensils,
  Plane,
  Sparkles,
  Send,
  Instagram,
  Twitter,
  Video,
  Heart,
  Music,
  Smile
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      LucideAngularModule.pick({
        Rocket,
        DollarSign,
        Zap,
        Palette,
        Smartphone,
        Search,
        MessageSquare,
        RefreshCw,
        Gift,
        Dumbbell,
        Utensils,
        Plane,
        Sparkles,
        Send,
        Instagram,
        Twitter,
        Video,
        Heart,
        Music,
        Smile
      })
    )
  ]
};
