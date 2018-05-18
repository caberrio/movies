import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() title: string;
  @Input() movies;
  @Output() update = new EventEmitter();


  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  openMovie(movie) {
    const modalRef = this.modalService.open(ModalComponent, {size: 'lg'});
    modalRef.componentInstance.movie = movie;

    modalRef.result.then((data) => {
      alert(data);
      this.update.emit();
    }, (res) => {
      this.update.emit();
    });
  }
}
