import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-document-card",
  templateUrl: "./document-card.component.html",
  styleUrls: ["./document-card.component.scss"],
})
export class DocumentCardComponent implements OnInit {
  constructor() {}
  items = [
    // { icon: { icon: "more-horizontal-outline", pack: "eva" } },
    { title: "Rename" },
    { title: "Share" },
    { title: "Download" },
  ];
  ngOnInit(): void {}
}
