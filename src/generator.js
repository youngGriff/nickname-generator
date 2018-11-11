export default class Generator {
  set (gender = 'both', region = 'Albania') {
    this.data = {
      'gender': gender,
      'region': region
    };
  }

  constructor (gender = 'both', region = 'Albania') {
    this.set(gender, region);
  }

  async generate () {
    const url = new URL('https://uinames.com/api/');
    this.collectParameters(url);
    const json = await (await fetch(url)).json();

    return `${json.name} ${json.surname}`;
  }

  collectParameters (url) {
    Object.keys(this.data).forEach(key => url.searchParams.append(key, this.data[key]));
    if (this.data.gender === 'both') {
      url.searchParams.delete('gender');
    }
  }
}
