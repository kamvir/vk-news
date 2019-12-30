import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() {}

  async openUrl(url: string) {
    await Browser.open({
      url,
      windowName: '_self',
      toolbarColor: '#f4f5f8'
    });
  }
}
