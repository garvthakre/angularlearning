import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
coursename : string = "angular js"
inputType = "checkbox"
rollNo: number = 123
isIndian : boolean = false
state : string = "up"
constructor(){

}
changeCourseName(){
  this.coursename = "React Js"
}
showAlert(message: string){
  alert(message)
}
}
