import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'hp-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidationsComponent {

  form!: FormGroup;

  testValue: any;

  dropdownData: any[] = [
    {key: 'Option 1', value: 1},
    {key: 'Option 2', value: 2},
    {key: 'Option 3', value: 3},
    {key: 'Option 4', value: 4},
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      textbox: ['', Validators.required],
      textarea: ['', Validators.required],
      checkbox: [false],
      radioButton: ['', Validators.required],
      dropdown: ['', Validators.required],
      addresses: this.formBuilder.array([])
    });
  }

  get addresses(): FormArray {
    return this.form.get('addresses') as FormArray;
  }

  addAddress(): void {
    this.addresses.push(this.formBuilder.control('', Validators.required));
  }

  removeAddress(index: number): void {
    this.addresses.removeAt(index);
  }

  onSubmit(): void {
    console.log("Form values:", this.form.value);

    if (this.form.valid) {
      console.log("Form values:", this.form.value);
    } else {
      console.log("Form is not valid!");
    }
  }


}
