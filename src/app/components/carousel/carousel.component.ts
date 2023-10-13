import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input()
  items: { id: number; name: string; price: string; pathImg: string; gameLabel: string; gameType: string }[] =
    [{ id: 0, price: '', pathImg: '', name: '', gameLabel: '', gameType: '' }];

  active: number = 0

  constructor() {
  }

  ngOnInit(): void {
  }

  previousImg() {
    let currentItem = this.active
    let maxItem = this.items.length - 1
    currentItem <= 0 ? (currentItem = maxItem) : (currentItem -= 1)
    document.querySelectorAll(".item").forEach((item) => item.classList.remove("current-item"))
    document.querySelectorAll(".item")[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    })
    document.querySelectorAll(".item")[currentItem].classList.add("current-item")
    this.active = currentItem
  }

  nextImg() {
    let currentItem = this.active
    let maxItem = this.items.length - 1
    currentItem >= maxItem ? (currentItem = 0) : (currentItem += 1)
    document.querySelectorAll(".item").forEach((item) => item.classList.remove("current-item"))
    document.querySelectorAll(".item")[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    })
    document.querySelectorAll(".item")[currentItem].classList.add("current-item")
    this.active = currentItem
  }
}
