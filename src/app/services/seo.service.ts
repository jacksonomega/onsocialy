import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { SEO_CONFIG } from '../core/seo.config';

export interface SeoData {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    type?: string;
    canonicalUrl?: string;
}

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    constructor(
        private titleService: Title,
        private metaService: Meta,
        @Inject(DOCUMENT) private document: Document,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    /**
     * Updates all SEO tags for a page
     */
    setSeoData(data: SeoData): void {
        // 1. Title
        const title = data.title
            ? SEO_CONFIG.titleTemplate.replace('%s', data.title)
            : SEO_CONFIG.defaultTitle;
        this.titleService.setTitle(title);

        // 2. Description
        const description = data.description || SEO_CONFIG.defaultDescription;
        this.metaService.updateTag({ name: 'description', content: description });
        this.metaService.updateTag({ property: 'og:description', content: description });
        this.metaService.updateTag({ name: 'twitter:description', content: description });

        // 3. Keywords
        const keywords = data.keywords
            ? [...SEO_CONFIG.defaultKeywords, ...data.keywords].join(', ')
            : SEO_CONFIG.defaultKeywords.join(', ');
        this.metaService.updateTag({ name: 'keywords', content: keywords });

        // 4. Image
        const image = data.image || SEO_CONFIG.defaultImage;
        this.metaService.updateTag({ property: 'og:image', content: image });
        this.metaService.updateTag({ name: 'twitter:image', content: image });

        // 5. Type & Locale
        this.metaService.updateTag({ property: 'og:type', content: data.type || SEO_CONFIG.type });
        this.metaService.updateTag({ property: 'og:locale', content: SEO_CONFIG.locale });
        this.metaService.updateTag({ property: 'og:site_name', content: 'OnSocialy' });

        // 6. Title for Social
        this.metaService.updateTag({ property: 'og:title', content: title });
        this.metaService.updateTag({ name: 'twitter:title', content: title });
        this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

        // 7. Canonical URL
        this.setCanonicalUrl(data.canonicalUrl);

        // 8. URL for Social
        if (data.canonicalUrl) {
            this.metaService.updateTag({ property: 'og:url', content: data.canonicalUrl });
        }
    }

    /**
     * Sets the canonical URL link tag
     */
    setCanonicalUrl(url?: string): void {
        // Determine the URL to use
        const linkUrl = url ? url : (isPlatformBrowser(this.platformId) ? this.document.location.href : '');

        if (!linkUrl) return;

        // Use absolute URL if relative is provided
        const absoluteUrl = linkUrl.startsWith('http') ? linkUrl : `${SEO_CONFIG.baseUrl}${linkUrl.startsWith('/') ? '' : '/'}${linkUrl}`;

        let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
        if (!link) {
            link = this.document.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.document.head.appendChild(link);
        }
        link.setAttribute('href', absoluteUrl);
    }

    /**
     * Injects JSON-LD Structured Data
     */
    setJsonLd(data: any): void {
        const scriptId = 'json-ld-structured-data';
        let script: HTMLScriptElement | null = this.document.getElementById(scriptId) as HTMLScriptElement;

        if (!script) {
            script = this.document.createElement('script');
            script.id = scriptId;
            script.type = 'application/ld+json';
            this.document.head.appendChild(script);
        }

        script.text = JSON.stringify(data);
    }
}
