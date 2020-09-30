import { Then } from 'cucumber';

Then(/^Check Login$/, () => {
    log.info('Then: Checking if login suceeds... Start');    

    // Check for the logout button
    mob.waitForExist("//*[@text='Logout']");
    var logoutElements = mob.findElements("//*[@text='Logout']");
    assert.notEqual(logoutElements.length, 0);
    log.info('Then: Checking if login suceeds... End');  
    
});