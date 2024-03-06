import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})

export class SearchMovieComponent implements OnInit {
  
  currentYear: number = new Date().getFullYear();
  movieForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      identification: this.formBuilder.group({
        id: '',
        title: ''
      }, { validator: this.isRequiredValidator }),
      type: ['series'],
      releaseYear: ['', [Validators.required, this.rangeDateValidator.bind(this, 1900, this.currentYear)]],
      file: ['courte']
    });
    
    this.movieForm.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  onSubmit() {
    if (this.movieForm.valid) {
      console.log(this.movieForm.value);
    }
  }

  isRequiredValidator(group: FormGroup) {
    const id = group.get('id')?.value;
    const title = group.get('title')?.value;
    return id || title ? null : { isRequired: true };
  }

  rangeDateValidator(min: number, max: number) {
    return (control: { value: number }) => {
      const year = control.value;
      return year >= min && year <= max ? null : { min: { min, max } };
    };
  }
}
