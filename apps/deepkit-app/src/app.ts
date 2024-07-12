import {App} from '@deepkit/app';
import {FrameworkModule} from '@deepkit/framework';
import {UserController} from "@lionelhorn/utils";

const app = new App({
  providers: [
  ],
  listeners: [
  ],
  controllers: [UserController],
  imports: [
    new FrameworkModule({
      debug: true,
    })
  ]
});

app.loadConfigFromEnv({prefix: 'APP_'})
  .run(["server:start"]);
