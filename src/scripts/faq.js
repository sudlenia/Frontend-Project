const questions = document.querySelector('.faq__questions');

let activeItem = questions.querySelector('#question_1');

questions.addEventListener('click', (event) => {
  const target = event.target.closest('.faq__question');
  const targetID = getID(target);
  const activeID = getID(activeItem);

  if (target != activeItem) {
    activeItem.querySelector('.svg--arrow-up').classList.add('hidden');
    activeItem.querySelector('.svg--arrow-down').classList.remove('hidden');
    questions.querySelector(`#answer_${activeID}`).classList.add('hidden');

    activeItem = target;

    activeItem.querySelector('.svg--arrow-up').classList.remove('hidden');
    activeItem.querySelector('.svg--arrow-down').classList.add('hidden');
    questions.querySelector(`#answer_${targetID}`).classList.remove('hidden');
  }
});

function getID(item) {
  return item.id.slice(item.id.indexOf('_') + 1);
}
