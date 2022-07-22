import './style.css';
import {toDoFactory} from './factory.js'
import { format } from 'date-fns'
const container = document.querySelector('.container');

const formInput = (() => {
    const title = document.createElement('input');
    const description = document.createElement('input');
    const priority = document.createElement('input');
    const dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date');
    return {
        title,
        description,
        priority,
        dueDate
    }
})()

