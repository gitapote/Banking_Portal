import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-slider',
  templateUrl: './admin-slider.component.html',
  styleUrls: ['./admin-slider.component.css']
})
export class AdminSliderComponent {
  sidebarVisible = true; // Set the initial state to visible
  
  constructor(private authservice: AuthService) { }
  ngOnInit(): void {
    this.sidebarVisible =  !this.checkScreenSize();
    
  }

  checkScreenSize() {
    return window.innerWidth < 768; // Adjust the breakpoint as needed
  }
  
  isLoggedIn() {
    return this.authservice.isLoggedIn();
  }

 
  
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
