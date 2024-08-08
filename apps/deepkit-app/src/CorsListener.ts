import {eventDispatcher} from "@deepkit/event";
import {httpWorkflow, HttpWorkflowEvent, JSONResponse} from "@deepkit/http";

/**
 * Not a secure CORS policy, just an example
 */
export class CorsListener {
  protected headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, X-Message-Type',
    'Access-Control-Max-Age': 2592000, // 30 days
    'Access-Control-Expose-Headers': "x-message-type, x-message-composite, x-message-routetype"
  }

  @eventDispatcher.listen(httpWorkflow.onRequest)
  onRequest(event: HttpWorkflowEvent) {
    for (const [name, value] of Object.entries(this.headers)) event.response.setHeader(name, value);
  }

  @eventDispatcher.listen(httpWorkflow.onRouteNotFound)
  onRouteNotFound(event: typeof httpWorkflow.onRouteNotFound.event) {
    //CORS requirement for example
    if (event.request.method === 'OPTIONS') event.send(new JSONResponse(true, 200).headers(this.headers))
  }
}
