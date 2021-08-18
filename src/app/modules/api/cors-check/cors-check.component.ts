import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-cors-check',
  templateUrl: './cors-check.component.html',
  styleUrls: ['./cors-check.component.scss'],
})
export class CorsCheckComponent implements OnInit {
  url: string
  method: string
  body: string
  response: any
  error: any
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  fetchAPI() {
    // console.log(this.method, JSON.parse(this.body))
    this.http[this.method](this.url, this.body ? this.body : undefined, {
      headers: { 'Content-Type': 'application/json' },
    })
      .toPromise()
      .then((res) => {
        this.response = this.prettyPrint(JSON.stringify(res))
      })
      .catch((error) => {
        console.dir(error)
        this.error = this.prettyPrint(JSON.stringify(error))
      })
  }

  prettyPrint(text) {
    var obj = JSON.parse(text)
    var pretty = JSON.stringify(obj, undefined, 4)
    return pretty;
  }
}
