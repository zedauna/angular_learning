import { Component,model, output,} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})

export class SearchBar {

  search = model('Initial');
  
  searchButtonClicked = output<void>();

  searchClick(){
    console.log('clicked 1');
    this.searchButtonClicked.emit() ;
  }

}
