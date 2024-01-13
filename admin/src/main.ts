import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js';

import { AdminModule } from './app/admin.module';

function bootstrap() {
	platformBrowserDynamic()
		.bootstrapModule(AdminModule)
		.catch((err) => console.error(err));
}

bootstrap();
