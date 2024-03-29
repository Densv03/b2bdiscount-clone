import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js';

import { AppModule } from './app/app.module';

function bootstrap() {
	platformBrowserDynamic()
		.bootstrapModule(AppModule)
		.catch((err) => console.error('[AppModule Bootstrap]:', err));
}

if (document.readyState === 'complete') {
	bootstrap();
} else {
	document.addEventListener('DOMContentLoaded', bootstrap);
}
