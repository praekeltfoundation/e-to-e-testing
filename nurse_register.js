
Feature('Hellow World');

Scenario('Test User Registration UI', (I) => {
	//Check layout
	//I.resizeWindow(1000,8500);
	I.amOnPage('/'); //it opens tha page
	I.see('Welcome to our community of learning and support!');
	I.see('Sign Up Now');
	I.see('Log In');
	I.see('This be the footer');
	I.click('Sign up now');
	I.see("Welcome.");
	I.see("Let's get you signed up.");
	I.see("Personal Information");
	I.see("MOBILE NUMBER");
	I.see("PASSWORD");
	I.see("CONFIRM PASSWORD");
	I.see("Tip: A good password has 4 characters and a mix of capitals and numbers.");
	I.see("I accept the terms of use");
	I.see("required field");
	I.see("Already have an account? Log in here");
	I.see('This be the footer');
	I.fillField('#id_username', '0764270488')
	I.fillField('#id_password','1234');
	I.fillField('#id_confirm_password','1234');
	I.scrollTo('#id_terms_and_conditions');
	I.seeElementInDOM('#id_terms_and_conditions');
	I.checkOption('#id_terms_and_conditions'); //agree to terms and conditions
	I.click('Next');
	I.wait(2); //wait for client side to render
	I.see("Let's get you signed up.");
	I.see("Welcome");
	I.see('Security questions');
	I.see("These will help you log in later if you forget your password.");
	I.see("Already have an account? Log in here");
	I.fillField('#id_question_0','nurseconnect');
	I.click('Next');
	I.see("Let's get you signed up.");
	I.see('Clinic Code');
	I.see('CLINIC CODE');
	I.see('required field');
	I.see("Already have an account? Log in here");
	I.fillField('#id_clinic_code','123456');
	I.click('Validate');
	I.see("Your clinic code is valid!");
	I.see("Would you like to change it?");
	I.see('Clinic Code Name: fake_clinic_name');
	I.see('Edit Clinic Code');
	I.see('Complete Registration');
	I.click('Complete Registration');
	I.see("Back To Top");
	I.see("Home");
	I.see("Search");
	I.see('Your Profile');
	I.see('Log Out');
	I.click('Your Profile');
	I.see("Change or Update Your Profile");
	I.see("Personal Info");
	I.see("To edit your name, surname or cellphone number, click on the Edit button. Then, click on ‘Update Profile’. Next time you log in, use your new cellphone number.");
	I.see('FIRST NAME');
	I.see('SURNAME');
	I.see('CELLPHONE NUMBER');
	I.see("CLINIC CODE");
	I.click('Edit');
	I.see("Change or Update Your Profile");
	I.see('FIRST NAME');
	I.fillField('#id_settings_form-first_name', 'I am');
	I.see('SURNAME');
	I.fillField('#id_settings_form-last_name', 'Will')
	I.see('CELLPHONE NUMBER');
	I.see("Clinic Code Name: fake_clinic_name");
	I.click('Save');
});