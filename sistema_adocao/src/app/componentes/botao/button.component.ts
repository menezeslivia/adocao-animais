import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-botao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./botao.component.scss']
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() buttonType: string = 'primary';
}
