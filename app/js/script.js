const dark = document.getElementById('dark');
const system = document.getElementById('system');
const light = document.getElementById('light');
const card = document.querySelectorAll('.card');
const headingOne = document.querySelector('.heading-one');
const headingTwo = document.querySelector('.heading-two');

const handleDark = () => {
  document.body.style.background = 'hsl(230, 17%, 14%)';
  Array.from(card).forEach((card) => {
    card.style.background = 'hsl(228, 28%, 20%)';
    card.style.color = '#fff';
    card.addEventListener('mouseenter', () => {
      card.style.background = 'hsla(228, 23%, 42%, 0.5)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.background = 'hsl(228, 28%, 20%)';
    });
  });
  headingOne.style.color = '#fff';
  headingTwo.style.color = '#fff';
};

const handleLight = () => {
  document.body.style.background = '#fff';
  Array.from(card).forEach((card) => {
    card.style.background = 'hsl(227, 47%, 96%)';
    card.style.color = '#000';
    card.addEventListener('mouseenter', () => {
      card.style.background = 'hsl(230, 22%, 74%)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.background = 'hsl(227, 47%, 96%)';
    });
  });
  headingOne.style.color = '#000';
  headingTwo.style.color = 'hsl(228, 12%, 44%)';
};
dark.addEventListener('click', handleDark);
light.addEventListener('click', handleLight);
system.addEventListener('click', handleDark);
