import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "ngx-documents",
  templateUrl: "./documents.component.html",
  styleUrls: ["./documents.component.scss"],
})
export class DocumentsComponent implements OnInit {
  projectId:number;
  assetId:number;
  constructor(private activateroute: ActivatedRoute) {
    this.activateroute.params.subscribe((params) => {
      this.projectId=params['projectId'];
      this.assetId=params['assetId'];
      console.log(this.projectId);
    });
//     this.activateroute.queryParams.subscribe(params => {
// let x=params['assetId'];
// console.log(x);


//     });
  }

  ngOnInit(): void {}
}
