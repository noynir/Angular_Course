import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MoviesService} from "./movies.service";
import {LoggerService} from "./logger.service";
import {ConfigService} from "./config.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {MoviesDb} from "../data/movies.data";
import {TimingInterceptor} from "./timing.interceptor";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MoviesDb)
  ],
  exports:[HttpClientModule],
  providers:[
    MoviesService, LoggerService, ConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true
    }
  ],
  declarations: []
})
export class CoreModule { }
