import {App} from '@deepkit/app';
import {FrameworkModule} from '@deepkit/framework';

const app = new App({
  providers: [
  ],
  listeners: [
  ],
  imports: [
    new FrameworkModule({
      debug: true,
    })
  ]
});

app.loadConfigFromEnv({prefix: 'APP_'})
  .run(["server:start"]);
