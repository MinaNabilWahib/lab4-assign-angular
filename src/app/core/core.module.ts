import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { StudentModule } from '../student/student.module';
import { SpeakerModule } from '../speaker/speaker.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    MainComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    StudentModule,
    SpeakerModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    MainComponent,
    LoginComponent,
  ],
})
export class CoreModule {}
