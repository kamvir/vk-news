import { Component, OnInit } from '@angular/core';
import { NewsCallService } from '../services/news-call.service';
import { ToastController } from '@ionic/angular';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.page.html',
  styleUrls: ['./sources.page.scss'],
})
export class SourcesPage implements OnInit {
  isLoading = false;
  sources = [];
  constructor(private newsCall: NewsCallService, private toastController: ToastController, public newsService: NewsService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getSources();
  }

  getSources() {
    this.isLoading = true;
    const reqObj = {};
    this.newsCall.getSources(reqObj).subscribe(data => {
      this.isLoading = false;
      console.log('Data :: ', data);
      this.sources = data;
    },
    async error => {
      this.isLoading = false;
      const toast = await this.toastController.create({
        message: error.error.message,
        buttons: ['OK']
      });
      toast.present();
      console.log('Error :: ', error);
    }
    );
  }

  searchSources(event) {
    const enteredInput = event.target.value;
    if (enteredInput && enteredInput.trim() !== '') {
      this.sources = this.sources.filter(source => {
        return (source.name.toLowerCase().indexOf(enteredInput.toLowerCase()) > -1);
      });
    } else {
      this.sources = [];
      this.getSources();
    }
  }
}
