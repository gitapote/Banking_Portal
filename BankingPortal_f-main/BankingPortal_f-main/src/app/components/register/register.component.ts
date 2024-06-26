import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


 function passwordMismatch(controlName: string, matchingControlName: string){

  return (formGroup: FormGroup) => {

      const control = formGroup.controls[controlName];

      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.passwordMismatch) {

          return;

      }

      if (control.value !== matchingControl.value) {

          matchingControl.setErrors({ passwordMismatch: true });

      } else {

          matchingControl.setErrors(null);

      }

  }

}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  showRegistrationData = false;
  registrationData: any;
  print  =  console

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone_number: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      // Add other form controls if needed
    }, { 

      validator: passwordMismatch('password', 'confirmPassword')

    }
  );
  }


  // Convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    // Call the API service to register the user
    this.authService.registerUser(this.registerForm.value).subscribe(
      (response: any) => {
        // Store the registration data and show it on the page
        this.registrationData = response;
        this.showRegistrationData = true;
        //  const token = 'your-token-from-console';
        // this.apiService.getAllUser(token).subscribe((users) => {
        //   console.log('Users:', users);

          // Navigate to the admin dashboard after successful registration
          // this.router.navigate(['adminDashbord']);
      },
      (error: any) => {
        console.error('Registration failed:', error);
      }
    );
  }



}


