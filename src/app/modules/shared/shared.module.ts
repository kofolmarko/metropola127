import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { withFetch } from '@angular/common/http';

import { SecurityContext } from '@angular/core';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { PostWrapperComponent } from './components/post-wrapper/post-wrapper.component';

@NgModule({
  declarations: [
    PostWrapperComponent
  ],
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
    provideHttpClient(withFetch()),
    provideMarkdown({ loader: HttpClient }),
  ],
  exports: [
    CommonModule,
    MarkdownModule,
    PostWrapperComponent
  ]
})
export class SharedModule { }
