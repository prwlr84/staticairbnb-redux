import flats from '../flats';
export function setFlats() {
 // TODO: Api call! For now, simulate a DB
//  return {
//  type: 'SET_FLATS',
//  payload: flats
//  }
  const promise = fetch('https://raw.githubusercontent.com/prwlr84/files/main/flats.json')
    .then(response => response.json());

  return {
    type: 'SET_FLATS',
    payload: promise
  };
};


export function selectFlat(flat) {

 return {
 type: 'SELECT_FLAT',
 payload: flat
 }
}
