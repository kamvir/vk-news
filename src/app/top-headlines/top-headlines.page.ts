import { Component, OnInit } from '@angular/core';
import { NewsCallService } from '../services/news-call.service';
import { ToastController } from '@ionic/angular';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.page.html',
  styleUrls: ['./top-headlines.page.scss'],
})
export class TopHeadlinesPage implements OnInit {

  constructor(private newsCall: NewsCallService, private toastController: ToastController, public newsService: NewsService) { }
  articles = [];
  isLoading = false;
  searchTxt = '';
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getTopHeadlines();
  }

  getTopHeadlines(event?) {
    this.articles = [];
    this.isLoading = true;
    const reqObj = {
      q: event ? event.target.value ? event.target.value : 'india' : 'india'
    };
    this.newsCall.getTopHeadlines(reqObj).subscribe(data => {
      this.isLoading = false;
      console.log('Data :: ', data);
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

  ionViewDidLeave() {
    this.searchTxt = '';
  }
}
