import './styles/index.scss';
import Generator from './generator';
const $name = document.getElementById('name');
const gen = new Generator;
function getName () {
  gen.generate()
    .then(value => {
      $name.innerText = value;
      console.log(value);
    }
    )
    .catch(
      $name.innerText = 'Cannot get name'
    );
}
getName();
