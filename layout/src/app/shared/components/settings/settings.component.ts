import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/service/config.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {

  constructor(private _configService: ConfigService) { }

  ngOnInit(): void {
  }

  setLayout(layout: string) {
    this._configService.config = { layout }
  }

}
