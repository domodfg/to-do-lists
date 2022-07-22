import './style.css';
import {toDoFactory} from './factory.js'
import { format } from 'date-fns'
const container = document.querySelector('.container');

const formInput = (() => {
    const title = document.createElement('input');
    title.setAttribute('required', '');
    const description = document.createElement('input');

    const priority = document.createElement('select');
    priority.textContent='Priority'
    const highPrio = document.createElement('option');
    highPrio.setAttribute('value', 'High');
    highPrio.textContent='High'
    const midPrio = document.createElement('option');
    midPrio.setAttribute('value', 'Mid');
    midPrio.textContent='Mid'
    const lowPrio = document.createElement('option');
    lowPrio.setAttribute('value', 'Low');
    lowPrio.textContent='Low'
    priority.appendChild(highPrio);
    priority.appendChild(midPrio);
    priority.appendChild(lowPrio);

    const dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date');
    const submit = document.querySelector('button');
    const cancel = document.querySelector('button');
    return {
        title,
        description,
        priority,
        dueDate,
        submit,
        cancel
    }
})()


