import { Given } from 'cucumber';

Given(/^Input Credentials$/, {timeout: 6000 * 1000}, () => {
    try {        
        log.info('Then: Provide application credentials... Start');   
        
        var okElements = mob.findElements("//*[@text='OK']");

        if ( okElements.length > 0) {
            var okElement = mob.findElement("//*[@text='OK']");   
            okElement.click();
        } 

        const userElement = mob.findElement("//*[@text='Username']");
        // Automation command.
        userElement.sendKeys("company");
        const passwordElement = mob.findElement("//*[@text='Password']");
        passwordElement.sendKeys("company");
        log.info('Then: Provide application credentials...  End');  
    } catch (error) {    
        log.info('error1', error);  
    }
});