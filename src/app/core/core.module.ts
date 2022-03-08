import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { StudentModule } from '../student/student.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    MainComponent,
  ],
  imports: [CommonModule, StudentModule],
  exports: [HeaderComponent, FooterComponent, AsideComponent, MainComponent],
})
export class CoreModule {}
