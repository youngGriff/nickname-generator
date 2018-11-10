import './styles/index.scss';
import Generator from './generator';

const $name = document.getElementById('name');
const $genButton = document.getElementById('btn-generate');
const $countrySelect = document.getElementById('country-select');
const $SelecGender = document.getElementById('gender-select');
const $body = document.getElementsByTagName('body')[0];
const $copyButton = document.getElementById('btn-copy');

const gen = new Generator;
$copyButton.style.display = 'none';
$genButton.addEventListener('click', () => getName());

function getName () {
  gen.set($SelecGender.options[$SelecGender.selectedIndex].value,
    $countrySelect.options[$countrySelect.selectedIndex].value);

  gen.generate()
    .then(value => {
      $copyButton.style.display = 'inline-block';
      $name.innerText = value;
    }
    )
    .catch(() => {
      $copyButton.style.display = 'none';

      $name.innerText = 'Cannot get name';
    }
    );
}

function copyToClip (innerText) {
  const $tempInput = document.createElement('INPUT');
  $tempInput.setAttribute('display', 'none');
  $body.appendChild($tempInput);
  $tempInput.setAttribute('value', innerText);
  $tempInput.select();
  document.execCommand('copy');
  $body.removeChild($tempInput);
}

$copyButton.addEventListener('click', () => copyToClip($name.innerText));
getName();
