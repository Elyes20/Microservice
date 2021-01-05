import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterAvionComponent } from './register-avion/register-avion.component';
import { SdAvionComponent } from './sd-avion/sd-avion.component';
import { AvionRegistrationService } from './avion-registration.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateCompagnieComponent } from './create-compagnie/create-compagnie.component';
import { CompagnieDetailsComponent } from './compagnie-details/compagnie-details.component';
import { CompagnieListComponent } from './compagnie-list/compagnie-list.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterAvionComponent,
    SdAvionComponent,
    CreateCompagnieComponent,
    CompagnieDetailsComponent,
    CompagnieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AvionRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
