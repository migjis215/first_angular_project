import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class AuthorsService {

  getAuthors() {
    return [ "author1", "author2", "author3" ];
  }
}
