import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-post-wrapper',
  templateUrl: './post-wrapper.component.html',
  styleUrl: './post-wrapper.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PostWrapperComponent {
  @Input() source: string | undefined;
}
