# ngx-retro-grid

`@omnedia/ngx-retro-grid` is an Angular library that provides a retro-styled grid background animation for Angular components. This component creates a 3D perspective grid with customizable colors, rotation, and smooth animation, perfect for adding a nostalgic or futuristic visual effect to your application.

## Features

- Retro grid animation with customizable grid color, fade color, and grid rotation.
- Flexible configuration to match the style of your application.
- Lightweight and easy to integrate as a standalone component.

## Installation
Install the library using npm:

```bash
npm install @omnedia/ngx-retro-grid
```

## Usage
Import the NgxRetroGridComponent in your Angular module or component:

```typescript
import { NgxRetroGridComponent } from '@omnedia/ngx-retro-grid';

@Component({
  ...
  imports: [
    ...
    NgxRetroGridComponent,
  ],
  ...
})
```

Use the component in your template:

```html

<om-retro-grid
  [gridColor]="'#ff007f'"
  [fadeColor]="'#000000'"
  [gridRotation]="'35deg'"
  styleClass="custom-class"
>
  <h1>Your content here</h1>
</om-retro-grid>
```

## API

```html

<om-retro-grid
  [gridColor]="gridColor"
  [fadeColor]="fadeColor"
  [gridRotation]="gridRotation"
  styleClass="your-custom-class"
>
  <ng-content></ng-content>
</om-retro-grid>
```

- gridColor (optional): The color of the grid lines in the background. Accepts a hex color code.
- fadeColor (optional): The color used for the fading effect in the background. Accepts any valid CSS color value.
- gridRotation (optional): The rotation angle for the grid. Accepts any valid CSS rotation value (e.g., '35deg', '45deg').
- styleClass (optional): A custom CSS class to apply to the component's wrapper element.

## Example

```html
<om-retro-grid
  [gridColor]="'#00ffcc'"
  [fadeColor]="'#001f3f'"
  [gridRotation]="'45deg'"
  styleClass="example-class"
>
  <div class="content">This is a retro grid background</div>
</om-retro-grid>
```

This will create a retro grid background with a cyan grid, a dark blue fading effect, and a 45-degree rotation for the grid.

## Styling
To customize the appearance of the grid or the container, use the styleClass input to apply your own CSS classes.

```css
.example-class {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}
```

## Contributing
Contributions are welcome. Please submit a pull request or open an issue to discuss your ideas.

## License
This project is licensed under the MIT License.