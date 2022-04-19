import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.css']
})
export class TestResultComponent implements OnInit {
  result;


  constructor(private router: Router) {
    this.result = this.router.getCurrentNavigation()?.extras?.state?.['data'];
  }

  ngOnInit(): void {
  }


}
