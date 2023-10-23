import task1 from './0001.json';
import task2 from './0002.json';
import task3 from './0003.json';
import task4 from './0004.json';
import task5 from './0005.json';
import task6 from './0006.json';
import task7 from './0007.json';
import task8 from './0008.json';
import task9 from './0009.json';
import task10 from './0010.json';

const base = process.env.NODE_ENV === 'production' ? '/skillometer/' : '/';

const tasks = [task1, task2, task3, task4, task5, task6, task7, task8, task9, task10];
tasks.forEach((task) => {
	task.images = task.images.map((image) => base + image);
});

export default { ...tasks };
