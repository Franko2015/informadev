import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { PrivNavComponent } from '../../components/priv-nav/priv-nav.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [PrivNavComponent, FormsModule],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export default class PageComponent {

  targetElement: HTMLTextAreaElement | null = null;

  texts: any[] = [
    { id: 1, text: '', type: 'text' }
  ];

  // Función para manejar el inicio del arrastre
  DragStart(event: any, item: any) {
    this.targetElement = event.target; // Almacena el elemento de origen del arrastre
  }

  // Función para manejar el evento de arrastre sobre el área de soltar
  DragOver(event: any) {
    event.preventDefault();
  }

  // Función para manejar el soltar del elemento arrastrado
  Drop(event: any, index: number) {
    event.preventDefault();

    const targetTask = event.target;
    const textOfTarget = targetTask.value;

    if (this.targetElement instanceof HTMLTextAreaElement) {
      const textOfSource = this.targetElement.value;

      // Intercambia los valores entre los elementos textarea
      targetTask.value = textOfSource;
      this.targetElement.value = textOfTarget;

      // Ajusta la altura del textarea para adaptarse al contenido
      this.adjustTextareaHeight(targetTask);
      this.adjustTextareaHeight(this.targetElement);
    }

    // Restablece el targetElement
    this.targetElement = null;
  }

  // Función para ajustar la altura del textarea según su contenido
  adjustTextareaHeight(textarea: HTMLTextAreaElement | any) {
    textarea.style.height = 'auto'; // Restablece la altura
    textarea.style.height = textarea.scrollHeight + 'px'; // Establece la altura según el contenido
  }

  newInput() {
    // Obtener el último índice de texts para generar un nuevo id único
    const lastIndex = this.texts.length - 1;
    const newId = this.texts[lastIndex].id + 1;

    // Crear un nuevo objeto para el nuevo input
    const newItem = {
      id: newId,
      text: '',
      type: 'text' // Puedes cambiar el tipo según sea necesario
    };

    // Agregar el nuevo objeto a la lista de texts
    this.texts.push(newItem);
  }

  start() {
    let init = ''
    let types = ['/h1', '/h2', '/h3', '/h4', '/h5', '/h6', '/table', '/image', '/video', '/audio', '/archive'];

    for (let i = 0; i < this.texts.length; i++) {
      switch (this.texts[i].text.startsWith('/')) {
        case '/h1':
          this.texts[0].type = 'h1';
          break;
        case '/h2':
          this.texts[0].type = 'h2';
          break;
        case '/h3':
          this.texts[0].type = 'h3';
          break;
        case '/h4':
          this.texts[0].type = 'h4';
          break;
        case '/h5':
          this.texts[0].type = 'h5';
          break;
        case '/h6':
          this.texts[0].type = 'h6';
          break;
        case '/table':
          this.texts[0].type = 'table';
          break;
        case '/image':
          this.texts[0].type = 'image';
          break;
        case '/video':
          this.texts[0].type = 'video';
          break;
        case '/audio':
          this.texts[0].type = 'audio';
          break;
        case '/archive':
          this.texts[0].type = 'archive';
          break;
        default:
          this.texts[0].type = 'text';
          break;
      }
    }
  }

}
