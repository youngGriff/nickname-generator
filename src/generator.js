
export default async function generate (genData) {
  const response = await fetch(genData.getUrl());
  const json = await response.json();

  return `${json.name} ${json.surname}`;
}

