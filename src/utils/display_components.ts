import type { components } from '../interfaces/components'

export function displayComponentInConsole(component: components, level = 0): void {
    const indent = '  '.repeat(level);

    console.log(`${indent}┌─ ${component.label}`);
    console.log(`${indent}│  Data: ${component.data}`);
    console.log(`${indent}│  Link: ${component.link}`);

    if (component.sub.length > 0) {
        console.log(`${indent}└─── Sous-composants:`);
        component.sub.forEach(subComponent => {
            displayComponentInConsole(subComponent, level + 2);
        });
    } else {
        console.log(`${indent}└─── Aucun sous-composant`);
    }
}

export function logComponentTree(component: components, level = 0): void {
    const prefix = '  '.repeat(level);
    const hasChildren = component.sub.length > 0;

    console.log(`${prefix}${hasChildren ? '├─' : '└─'} ${component.label}`);
    console.log(`${prefix}  │ Data: ${component.data}`);
    console.log(`${prefix}  │ Link: ${component.link}`);

    component.sub.forEach((child, index) => {
        const isLast = index === component.sub.length - 1;
        console.log(`${prefix}  ${isLast ? '└──' : '├──'}`);
        logComponentTree(child, level + 2);
    });
}

export function debugComponent(component: components, depth = 0): void {
    console.group(`${'▶'.repeat(depth)} ${component.label}`);
    console.log('Data:', component.data);
    console.log('Link:', component.link);
    console.log('Nombre de sous-composants:', component.sub.length);

    if (component.sub.length > 0) {
        console.groupCollapsed('Sous-composants:');
        component.sub.forEach(sub => debugComponent(sub, depth + 1));
        console.groupEnd();
    }

    console.groupEnd();
}
