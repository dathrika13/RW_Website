import { Component, OnInit } from '@angular/core';
import { Variant } from 'src/app/shared/model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'rw-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent  {
  colors: Variant[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
  

}
