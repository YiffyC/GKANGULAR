import { Injectable } from '@angular/core';
import { Person } from './person';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const PEOPLE : Person[] = [
      {id: 1, name: 'Luke Skywalker', height: 177, weight: 70},
      {id: 2, name: 'Darth Vader', height: 200, weight: 100},
      {id: 3, name: 'Han Solo', height: 185, weight: 85},
    ];

@Injectable()
export class PeopleService
{
	baseUrl: string = "http://swapi.co.api" ;


  constructor(private http: Http){}
/*
  getAll() : Person[] {
    return PEOPLE.map(p => this.clone(p));
  }
*/
getAll() : Observable<Person[]>
{
  let people$ = this.http.get(`${this.baseUrl}/people`, {headers: this.getHeaders()}).map(mapPersons);
  return people$;
}
  get(id: number) : Person {
    return this.clone(PEOPLE.find(p => p.id === id));
  }
  save(person: Person){
    let originalPerson = PEOPLE.find(p => p.id === person.id);
    if (originalPerson) Object.assign(originalPerson, person);
    // saved moahahaha
  }

  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }

  private getHeaders()
  {
		let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
	}


}

  //here
  function mapPersons(response:Response): Person[]
  {
    return response.json().results.map(toPerson)
  }

  function toPerson(r:any): Person
  {
    let person = <Person>({
                              id:extractId(r),
                              url:r.url,
                              name: r.name,
                              weight: Number.parseInt(r.mass),
                              height: Number.parseInt(r.height)
                          });
    console.log('Parsed person: ', person);
    return person
  }

function extractId(personData:any)
{
  let extractId = personData.url.replace('http://swapi.co/api/people', '').replace('/','');
  return parseInt(extractId);
}
