import { Component, OnInit } from '@angular/core';
import { NewsCallService } from '../services/news-call.service';
import { ToastController } from '@ionic/angular';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.page.html',
  styleUrls: ['./everything.page.scss'],
})
export class EverythingPage implements OnInit {
  articles = [];
  isLoading = false;
  searchTxt = '';
  constructor(private newsCall: NewsCallService, private toastController: ToastController, public newsService: NewsService) { }

ngOnInit() {
  }

ionViewWillEnter() {
    this.getEverything();
  }

getEverything(event ? ) {
    this.isLoading = true;
    this.articles = [];
    const reqObj = {
      q: event ? event.target.value ? event.target.value : 'india' : 'india',
      from: this.getConvertedDate(),
      to: this.getConvertedDate()
    };
    this.newsCall.getEverything(reqObj).subscribe(data => {
      console.log('Data :: ', data);
      this.isLoading = false;
      this.articles = data;
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

getConvertedDate() {
    const date  = new Date();
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }

ionViewDidLeave() {
    this.searchTxt = '';
  }

}
