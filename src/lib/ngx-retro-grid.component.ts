import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "om-retro-grid",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-retro-grid.component.html",
  styleUrl: "./ngx-retro-grid.component.scss",
})
export class NgxRetroGridComponent {
  @Input("gridColor")
  set gridColor(hexColor: string) {
    const hsl = this.hexToHSL(hexColor);

    this.style["--grid-color"] = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%, 0.35)`;
  }

  @Input("fadeColor")
  set fadeColor(color: string) {
    this.style["--fade-color"] = color;
  }

  @Input("gridRotation")
  set gridRotation(rotation: string) {
    this.style["--grid-rotation"] = rotation;
  }

  @Input("styleClass")
  styleClass?: string;

  style: any = {};

  private hexToHSL(hex: string): { h: number; s: number; l: number } {
    if (Array.from(hex)[0] !== "#") {
      hex = "#" + hex;
    }

    if (hex.length === 4) {
      hex = hex
        .split("")
        .map((char) => {
          if (char === "#") {
            return char;
          }

          return char + char;
        })
        .join("");
    }

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (!result) {
      throw new Error("Could not parse Hex Color");
    }

    const rHex = parseInt(result[1], 16);
    const gHex = parseInt(result[2], 16);
    const bHex = parseInt(result[3], 16);

    const r = rHex / 255;
    const g = gHex / 255;
    const b = bHex / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    let h = (max + min) / 2;
    let s = h;
    let l = h;

    if (max === min) {
      return { h: 0, s: 0, l: 100 };
    }

    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;

    s = s * 100;
    s = Math.round(s);
    l = l * 100;
    l = Math.round(l);
    h = Math.round(360 * h);

    return { h, s, l };
  }
}
