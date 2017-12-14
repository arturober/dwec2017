import { minDateValidator, matchEmail } from './app.validators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'arf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  errors = {
    password: ''
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        email2: ['', [Validators.required, Validators.email]],
      }, {validator: matchEmail}),
      phone: ['', [Validators.pattern(/^\d{9}$/)]],
      birth: ['', [Validators.required, minDateValidator('1900-01-01')]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      notifyBy: 'email'
    });

    const phone = <FormControl>this.form.get('phone');
    const notify = <FormControl>this.form.get('notifyBy');
    const password  = <FormControl>this.form.get('password');
    notify.valueChanges.subscribe(
      value => {
        console.log(value);
        if (value === 'phone') {
          phone.setValidators([Validators.required, Validators.pattern(/^\d{9}$/)]);
        } else {
          phone.setValidators([Validators.pattern(/^\d{9}$/)]);
        }
        phone.updateValueAndValidity();
      }
    );

    password.valueChanges.debounceTime(500).subscribe(
      v => {
        this.errors.password = password.invalid ? 'Password must have minimum 4 characters' : '';
      }
    );
  }

  setDefaults() {
    this.form.patchValue({
      name: 'Someone',
      emailGroup: {
        email: 'someone@email.com',
        email2: 'someone@email.com'
      },
      password: '1234',
      birth: '1970-01-01'
    });
  }
}
