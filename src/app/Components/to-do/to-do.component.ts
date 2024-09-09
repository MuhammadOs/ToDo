import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  Title: string = "To Do List App";
  ImageSrc: string = "https://cdn3.iconfinder.com/data/icons/business-office/256/To-do_List-1024.png";

  tasks: string[]= [];
  newTask: string ="";
  isAvailable: boolean = false;
  AddTask(){
    if(this.newTask.trim() !== ""){
      this.tasks.push(this.newTask);
      this.newTask="";
      this.isAvailable = true;
    }
    console.log(this.tasks);
  }

  // editTask(index: number){
  //   let updateTask = prompt("Edit Task", this.tasks[index]);
  //   if(updateTask !== null){
  //     this.tasks[index] = updateTask.trim();
  //   }
  // }
  EditTask(index: number, newTaskEdit: string): string | void {
    if(newTaskEdit.trim() !== ""){
      this.tasks[index] = newTaskEdit.trim();
    } else{
      newTaskEdit = this.tasks[index];
      return this.newTask = newTaskEdit;
    }
    this.newTask = "";
  }

  RemoveTask(index: number){
    this.tasks.splice(index, 1);
    this.isAvailable = this.tasks.length > 0;
  }
}
