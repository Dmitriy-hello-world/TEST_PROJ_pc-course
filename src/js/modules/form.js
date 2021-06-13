import inputValidNum from './inputValidNum.js';

const forms = () => {
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          message = {
              loading: 'Отправка..',
              succes: 'Все готово, ваши данные отправлены!',
              fail: 'Упс.. попробуйте еще раз',
              empty: 'Пожалуйста заполните все поля'
          };

    const postData = async (url,data) => {

        const result = await fetch(url, {
            method: 'POST',
            body: data
        });

        document.querySelector('.status').textContent = message.loading;

        return await result.text();  
    }; 
    
    inputValidNum('input[name="phone"]');

    forms.forEach( item => {
        item.addEventListener('submit', e => {

            e.preventDefault();

            const messageBlock = document.createElement('div');
            messageBlock.classList.add('status');
            item.appendChild(messageBlock);

            let formData = new FormData(item);

            let isValid = true;

            item.querySelectorAll('input').forEach( item => {
                if (item.value.length < 1) {
                    isValid = false;
                }
            });

            if (isValid) {
                postData('./server.php', formData)
                .then(res => {
                    console.log(res);

                    messageBlock.textContent = message.succes;
                })
                .catch(() => {messageBlock.textContent = message.fail;})
                .finally(() => {
                    inputs.forEach(item => {
                        item.value = '';
                    });

                    setTimeout(() => {
                        document.querySelector('.overlay').style.display = 'none';
                        document.body.style.overflow = '';
                    }, 3000);


                    setTimeout(() => {messageBlock.remove();},4000);
                });
            } else {
                messageBlock.textContent = message.empty;
                setTimeout(() => {messageBlock.remove();},4000);
            }
        });
    });    
};

export default forms;