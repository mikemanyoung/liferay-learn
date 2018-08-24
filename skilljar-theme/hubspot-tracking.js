<!-- HubSpot Tracking Code -->
var _hsq = _hsq || [];

if ((typeof skilljarUser !== 'undefined') && skilljarUser) {
	console.log(skilljarUser);

	_hsq.push(["identify",{
	    email: skilljarUser.email,
	    firstname: skilljarUser.firstName,
	    lastname: skilljarUser.lastName
	}]);
}