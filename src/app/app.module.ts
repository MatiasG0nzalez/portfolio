import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { CounterComponent } from './components/counter/counter.component';
import { CursorComponent } from './components/cursor/cursor.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProjectContainerComponent } from './components/project-container/project-container.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { MarqueeComponent } from './components/marquee/marquee.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    CounterComponent,
    CursorComponent,
    HomeComponent,
    ProjectContainerComponent,
    ProjectCardComponent,
    MarqueeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
