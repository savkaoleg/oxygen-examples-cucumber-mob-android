import { When } from 'cucumber';

When(/^Click the login button$/, () => {  
    log.info('When: Click the login button ... Start');      
    const loginElement = mob.findElement("//*[@text='Login']");
    loginElement.click();    
    log.info('When: Click the login button... End');    
    log.info('');  
}); 