import { data } from '../data';

export const totalItems = data.reduce((acc, curr) => acc + curr.milestones.length, 0);

export const nameOfItemMinimalized = (item) => item.split(' ').slice(1).join('');

const storeInLocalStorage = (list) => {
    const arrayLocalStorage = Object.entries(localStorage);

    if (arrayLocalStorage.length === 0) {
        for (const item of list) {
            localStorage.setItem(item, false);
        }
    } else {
        for (const [key, value] of arrayLocalStorage) {
            localStorage.setItem(key, value);
        }
    }
}

export const createDefaultValuesOnStorage = () => {
    const allItems = [];

    data.forEach(items => {
        allItems.push(...items.milestones);
    });

    storeInLocalStorage(allItems);
}

export const allItemsFromLocalStorage = () => {
    return Object.entries(localStorage);
}

export const progressData = () => {
    const data = allItemsFromLocalStorage();

    return data.filter(item => item[1] === 'true').length;
}
