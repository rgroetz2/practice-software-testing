import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ArchwizardModule} from "angular-archwizard";
import {CheckoutComponent} from './checkout/checkout.component';
import {ContactComponent} from './contact/contact.component';
import {UserAuthGuard} from "./UserAuthGuard";
import {AuthInterceptor} from "./_helpers/auth.interceptor";
import {AdminAuthGuard} from "./AdminAuthGuard";
import {ContentTypeInterceptor} from "./_helpers/contenttype.interceptor";
import {ToastsComponent} from "./_services/toasts.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterLink, RouterModule} from "@angular/router";
import {NgxPaginationModule} from "ngx-pagination";
import {CategoryComponent} from './products/category/category.component';
import {OverviewComponent} from './products/rentals/overview/overview.component';
import {OverviewComponent as ProductOverviewComponent} from './products/overview/overview.component';
import {DetailComponent as ProductDetailComponent} from './products/detail/detail.component';
import {NgHttpLoaderModule} from "ng-http-loader";
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import {PagenotfoundComponent} from './shared/pagenotfound/pagenotfound.component';
import {InfoModalComponent} from './footer/info-modal/info-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    CheckoutComponent,
    ContactComponent,
    ToastsComponent,
    CategoryComponent,
    OverviewComponent,
    ProductOverviewComponent,
    PagenotfoundComponent,
    InfoModalComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        HttpClientModule,
        NgHttpLoaderModule.forRoot(),
        RouterModule,
        AppRoutingModule,
        FormsModule,
        ArchwizardModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        NgxSliderModule,
        RouterLink,
        RouterLink,
        CommonModule
    ],
  providers: [UserAuthGuard, AdminAuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: ContentTypeInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
