import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrl: './add-review.component.css'
})
export class AddReviewComponent {
  form = new FormGroup(
    {
      "review": new FormControl('', Validators.required),
      "ratign": new FormControl('', Validators.required),
    }
  )

}
