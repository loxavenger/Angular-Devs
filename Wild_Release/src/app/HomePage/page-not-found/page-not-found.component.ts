import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    // Initialization code if needed
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) return;

    const halfFieldWidth = this.el.nativeElement.clientWidth / 2;
    const halfFieldHeight = this.el.nativeElement.clientHeight / 2;
    const fieldPos = this.el.nativeElement.getBoundingClientRect();
    const x = event.pageX;
    const y = event.pageY - fieldPos.top;
    const newX = (x - halfFieldWidth) / 30;
    const newY = (y - halfFieldHeight) / 30;

    const waveElements = this.el.nativeElement.querySelectorAll('.parallax [class*="wave"]');
    waveElements.forEach((wave:any, index:any) => {
      wave.style.transition = '';
      wave.style.transform = `translate3d(${index * newX}px, ${index * newY}px, 0px)`;
    });
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    const waveElements = this.el.nativeElement.querySelectorAll('.parallax [class*="wave"]');
    waveElements.forEach((wave:any) => {
      wave.style.transform = 'translate(0px, 0px)';
      wave.style.transition = 'all .7s';
    });

    setTimeout(() => {
      waveElements.forEach((wave:any) => {
        wave.style.transition = '';
      });
    }, 700);
  }

}
