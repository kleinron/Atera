import { expect } from '@playwright/test';
import {
    Locator, Page, PageBase, ElementBuilder, dashboardTicketStatusElements, StatusValidator
} from '../../utils/imports.ts';
const testConfig = require('../../config/testConfig.json')

export class TicketStatusPage extends PageBase {
    //Variables 
    dashboardStatusElements: Locator[];

    //constructor
    constructor(page: Page) {
        super(page);
        this.dashboardStatusElements = ElementBuilder.buildElements(page, dashboardTicketStatusElements);
    };

    //Methods
    async validateStatus() {
        console.log('statusValidator');
        await StatusValidator.findElements(this.dashboardStatusElements, testConfig);
    };
};
// 3 Open
// 0 Pending
// 0 Due today
// 0 Overdue