import { ViewChild, Component, OnInit, ElementRef } from '@angular/core';
import { MiningService } from '../../services/mining.service';
import { Mining } from '../../models/Mining';



@Component({
  selector: 'app-minings',
  templateUrl: './minings.component.html',
  styleUrls: ['./minings.component.css'],
  providers: [MiningService]
})
export class MiningsComponent implements OnInit {
  @ViewChild('btnClose') btnClose : ElementRef
  @ViewChild('btnCloseEdit') btnCloseEdit : ElementRef

  minings: Mining[];
  _id?: string;
  name: string;
  picture: string;
  price: string;
  category: string;
  description: string;




  constructor(private miningService: MiningService) {
    this.miningService.getMinings()
      .subscribe(minings => {
        console.log(minings);
        this.minings = minings;
      });
  }

  ngOnInit() {
  }
  addMining(event){
    event.preventDefault();
    console.log(this.name)
    console.log(this.picture)
    console.log(this.price)
    console.log(this.category)
    console.log(this.description)

    const newMining:Mining = {
      name: this.name,
      picture: this.picture,
      price: this.price,
      category: this.category,
      description: this.description
    };

    this.miningService.addMining(newMining)
      .subscribe(mining => {
        this.minings.push(mining);
        this.name = '';
        this.picture = '';
        this.price = '';
        this.category = '';
        this.description = '';
        this.btnClose.nativeElement.click();

      })
  }
  deleteMining(id) {

    if (!id == false ){
      const minings = this.minings;
      this.miningService.deleteMining(id)
        .subscribe(data => {
          // console.log(data)
          // console.log(data.n);
          if(data.n == 1) {
            for(let i = 0; i < minings.length; i++) {
              if(minings[i]._id == id) {
                minings.splice(i, 1);
              }
            }
          }
        })
    }
  }
  updateMining(mining: Mining) {

    const newMining = {
      _id: mining._id,
      name: this.name,
      picture: this.picture,
      price: this.price,
      category: this.category,
      description: this.description
    };
    this.miningService.updateMining(newMining)
      .subscribe(res => {
          console.log(res);
          this.name = mining.name;
          this.picture = mining.picture;
          this.price = mining.price;
          this.category = mining.category;
          this.description = mining.description;
          this.btnCloseEdit.nativeElement.click();
      })
  }
}
