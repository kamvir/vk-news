import { Injectable } from '@angular/core';
import { HttpapiService } from './httpapi.service';
import { endpoints } from 'src/endpoints/endpoint';

@Injectable({
  providedIn: 'root'
})
export class NewsCallService {

  constructor(private httpapi: HttpapiService) { }

  getEverything(reqParams?: any) {
    return this.httpapi.getApi(reqParams, endpoints.everything);
  }

  getTopHeadlines(reqParams?: any) {
    return this.httpapi.getApi(reqParams, endpoints.topHeadlines);
  }

  getSources(reqParams?: any) {
    return this.httpapi.getApi(reqParams, endpoints.sources);
  }
}
