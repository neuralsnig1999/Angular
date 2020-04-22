import { Component } from '@angular/core';
import { AssignmentComponent, Todo } from '../../assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css'],
})
export class Assignment2Component {
  headMessage : string;
  selectedRow : Number;
  setClickedRow : Function;

  data : Todo[];
  constructor(private snigdha : AssignmentComponent) {}
  
  ngOnInit(){

     this.data = this.snigdha.todos;
  }
  inputClass(event){
    event.target.parentNode.className = "active";
  }
}