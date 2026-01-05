import { Component, OnInit } from '@angular/core';
import { AvatarItem } from 'src/app/shared/model';
import { IMAGES1, IMAGES2 } from '../shared/data/docs-config';
import { IAlbum, Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'rw-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  avatarSizes: string[] = ['xl', 'lg', 'md', 'sm', 'xs'];
  avatarGroup: AvatarItem[] = [];

  album1: IAlbum[] = [];
  album2: IAlbum[] = [];

  constructor(private lightbox: Lightbox) { }

  ngOnInit(): void {
    this._fetchData();
    this.avatarGroup = [
      {
        name: 'user-1',
        avatar: 'assets/images/avatars/img-7.jpg'
      },
      {
        name: 'user-2',
        avatar: 'assets/images/avatars/img-2.jpg'
      },
      {
        name: 'user-3',
        avatar: 'assets/images/avatars/img-4.jpg'
      }
    ];
  }

  _fetchData(): void {
    this.album1 = IMAGES1;
    this.album2 = IMAGES2;
  }

  /**
  * open simple lightbox 
  * @param index image number
  */
  openSimpleLightbox(index: number): void {
    this.lightbox.open(this.album1, index, { fadeDuration: 0.1, resizeDuration: 0.1, wrapAround: true, showImageNumberLabel: true, disableScrolling: true, centerVertically: true });
  }

  /**
  * open grid lightbox 
  * @param index image number
  */
  openGridLightbox(index: number): void {
    this.lightbox.open(this.album2, index, { fadeDuration: 0.01, resizeDuration: 0.01, wrapAround: true, showImageNumberLabel: true, disableScrolling: true, centerVertically: true });
  }

  /**
   * close lightbox programmatically
   */
  close(): void {
    this.lightbox.close();
  }
}
