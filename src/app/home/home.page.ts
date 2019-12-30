import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';
import { NewsCallService } from '../services/news-call.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  articles: any[];
  constructor(private newsService: NewsService, private newsCall: NewsCallService) {}

  ionViewDidEnter() {
    this.getEverything();
    // this.getTopHeadlines();
    // this.getSources();
  }

  getEverything() {
    const reqObj = {
      q: 'india',
      from: '2019-12-24',
      to: '2019-12-23'
    };
    this.newsCall.getEverything(reqObj).subscribe(data => {
      console.log('Data :: ', data);
      this.articles = data;
    },
    error => {
      console.log('Error :: ', error);
    }
    );
  }

  getTopHeadlines() {
    const reqObj = {
      country: 'in'
    };
    this.newsCall.getTopHeadlines(reqObj).subscribe(data => {
      console.log('Data :: ', data);
      this.articles = data;
    },
    error => {
      console.log('Error :: ', error);
    }
    );
  }

  getSources() {
    const reqObj = {};
    this.newsCall.getSources(reqObj).subscribe(data => {
      console.log('Data :: ', data);
      this.articles = data;
    },
    error => {
      console.log('Error :: ', error);
    }
    );
  }
}
