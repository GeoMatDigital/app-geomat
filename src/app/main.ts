import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

// Enable if in prod-mode
// import {enableProdMode} from '@angular/core';
// enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
