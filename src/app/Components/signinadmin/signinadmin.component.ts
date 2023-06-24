import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActiveService } from 'src/app/Services/RegisterService/active.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signinadmin',
  templateUrl: './signinadmin.component.html',
  styleUrls: ['./signinadmin.component.css']
})
export class SigninadminComponent {

  isAuthentication: any;
  signupForm: FormGroup;
  sentToken: { token: string } = { token: "" };

  constructor(
    private formBulider: FormBuilder,
    private authService: ActiveService,
    private router: Router
  ) {
    this.signupForm = this.formBulider.group({
      name: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  get nameNotValid() {
    return !this.signupForm.controls['name'].value ? 'You must enter a value'
      : !this.signupForm.controls['name'].valid ? 'Invalid name format' : '';
  }

  get passwordNotValid() {
    return !this.signupForm.controls['password'].value ? 'You must enter a value'
      : !this.signupForm.controls['password'].valid ? 'Invalid password format, password should be 8 - 16 (lowercase or uppercase)characters or digits' : '';
  }

  signUp() {
        console.log(this.signupForm.value);
        
        try {
          this.authService.Signin(this.signupForm.value).subscribe({
            next:(result: any) => {
              console.log(result);
              localStorage.setItem('userName', this.signupForm.controls['name'].value);
              localStorage.setItem('token', result.token);
              localStorage.setItem("userId", result.userId);
              this.sentToken = result;
              console.log(localStorage.getItem('token'));

              // const decodedToken: any = jwt_decode(this.sentToken.token);
              // const nameIdentifier = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
              // console.log(decodedToken);
              // console.log(nameIdentifier);
              // console.log(localStorage.getItem('token'));

              // Check if user is authenticated
              this.isAuthentication = this.authService.isLoggedIn();

              Swal.fire('Done', 'Successfully logged in', 'success');
              window.location.href = 'http://localhost:4202/dashboard';

              // Redirect to home page if user is authenticated
              if (this.isAuthentication) {
              } else {
                // console.log('not logged in');
              }

              console.log(this.signupForm.get("name")?.value);
              console.log(this.signupForm.get('password')?.value);
            },
            error:(error) => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'UserName Or Password is incorrect!',
              });
              console.log('not logged in');
              console.log(error.message);
              

              console.log(error);
            }
        });
        } catch (error) {
          console.log(error);
        }
      
     //end subscribe

    console.log(this.signupForm.get("name")?.value);
    console.log(this.signupForm.get('password')?.value);
  }

}
