import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { longStackSupport } from 'q';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private service:AuthService, private router:Router) { }

  ngOnInit() {
    
  }
  Logout() {
    this.service.logout();
    this.router.navigateByUrl('login');

  }


}
