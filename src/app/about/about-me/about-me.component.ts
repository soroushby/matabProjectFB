import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  informations = [
    { name: 'Education', value: 'dada' },
    { name: 'Biography', value: 'dada' },
    { name: 'Experiences', value: 'dada' },
    { name: 'Medical interests', value: 'dada' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
