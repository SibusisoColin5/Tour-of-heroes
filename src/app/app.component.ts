

// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { MessagesComponent } from './messages/messages.component';
// import { HttpClientJsonpModule } from '@angular/common/http';
// import { routes } from './app.routes';

// @Component({
//   selector: 'app-root',
//   standalone:true,
//   imports:[RouterModule,MessagesComponent,HttpClientJsonpModule],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Tour of Heroes';
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
