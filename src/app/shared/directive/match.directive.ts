import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { fromEvent } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

const breakpoints = {
  xSmall: '(max-width: 599px)',
  small: '(min-width: 600px) and (max-width: 959px)',
  medium: '(min-width: 960px) and (max-width: 1279px)',
  large: '(min-width: 1280px) and (max-width: 1919px)',
  xLarge: '(min-width: 1920px)',
  bigDevice: '(min-width: 960px)',
  mobile: '(max-width: 959px)'
};

@UntilDestroy()
@Directive({
  selector: '[matches]'
})
export class MatchesDirective implements OnInit {
  @Input() matches!: keyof typeof breakpoints;

  constructor(private tpl: TemplateRef<any>,
              private vcr: ViewContainerRef) {
  }

  ngOnInit() {
    const breakpoint = breakpoints[this.matches];

    this.fromMediaQuery(breakpoint).pipe(untilDestroyed(this)).subscribe(matches => {
      matches ? this.vcr.createEmbeddedView(this.tpl) : this.vcr.clear();
    });

    // if (matchMedia(breakpoint).matches) {
    //   this.vcr.createEmbeddedView(this.tpl);
    // }
  }

  private fromMediaQuery(breakpoint: string) {
    const media = matchMedia(breakpoint);

    return fromEvent<MediaQueryListEvent>(media, 'change').pipe(
      map((e: MediaQueryListEvent) => e.matches),
      startWith(media.matches)
    )
  }

}

