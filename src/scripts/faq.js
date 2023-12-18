const questions = document.querySelectorAll('.faq__question');

let activeItem = document.querySelector('.faq__questions #question_1');

questions.forEach((question) => {
  question.addEventListener('click', (event) => {
    const target = event.currentTarget;
    const targetID = getID(target);
    const activeID = getID(activeItem);

    if (target !== activeItem) {
      activeItem.querySelector('.svg--arrow').classList.remove('svg--rotate');
      document.querySelector(`#answer_${activeID}`).classList.add('hidden');

      activeItem = target;

      activeItem.querySelector('.svg--arrow').classList.add('svg--rotate');
      document.querySelector(`#answer_${targetID}`).classList.remove('hidden');
    }
  });
});

function getID(item) {
  return item.id.slice(item.id.indexOf('_') + 1);
}
