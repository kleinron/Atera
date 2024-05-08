import { Page, Locator } from '@playwright/test';

export class ElementBuilder {
    static buildElements(page: Page,
        elements: { functionType: string; role?, text?: string; id?: string; exact?: boolean; locator?: string }[]): Locator[] {
        const myElements: Locator[] = [];

        for (const element of elements) {
            const { functionType, ...params } = element;
            let currentElement;

            switch (element.functionType) {
                case 'getByText':
                    currentElement = params.text && page.getByText(params.text, params.exact ? { exact: true } : {});
                    break;
                case 'getByRole':
                    currentElement = page.getByRole(params.role, { name: params.text });
                    break;
                case 'getByPlaceholder':
                    currentElement = page.getByPlaceholder(params.text || '');
                    break;
                case 'getByLabel':
                    currentElement = page.getByLabel(params.text || '', {
                        exact: params.exact ?? false,
                    });
                    break;
                case 'getById':
                    currentElement = page.locator(params.id || '');
                    break;
                case 'getByLocator':
                    currentElement = page.locator(params.locator || '');
                    break;
            }
            if (currentElement) {
                myElements.push(currentElement);
            };
        }
        return myElements;
    };
};

// import { Page, Locator } from '@playwright/test';

// export class ElementBuilder {
//     static buildElements(page: Page, elements: { role?: string; name?: string; text?: string; id?: string; exact?: boolean }[]): Locator[] {
//         const myElements: Locator[] = [];

//         for (const element of elements) {
//             let currentElement: Locator | null = null;

//             if (element.role && element.name) {
//                 currentElement = page.getByRole(element.role, { name: element.name });
//             } else if (element.text) {
//                 currentElement = page.getByText(element.text, element.exact ? { exact: true } : {});
//             } else if (element.id) {
//                 currentElement = page.locator(`#${element.id}`);
//             }

//             if (currentElement) {
//                 myElements.push(currentElement);
//             }
//         }
//         return myElements;
//     }
// }