import { Controller, Get, Route, Security } from "tsoa";

@Route("/")
@Security("keycloak")
export class AppController extends Controller {
  @Get()
  public async GET() {
    return { message: "Hello World 1" };
  }
}
