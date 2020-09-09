import { Component, OnInit, Inject } from "@angular/core";
import { ProjectFormComponent } from "../project-form/project-form.component";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-project-form-modal",
  templateUrl: "./project-form-modal.component.html",
  styleUrls: ["./project-form-modal.component.scss"],
})
export class ProjectFormModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProjectFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
