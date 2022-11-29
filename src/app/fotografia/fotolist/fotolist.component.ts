import { Component } from '@angular/core';

@Component({
  selector: 'app-fotolist',
  templateUrl: './fotolist.component.html',
  styleUrls: ['./fotolist.component.css']
})
export class FotolistComponent {

  imagens = [
    {
      img: "https://directimports.com.br/wp-content/uploads/2021/09/533458-scaled.jpg",   
      titulo: "Lamborghini Aventador SVJ 2022"
    },
    {
      img: "https://directimports.com.br/wp-content/uploads/2021/09/533457-scaled.jpg",   
      titulo: "Lamborghini Aventador SVJ 2022"
    },
    {
      img: "https://directimports.com.br/wp-content/uploads/2021/09/533455-scaled.jpg",   
      titulo: "Lamborghini Aventador SVJ 2022"
    },
    {
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQ6bgKBEItIhU2mKf91btYPa988uCu0GmsR4iP8IquMuuX6FlMNdcuHY3h6UXTQhQUJH_czX-9GeDyuDBt6ni7eom-3U7St1rkmE91iYqgX68tqHtTCS2yhjD-zR1ddUGrLkNa04wAQdVZh5CyUFBiZGwN0YpU0W91XTQrDyPNm0SgZnURaBv5TqBC-w/s2560/NOVITEC%20FSF9%20Aero%20Pic05.jpg",   
      titulo: "Ferrari SF90 Stradale"
    },

    {
      img: "https://cdn.motor1.com/images/mgl/xqq24z/s1/novitec-ferrari-sf90-stradale-2022.jpg",   
      titulo: "Ferrari SF90 Stradale"
    },
    {
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsfSUsQ2B-B4PUyi6BE3T60e00kOPhxeu8XmnjkymQj8DxBibme9te6ZYFxZj1DusuCC88mVu-A5XCmRdeYXYqh4cTDVlmRcRbZAHAHmvs_FBR0WG8rbXzHjTEQUYBnf8Ao-SxenIMtpRqsMHYULPNB84Ob03Su1Bd83QGAN5Ppf0xjZcNHPN4Ed3yxA/s2560/NOVITEC%20FSF9%20Aero%20Pic02.jpg",   
      titulo: "Ferrari SF90 Stradale"
    },
    {
      img: "https://quatrorodas.abril.com.br/wp-content/uploads/2021/09/nissan-gtr-1.jpg?quality=70&strip=info&w=1024&resize=1200,800",   
      titulo: "Nissan GT-R 2022"
    },
    {
      img: "https://directimports.com.br/wp-content/uploads/2021/09/210914-01_008.jpg",   
      titulo: "Nissan GT-R 2022"
    },
    {
      img: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F05%2Fnissan-closes-orders-for-2022-gtr-japan-r35-news-tw.jpg?w=960&cbr=1&q=90&fit=max",   
      titulo: "Nissan GT-R 2022"
    }
  ]
}
