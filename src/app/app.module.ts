import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InvestimentosService} from './_service/investimentos.service';
import {HttpClientModule} from '@angular/common/http';


import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FavoritosService} from './_service/favoritos.service';
import {B3Service} from './_service/b3.service';
import {DividendosService} from './_service/dividendos.service';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {ModalLoginPageModule} from './_pages/modal-login/modal-login.module';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        ModalLoginPageModule,
        AngularFireDatabaseModule],
    providers: [
        StatusBar,
        SplashScreen,
        InvestimentosService,
        FavoritosService,
        DividendosService,
        B3Service,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
