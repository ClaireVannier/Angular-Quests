import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import { gsap } from "gsap-trial";
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';


gsap.registerPlugin(DrawSVGPlugin);

@Component({
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.component.html',
  styleUrls: ['./fingerprint.component.scss']
})
export class FingerprintComponent implements AfterViewInit {
  @ViewChild('button', { static: true }) button!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit() {
    const tl = gsap.timeline({ paused: true });

    tl.from('.prints > *', {
      duration: 1,
      drawSVG: "0%",
      ease: 'none',
      stagger: 0.1,
    });
    tl.from('.draw > *', {
      duration: 1,
      drawSVG: "0%",
      ease: 'none',
      stagger: 0.1,
    }, '<1');

    this.button.nativeElement.addEventListener("mouseenter", () => {
      tl.restart();
    });
  }
}