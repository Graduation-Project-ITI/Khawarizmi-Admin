import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActiveService } from 'src/app/Services/RegisterService/active.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signupadmin',
  templateUrl: './signupadmin.component.html',
  styleUrls: ['./signupadmin.component.css']
})
export class SignupadminComponent {
  successMessage: any;

  constructor(private formBulider: FormBuilder, private myservice: ActiveService, private router:Router) {
    this.signupForm = this.formBulider.group({
      name: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(6)]],

    })


  }

  signupForm: FormGroup;
    errorMessage: string = '';



  get nameNotValid() {
    return !this.signupForm.controls['name'].value ? 'You must enter a value'
      : !this.signupForm.controls['name'].valid ? 'Invalid name format' : '';
  }

  get emailNotValid() {
    return !this.signupForm.controls['email'].value ? 'You must enter a value'
      : !this.signupForm.controls['email'].valid ? 'Invalid email format' : '';
  }

  get passwordNotValid() {
    return !this.signupForm.controls['password'].value ? 'You must enter a value'
      : !this.signupForm.controls['password'].valid ? 'Invalid password format, password should be 8 - 16 (lowercase or uppercase)characters or digits' : '';
  }

  signUp() {
    try {
      const fd = new FormData();
      fd.append('name', this.signupForm.get('name')?.value);
      fd.append('email', this.signupForm.get('email')?.value);
      fd.append('password', this.signupForm.get('password')?.value);
      fd.append('role', "admin");
      console.log(fd)
      // Swal.fire('Done', 'Successfully register', 'success');
      //     this.router.navigateByUrl('/login');
      this.myservice.SignUp(fd).subscribe({
        next: (response: any) => {
          // handle success response
          console.log(response); // log the response to see what the server is actually returning
          Swal.fire({
            icon: 'success',
            title: 'Signed up successfully',
            showConfirmButton: false,
            timer: 1500
            
          }).then(()=> location.assign('/signin'));


        },
        error: (error: HttpErrorResponse) => {
          // handle error response
          console.log(error);
          this.errorMessage = error.error.message; // access the error message from the error object
          if(this.errorMessage=="Email Already Exist"){
            Swal.fire({
              title: 'Email Already Exist !!',
              showClass: {
                popup: 'animate_animated animate_fadeInDown',
              },
              hideClass: {
                popup: 'animate_animated animate_fadeOutUp',
              },
            });
          }
          else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'in Valid sign up please try again !',
            });
          }
          console.log(this.errorMessage);
        }
      });

    } catch (error:any) {
      console.log(error.errorMessage);
      console.log(error);
    }

  }
}
