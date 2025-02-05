import {App} from '@deepkit/app';
import {FrameworkModule} from '@deepkit/framework';
import {RpcController, UserController} from "@lionelhorn/utils";
import {CorsListener} from "./CorsListener";

const app = new App({
  providers: [
  ],
  listeners: [
    CorsListener
  ],
  controllers: [
    UserController,
    RpcController
  ],
  imports: [
    new FrameworkModule({
      debug: true,
      httpRpcBasePath: '/rpc/v1',
    })
  ]
});

app.loadConfigFromEnv({prefix: 'APP_'})
  .run(["server:start"]);
