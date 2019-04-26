import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class WeatherProvider {
  
  
  constructor(public http: HttpClient) {}

  //getWeather() function will send api query
  getWeather(city:any):Observable<any>{
    
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=b9c07316c7394fbd6f99416fb4f74367&units=metric');
  }
}
