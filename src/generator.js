export default class Generator {
  constructor (gender = 'male', region = 'United States') {
    this.data = {
      'gender': gender,
      'region': region
    };
  }

  async generate () {
    const url = new URL('http://uinames.com/api/');
    Object.keys(this.data).forEach(key => url.searchParams.append(key, this.data[key]));


    const json = await (await fetch(url)).json();

    return `${json.name} ${json.surname}`;
  }
}
