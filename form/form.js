const form = document.querySelector('.form__form'); // элемент формы
form.setAttribute('novalidate', true); // отключает стандартную браузерную валидацию

// блок с сообщением об успешной отправке или ошибки
const formThanks = document.querySelector('.form__thanks');
const thanksButton = formThanks.querySelector('.form__button');

thanksButton.addEventListener('click', () => {
  formThanks.classList.remove('form__thanks--visible');
});

// обработчик отправки формы
form.addEventListener('submit', evt => {
  evt.preventDefault(); // отменяет стандартное поведение при отправке формы чтобы страница не перезагружалась
  const formElements = form.elements; // все элементы формы
  let isFormValid = true; // в начальный момент считается, что форма валидна

  // перебирает все элементы формы
  Array.from(formElements).forEach(field => {
    if (field.type === 'submit') {
      return; // если элемент формы оказался кнопкой отправки, то ничего не делает
    }
    const bemBlockClassName = field.className.split('__')[0]; // находит имя БЭМ-блока
    const bemBlock = field.closest(`.${bemBlockClassName}`); // и сам БЭМ-блок

    if (!field.validity.valid) {
      isFormValid = false; // если поле не валидно, то и вся форма не валидна.
      bemBlock.classList.add(`${bemBlockClassName}--error`); // также добавляетя класс ошибки
    } else {
      bemBlock.classList.remove(`${bemBlockClassName}--error`); // если же поле валидно, то при условии наличия класса ошибки он удаляется
    }
  });

  if (isFormValid) {
    // если форма валидна, то дальше отправляет данные на сервер
    fetch(form.action, {
      method: form.method,
      body: new FormData(form)
    })
      // если форма отправилась успешно, то показывает сообщение об успешной отправке
      .then(response => {
        formThanks.classList.add('form__thanks--visible');
        form.reset(); // дополнительно очишает форму на начальное состояние
      })
      // если же произошла ошибки, то показывает сообщение с текстом ошибки
      .catch(error => {
        formThanks.classList.add('form__thanks--visible');
        const message = document.querySelector('.form__thanks-message');
        message.textContent = `Произошла ошибка отправки формы: ${error}`;
      });
  }
});
