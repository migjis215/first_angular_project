import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', 
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>    
        <!-- <img src="{{ imageUrl }}" /> -->
        <img [src]="imageUrl" />
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
    `
})
export class CoursesComponent {
    title = "List of courses";
    imageUrl = "https://dummyimage.com/400x200/000/fff";
    colSpan = 2;
    courses;
    
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}