import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { SentryErrorHandler } from '../services/sentry-errorhandler';
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
import { HelperPageModule } from '../pages/helper/helper.module';
import { ProfileDetailsPage } from '../pages/profiles/profile-details/profile-details';
import { ProfilesPageModule } from '../pages/profiles/profiles.module';
import { Profiles1PageModule } from '../pages/profiles/profiles1/profiles1.module';
import { Profiles2PageModule } from '../pages/profiles/profiles2/profiles2.module';
import { ProfilesService } from '../services/profiles';
import { QuizPageModule } from '../pages/quiz/quiz.module';
import { HelpersService } from '../services/helpers';
import { D3Service } from 'd3-ng2-service';
import { InfoPage } from '../pages/info/info';
import { InfoPageModule } from '../pages/info/info.module';
import { GlossaryService } from '../services/glossary';
import { GlossaryPopoverPage } from '../pages/glossary-popover/glossary-popover';
import { GlossaryPopoverPageModule } from '../pages/glossary-popover/glossary-popover.module';
import { MenuService } from '../services/menu';
import { FeedbackPageModule } from '../pages/feedback/feedback.module';
import { QuizDataProvider } from '../providers/quiz-data/quiz-data';
import {GalleryDataProvider} from "../providers/gallery-data/gallery-data";
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NewProfileserviceProvider } from '../providers/new-profileservice/new-profileservice';
import {NewProfilePage} from "../pages/new-profile/new-profile";
import {NewProfilePageModule} from "../pages/new-profile/new-profile.module";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfileDetailsPage,
    GlossaryPage,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CrystalsystemsPageModule,
    GalleryPageModule,
    GlossaryPopoverPageModule,
    FeedbackPageModule,
    HelperPageModule,
    NewProfilePageModule,
    ProfilesPageModule,
    Profiles1PageModule,
    Profiles2PageModule,
    QuizPageModule,
    InfoPageModule,
    LazyLoadImageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CrystalsystemsPage,
    GalleryPage,
    GlossaryPage,
    GlossaryPopoverPage,
    HelperPage,
    NewProfilePage,
    ProfileDetailsPage,
    ProfilesPage,
    Profiles1Page,
    Profiles2Page,
    QuizPage,
    InfoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: SentryErrorHandler},
    ProfilesService,
    HelpersService,
    GlossaryService,
    MenuService,
    D3Service,
    QuizDataProvider,
    GalleryDataProvider,
    HomePage,
    GalleryPage,
    NewProfileserviceProvider,
  ]
})
export class AppModule {}
