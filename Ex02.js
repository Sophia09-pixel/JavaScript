
const tbody = document.querySelector('.historico');

const form = document.querySelector('#dados');

form.addEventListener('submit', (event) => {
 
    event.preventDefault();

    const campos = [
        form.querySelector('#nome'),
        form.querySelector('#celular'),
        form.querySelector('#origem'),
        form.querySelector('#destino'),
        form.querySelector('#data'),
        form.querySelector('#modelo')
    ];

    const tr = document.createElement('tr');

    campos.forEach(campos => {
       
        const td = document.createElement('td');

       
        td.textContent = campos.value;

        
        tr.appendChild(td);
    });

    tbody.appendChild(tr);

    form.reset();
});