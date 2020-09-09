import { Component, OnInit } from '@angular/core';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  public colorPrincipal: string = '#f60';
  public colorText: string = '#f2f2f2';

  constructor(private cpService: ColorPickerService) { }

  ngOnInit(): void {
  }

  
  public onChangeColor(color: string): Cmyk {
    const hsva = this.cpService.stringToHsva(color);
    const rgba = this.cpService.hsvaToRgba(hsva);
    
    return this.cpService.rgbaToCmyk(rgba);
  }

}
