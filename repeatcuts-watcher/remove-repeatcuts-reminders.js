// Change this to the title of the notification
// set in the RepeatCuts Watcher Scriptable script.
const kTitle = "Tap to Relaunch RepeatCuts";

let notifications = await Notification.allPending();
	
for ( n of notifications ) {
	// Only remove notifications with correct title
	if ( n.title != null && n.title == kTitle ) {
		//console.log(n.title);
		//console.log( n.nextTriggerDate );
		n.remove();		
	}
}
Script.complete();