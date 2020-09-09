import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectFormComponent } from '../../components/project-form/project-form.component';
import { ProjectFormModalComponent } from '../../components/project-form-modal/project-form-modal.component';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  projects = [
    {
      id: 1,
      title: "Bookstore",
      image: "https://i.pinimg.com/originals/a6/e2/98/a6e298357f958a27d329f0b27ccbdb97.jpg",
      selected: false
    },
    {
      id: 2,
      title: "Music App",
      image: "https://image.freepik.com/vector-gratis/music-master-royal-music-logo_7791-365.jpg",
      selected: false
    },
    {
      id: 3,
      title: "Movies",
      image: "https://pbs.twimg.com/profile_images/517326018177011712/XwrARxbO.png",
      selected: true
    },
  ]
  ngOnInit(): void {
  }

  handleEdit(event){
      this.openProjectForm(event);
  }

  handleDelete(event) {
    if(confirm("Eliminar?")){

      console.log(event);
    }
  }

  openProjectForm(project?) {
    const dialogRef = this.dialog.open(ProjectFormModalComponent, {
      data: project
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
