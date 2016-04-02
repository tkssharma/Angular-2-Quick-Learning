import {Pipe} from 'angular2/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'ArtistPipe'
})
export class ArtistPipe {

  // Transform is the new "return function(value, args)" in Angular 1.x
  transform(value) {
    // ES6 array destructuring
	  return `Hello  ${value}`;
  }

}