import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.css']
})
export class AddUserModalComponent implements OnInit {

  public modalOption: NgbModalOptions = {};
  public modalReference: NgbModalRef;
  
  @ViewChild('ContentModal', { static: false }) contentModal: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    this.modalOption.size = 'lg';
  }

  openModal() {
    this.modalReference = this.modalService.open(this.contentModal, this.modalOption);
  }

}
