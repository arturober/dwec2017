import { MenuModule } from './menu/menu.module';
import { ProductsModule } from './products/products.module';
import { APP_ROUTES } from './app.routes';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
    ],
    imports: [
        MenuModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(APP_ROUTES,  {preloadingStrategy: PreloadAllModules})
    ],
    providers: [
        Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
