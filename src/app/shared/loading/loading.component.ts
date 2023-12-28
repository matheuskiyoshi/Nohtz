import { Component } from '@angular/core';
import { LoadingService } from './../../core/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass']
})
export class LoadingComponent {
  constructor(public loadingService: LoadingService){}
}
