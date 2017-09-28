import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CrystalsystemsPage } from '../pages/crystalsystems/crystalsystems';
import { GalleryPage } from '../pages/gallery/gallery';
import { HelperPage } from '../pages/helper/helper';
import { Profiles1Page } from '../pages/profiles/profiles1/profiles1';
import { Profiles2Page } from '../pages/profiles/profiles2/profiles2';
import { ProfilesPage } from '../pages/profiles/profiles';
import { QuizPage } from '../pages/quiz/quiz';
import { CrystalsystemsPageModule } from '../pages/crystalsystems/crystalsystems.module';
import { GalleryPageModule } from '../pages/gallery/gallery.module';
import { GlossaryPage } from '../pages/glossary/glossary';
import { GlossaryPageModule } from '../pages/glossary/glossary.module';
import { HelperPageModule } from '../pages/helper/helper.module';
import { ProfileDetailsPage } from '../pages/profiles/profile-details/profile-details';
import { ProfilesPageModule } from '../pages/profiles/profiles.module';
import { Profiles1PageModule } from '../pages/profiles/profiles1/profiles1.module';
import { Profiles2PageModule } from '../pages/profiles/profiles2/profiles2.module';
import { ProfilesService } from '../services/profiles';
import { QuizPageModule } from '../pages/quiz/quiz.module';
import { MathJaxDirective } from '../directives/MathJax.directive';
import { HelpersService } from '../services/helpers';
import { InfoPage } from '../pages/info/info';
import { InfoPageModule } from '../pages/info/info.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfileDetailsPage,
    MathJaxDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CrystalsystemsPageModule,
    GalleryPageModule,
    GlossaryPageModule,
    HelperPageModule,
    ProfilesPageModule,
    Profiles1PageModule,
    Profiles2PageModule,
    QuizPageModule,
    InfoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CrystalsystemsPage,
    GalleryPage,
    GlossaryPage,
    HelperPage,
    ProfileDetailsPage,
    ProfilesPage,
    Profiles1Page,
    Profiles2Page,
    QuizPage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProfilesService,
    HelpersService
  ]
})
export class AppModule {}
