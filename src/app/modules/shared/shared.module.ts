import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityContext } from '@angular/core';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
      loader: HttpClient
    }),
    MarkdownModule.forChild()
  ],
  providers: [
    provideHttpClient(),
    provideMarkdown({ loader: HttpClient }),
  ],
  exports: [
    CommonModule,
    MarkdownModule
  ]
})
export class SharedModule { }
