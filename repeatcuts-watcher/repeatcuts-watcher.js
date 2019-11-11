/**
 * RepeatCuts Watcher
 * ---------------
 * This script notifies you when RepeatCuts has stopped running.
 * It assists with keeping RepeatCuts running continously throughout the day.
 *
 * Initial installation is a multi-step process involving Scriptable and Shortcuts.
 *
 * -- In Scriptable -- 
 * 1) If desired, modify the kNotificationInterval constant according to how often you want to be notified.
 *
 * -- In RepeatCuts --
 * 1) Open RepeatCuts.
 * 2) Select a RepeatCut.
 * 3) Tap Notify When Not Running.
 * 4) Run RepeatCuts.
 *
 * When this script runs, it will:
 * 
 * 1) Removes all pending RepeatCuts Watcher notifications.
 * 2) Creates new RepeatCuts Watcher notifications in the future, defined by the values
 * in kNotificationInterval array (values represent minutes from the next RepeatCut run date).
 * 
 * If RepeatCuts were to stop, the notifications in the future will be displayed.
 * Tapping the notification banner will cause the shortcut "RepeatCuts" to
 * be launched from the Shortcuts app.
 *
 */

var repeatCut = args.shortcutParameter;

// If called with no parameters, we remove all future reminders
if ( null == repeatCut ) {
	// Change this to the title of the notification you set
	// in the RepeatCuts Watcher script.
	const kTitle = "Tap to Relaunch RepeatCuts";
	
	let notifications = await Notification.allPending();
	
	for ( n of notifications ) {
		// Only remove notifications with the correct title
		if ( n.title != null ) { // && n.title == kTitle ) {
			//console.log( n.title );
			//console.log( n.nextTriggerDate );
	   	n.remove();		
		}
	}
	Script.complete();
} else {
	
	repeatCut = JSON.parse( atob( repeatCut ) );
	
	// Specify the number notifications and frequency of notifications (in minutes).
	const kNotificationInterval = [
		5,
		7,
		10,
		15,
		30,
		60
	];
	
	const kAutoRun = 0;
	
	const kShortcutName = "RepeatCuts";
	const kRepeatCutsName = "RepeatCuts";
	
	// Specify the title of the notification 
	const kTitle = `Tap to Relaunch ${kRepeatCutsName}`;
	const kBody = `${kRepeatCutsName} has not run since {{Date}}.`;
	const kSound = "failure"; // default, accept, alert, complete, event, failure, piano_error, piano_success, popup
	
	/**
	 * @RepeatCutsRestart
	 */
	
	/**
	 * Delivers notifications when RepeatCuts is down.
	 * @constructor
	 *
	 */
	function RepeatCutsWatcher() {}
	
	/**
	 * Schedules notifications to relaunch RepeatCuts according to the 
	 * values (in minutes) defined in the kNotificationInterval array.
	 * 
	 */
	RepeatCutsWatcher.prototype.scheduleNotifications = async function() {
		let currDate = new Date();
	
		// First remove all pending notifications
		this.removePendingNotifications();
		
		// Escape the Shortcut Name
		let shortcutName = escape(kShortcutName);
	
		// Calculate the next run date for the RepeatCut
		if ( repeatCut.interval <= 0 ) {
			
			var startDate = new Date( currDate.getTime() );
				
		} else {
			
			switch ( repeatCut.unit ) {
				case 'm':
					var startDate = new Date( currDate.getTime() + ( repeatCut.interval * 60 * 1000 ) );
					break;
				
				case 'h':
					var startDate = new Date( currDate.getTime() + ( repeatCut.interval * 60 * 60 * 1000 ) );
					break;
					
				case 's':
				default:	
					var startDate = new Date( currDate.getTime() + ( repeatCut.interval * 1000 ) );
					break;
			}
			
		}
			
		// Generate the notification date X minutes in the future.
		for ( var i = 0; i < kNotificationInterval.length; i++ ) {
			let notifyDate = new Date( startDate.getTime() + kNotificationInterval[i] * 60 * 1000 );

			// Create the notification
			let n = new Notification();
			let input = { "RepeatCuts": true, "UUID": repeatCut["UUID"] };
			
			n.title = kTitle;
			n.body = kBody.replace("{{Date}}", currDate);
			
			if ( kAutoRun == true ) {
				n.openURL = "shortcuts://run-shortcut?name=" + shortcutName + "&input=" + encodeURI ( JSON.stringify( input ) );
			} else {
				n.openURL = "shortcuts://run-shortcut?name=" + shortcutName;
			}
			n.sound = kSound;
			n.setTriggerDate( notifyDate );
			n.schedule();
		}
		
		return true;
	}
	
	/**
	 * Removes all pending RepeatCuts Watcher notifications.
	 *
	 * @returns - true
	 */
	RepeatCutsWatcher.prototype.removePendingNotifications = async function() {
		let notifications = await Notification.allPending();
		
		for ( n of notifications ) {
			// Only remove the RepeatCuts Watcher notifications
			if ( n.title != null && n.title == kTitle ) {
				n.remove();
			}
		}
		return true;
	}
	
	let watcher = new RepeatCutsWatcher();
	

	watcher.scheduleNotifications();
	
	Script.complete();
}