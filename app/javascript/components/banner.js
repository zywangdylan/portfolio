import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["ZHENYUAN WANG", "AMIABLE", "A CODER", "CONSIDERATE", "PRACTICAL", "SENSIBLE"],
    typeSpeed: 80,
    loop: true
  });
}

export { loadDynamicBannerText };
