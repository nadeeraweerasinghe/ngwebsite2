import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _httpClient: HttpClient) { }

  title = 'ngwebsite2';

  public authenticate(): void {
    this.authentiateViaAPI().subscribe(res$ => {
      console.log('frLogin: ', res$['body']);
    });
  }

  private authentiateViaAPI():  Observable<any> {
    console.log('inside authentiate');
    let endpoint = 'https://nodejsapi1.vercel.app/authenticate';
  
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
      },
      withCredentials: true,
      observe: 'response' as 'body',
    };
    try {
      return this._httpClient.post<any>(endpoint, JSON.stringify({}), httpOptions,);
    } catch (err) {
      console.error('There was an error while calling FR Page', err);
    }
  }
}
