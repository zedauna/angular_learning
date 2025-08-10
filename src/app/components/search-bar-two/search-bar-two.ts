import {
  Component,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar-two',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './search-bar-two.html',
  styleUrl: './search-bar-two.css',
})
export class SearchBarTwo {
  /**
   * TODO before
   */
  // @Output() searchButtonClicked = new EventEmitter<string>();
  // @Input() search = 'Initial';
  // @Output() searchChange = new EventEmitter<string>();

  /**
   * TODO Now
   */
  search = input<string>('Initial 2');

  searchChange = output<string>();
  
	searchButtonClicked = output<void>({
		alias: 'submit'
	});

  searchClick() {
    console.log('clicked 2');
    this.searchButtonClicked.emit();
  }
  updateSearch(value: string) {
    this.searchChange.emit(value);
  }
}
