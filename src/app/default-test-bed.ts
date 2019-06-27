import { AppModule } from "./app.module";
import { APP_BASE_HREF } from "@angular/common";

export const defaultTestBed = {
    declarations: [

    ], imports: [
        AppModule
    ], providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
    ]
}