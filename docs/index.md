# RepeatCuts

RepeatCuts creates while loops and supervises selected shortcuts when they are running continuously in the foreground. 

RepeatCuts has options to:

- Control how many times to repeat, from 1 time to forever. 
- Delay each loop iteration by seconds, minutes, or hours. 
- Minimize battery drain by automatically lowering device brightness, media volume, and white point settings.
- Save frequently used apps that you want to run repeatedly in the RepeatCuts Library. 
- Create [While loops](https://en.wikipedia.org/wiki/While_loop) in third-party shortcuts.

The following [RepeatCuts Pro features can be unlocked for a small purchase](#pro) with Apple Pay:

- Chain multiple shortcuts to run in a single RepeatCut.
- Prevent accidental termination using Guided Access. 
- Prevent screen burn-in and image retention by periodically toggling Light and Dark modes.
- Notifications when the repeating shortcuts stop prematurely (requires Scriptable). 
- Custom callback shortcuts after each repeat iteration.

You can trial these Pro features for seven days before deciding to purchase.

****

## Download

- [**Download RepeatCuts from RoutineHub.co &raquo;**](https://routinehub.co/shortcut/3760)

**Version 1.0.0 SHA-256 Checksum**: `da8b496555cf745fbad89bb79d2566697983d20edd647e76c441a20d5e08e295`

Verify with [Shortcut Checksum](https://adamtow.github.io/shortcut-checksum) that you are running a genuine version of RepeatCuts by comparing its SHA-256 checksum:

[See previous version checksums here](#versions).

****

## Use Cases

### While Loops
While Shortcuts offers Repeat with Each and Repeat actions, it does not natively offer a While action. [While loops](https://en.wikipedia.org/wiki/While_loop) are commonly used in programming as a form of a repeating if-statement. While developers can roll their own solutions using the Run Shortcut and custom shortcuts,  RepeatCuts provides a standardized format with powerful controls for creating these loops in shortcuts.

### Foreground Continous Triggering
Many of the personal automation triggers in iOS 13, such as time and location, require the user to tap on a button in order to run a shortcut. 

I developed [Autocuts](https://adamtow.github.io/autocuts-admin) to work around this design choice. Autocuts automatically runs your shortcuts in the background — based on time, location, and web triggers — as long as you are actively using your device. 

RepeatCuts can be used in those times when you are either (1) not actively using your device or (2) do not have ready access to your device but still want triggers to occur automatically. Consider the following scenarios where RepeatCuts can be useful:

- You are riding a motorcycle and want to send a message to the people you are meeting when you get close to your destination.
- You are going for a run and want to log the time you reach certain points along your route.
- You set your phone down to charge and you want to be notified when the battery level reaches 80%.
- You are retiring for the evening, but want your device to keep working while you sleep. 

****

## Pro

For a small one-time purchase, you can unlock several Pro features of RepeatCuts that make running looped shortcuts even better:

- [**Multiple Shortcuts**](#multiple): chain together multiple shortcuts to run in a single RepeatCut. 
- [**Guided Access**](#guided-access): automatically turn on Guided Access Mode when you start repeating a shortcut. This is useful when you want your iOS device to run uninterrupted for extended periods of time. 
- [**Appearance Toggling**](#appearance-toggling): Periodically switch between Light and Dark Appearance during loops to prevent screen burn-in and image retention.
- [**Custom Callback Shortcuts**](#callback): After each loop iteration, you can call a second shortcut which can determine whether to stop or continue repeating.
- [**Notify When Running Stops**](#notify): Get notifies when RepeatCuts stops running your shortcuts on repeat prematurely. This feature requires [Scriptable](https://scriptable.app). 

Going Pro is simple and fast with Apple Pay or PayPal.

****

<span id="anatomy"></span>
## Anatomy of a RepeatCut 

A RepeatCut has the following fields:

- **Name**: the name of your RepeatCut. 
- **Description**: (optional) a short description of your RepeatCut. 
- **Shortcut**: the shortcut or shortcuts that will be run repeatedly by RepeatCuts. 
- **Shortcut Input**: (optional) text input to be originally sent to your shortcut. Subsequent calls to your shortcut will use the output from the previous shortcut call. 
- **Callback Shortcut**: (**Pro**) the shortcut that will be called after each successful iteration. Input to the callback shortcut will be the output from the call to the repeat shortcut. 
- **Count**: how many times the shortcut should repeat. If you specify 0 or less, the shortcut will run indefinitely. 
- **Interval**: how long to wait before calling the shortcut again. Specify 0 or less to have no delay between calls to your shortcut. You can delay by seconds, minutes, or hours. 
- **Brightness**: set the initial brightness of the display when running on repeat. Specify a number less than 0 or greater than 100 to use the current display brightness. 
- **Volume**: set the initial media volume of the device  when running on repeat. Specify a number less than 0 or greater than 100 to use the current media volume. 
- **White Point**: lowers the white point of the display, further reducing brightness. 
- [**Appearance Toggle**](#appearance-toggle): (**Pro**) switch between Light and Dark modes while running to prevent  screen burn-in and image retention.
- [**Guided Access**](#guided-access): (**Pro**) turn on Guided Access Mode when running RepeatCuts.
- [**Notify Scriptable**](#notify): (**Pro**) be notified when RepeatCuts stops running its loop for whatever reason. Requires the free [Scriptable.app](https://scriptable.app). 

## Usage

Opening up the RepeatCuts app will display the following menu of commands:

- **Run**: runs the currently selected RepeatCut. If none are available, this menu command will disappear. 
- **New**: create a new RepeatCut. 
- **View Library**: see a list of all saved RepeatCuts on this iOS device.
- **Current RepeatCut Details**: a list of options and settings for the current RepeatCut. See the section on [Anatomy of a RepeatCut](#anatomy) for more details. 
	- **Share**: call this RepeatCut from your shortcuts using the [RepeatCut API](#api). 
	- **Delete**: delete the current RepeatCut. 
- **About**: displays the about dialog with version and build number information. 
- **Help**: displays the page that you are reading now. 
- **Settings**
	- **Hide Run Alert**: (**Pro**) hide the alert that appears before running the shortcut on repeat. 
	- **Change Language**: change the [language used by RepeatCuts](#localization).  
	- **Check for Updates**: manually check for an update to RepeatCuts. 
	- **Reset Settings**: delete settings or erase all RepeatCuts content. 

### Creating a New RepeatCut

Tap New from the RepeatCuts Home screen to start creating a new RepeatCut. You will be prompted to enter the following things:

- **Shortcut**: choose the shortcut you want to run repeatedly. 
- **Count**: enter how many times to run the shortcut. Enter 0 to run it forever. 
- **Delay Interval**: choose to have no delay between runs or enter a delay value in seconds, minutes, or hours.
- **Name**: enter a descriptive name for your RepeatCut. 

### View the RepeatCut Library

Tap View Library to see a list of all the RepeatCuts that you have made. Tapping on a RepeatCut will load and display it on the RepeatCuts Home screen. 

> Note: If you do not have any RepeatCuts installed, the Library command will be hidden. 

****

## Running a Shortcut Repeatedly

Tap Run to run the selected RepeatCut repeatedly. RepeatCuts will run the shortcut or shortcuts in the RepeatCut according to the [RepeatCut settings](#anatomy).

From the Shortcuts Home screen, you can stop a RepeatCut by tapping the square Stop button. If that button is not visible, you can force quit Shortcuts by revealing the app switcher and swiping the Shortcuts away.

### Shortcut Input
You can optionally add a text input to be sent to the RepeatCut's shortcut. Any output from the shortcut will be treated as input in the next iteration of the run loop. This allows you to change the behavior of your shortcut based on the previous run.

****

## PRO Features
RepeatCuts offers several PRO features under a small one-time purchase. You can use these features without restrictions for seven days by activating the RepeatCuts Trial.

> I've worked really hard to make these complicated and advanced shortcuts such as RepeatCuts and [Autocuts](https://adamtow.github.io/autocuts-admin). Please support your indie Shortcuts developer by purchasing a PRO license for RepeatCuts.\
\
Thanks in advance!\
\
-adam


### Callback Shortcut
You can optionally define a separate shortcut to be called after the shortcut (or shortcuts if Multiple Shortcuts has been enabled) has run in RepeatCuts. Its input will be the output of the last shortcut run. If it receives the `❌❌❌` string, it will return as output the last shortcut's output.

### Multiple Shortcuts
You can chain together multiple shortcuts to run in a single RepeatCut. This is useful if you have a set of independent shortcuts that you always want to run together.

For instance, say you have a series of shortcuts that control your HomeKit devices. You can have them all run at once repeatedly instead of creating one giant shortcut that does it all.

Enable Multiple Shortcut shortcut support by doing the following:

1. Open **RepeatCuts**.
2. Tap **Settings**.
3. Enable **Allow Multiple Shortcuts**.
4. Go to a RepeatCut.
5. Tap **Shortcut to Repeat** or **Shortcuts to Repeat**.
6. Choose the shortcuts you want to chain together.
7. Set the order of the shortcuts.
8. Tap OK.

> NOTE: There's a bug in iOS when selecting multiple items from a list. After choosing your items, tap the Cancel button in the search field before tapping Done. If Shortcuts appears to hang, you can close the shortcut and re-open it. Your changes in RepeatCuts should have been saved.

When you run the RepeatCut, the shortcuts will be run sequentially starting with the first to the last.

> Note that if any of the shortcuts returns the `❌❌❌` control string, RepeatCuts will terminate. So, if you plan to chain together a bunch of shortcuts, make sure none of them return `❌❌❌`.

****

### Guided Access
Turning on Guided Access is an excellent way to run your shortcuts automatically without fear that the device will accidentally turn off or have iOS prematurely terminate the Shortcuts application.

This is great if you are going for a run and want to run your shortcuts automatically while listening to a podcast or music in the background. Guided Access with Touch disabled will ensure that accidental taps will not turn off RepeatCuts.

> TIP: If you have a Face ID or Touch ID capable device, you can configure Guided Access to be unlocked with a double-press of the Side button.

#### Guided Access Limitations
There are some limitations when running RepeatCuts under Guided Access:

- **Notifications are disabled**: If you have an Apple Watch, you will continue to receive notifications, but the iOS device will not display them when Guided Access is active.
- **You cannot switch to another application**: Guided Access prevents switching to another application, so your shortcut must not try to use the Open App or any action that forces an application switch.
- **User input**: If you have Touch disabled in Guided Access, you cannot interact with the screen if the shortcut displays a menu or input prompt.  

****

### Notify When Running Stops
If you have [Scriptable](https://scriptable.app) installed, you can be notified when RepeatCuts stops running for whatever reason.

#### RepeatCuts Watcher Script
The RepeatCuts Watcher is a Scriptable script that adds several reminders in the future to run RepeatCuts. They are constantly being added and removed while RepeatCuts is running its loop, meaning the reminders are always being set sometime in the future.

If RepeatCuts gets stopped for an unknown reason, those reminders in the future will be displayed with a link to re-open RepeatCuts. You can then tap Run to restart RepeatCuts with the currently selected RepeatCut.

#### Installing RepeatCuts Watcher
To install and configure RepeatCuts Watcher, do the following:

1. [Download RepeatCuts Watcher script](https://raw.githubusercontent.com/adamtow/repeatcuts/master/repeatcuts-watcher/repeatcuts-watcher.js)
2. Create a new script in Scriptable.
3. Tap the title and change the name to `RepeatCuts Watcher`.
4. Paste the code from step 1 into the script.
5. Tap Done.
6. In RepeatCuts, enable **Notify When Not Running** in the RepeatCut.

> NOTE: If you do not have Scriptable installed, running the RepeatCut will result in an error.

****

<span id="appearance-toggle"></span>
### Appearance Toggle
It would be great if shortcuts could run automatically in the background without supervision and it would be great for all of this to be done while the device screen is turned off. 

Unfortunately, that's not the case with iOS at the moment, so we have to resort to clever workarounds. 

Appearance Toggle switches between Light and Dark modes on your iOS device while your RepeatCuts are running. This, combined with the free ability to lower the brightness and set the white point, help to minimize the possibility that your device will experience [image retention and screen burn-in](https://www.cnet.com/news/oled-screen-burn-in-what-you-need-to-know/) when using RepeatCuts for extended periods of time.

> Note: RepeatCuts is not responsible for any screen burn-in or image retention effects you may encounter. 

1. Tap Appearance Toggle in your RepeatCut. 
2. Choose to disable Appearance Toggling for this RepeatCut or set an interval. 
3. If you choose to set an interval, enter the number of seconds RepeatCuts will wait before beginning to switch between Light and Dark modes. 

> Note: If you RepeatCut Repeat Interval is greater than your Appearance Toggle interval, your device appearance will change every time your shortcut runs again.

****

## Developer

### Exiting Out of Loops
To exit out of a RepeatCuts loop, your shortcut can return the `❌❌❌` string in your Exit Shortcut action.

If you want to return additional information back to the calling shortcut, you can return a list of items, with the first item being the `❌❌❌` control string:

```
❌❌❌
Return parameter 1
Return parameter 2
Return parameter 3
...
Return parameter N
```

> NOTE: If you do not return the `❌❌❌` and the RepeatCut is set to run forever, you will have to force quit the shortcut or Shortcuts app in order for the shortcut to stop running.

****

### Programmatically Calling RepeatCuts From Other Shortcuts
RepeatCuts provides the ability for your shortcuts to have while loops. 

Supply the call to Run Shortcut with a dictionary containing the shortcut you wish to call to RepeatCuts. 

```
{
	"RepeatCuts": true,
	"shortcut": NAME_OF_SHORTCUT
}
```

If you know the UUID of a RepeatCut, you can specify it in the dictionary to Run Shortcut:

```
{
	"RepeatCuts": true,
	"UUID": "AAAAAAAA-BBBB-CCCC-DDDD-EEEEFFFF11112222"
}
```

You can also use the `shortcuts://run-shortcut` URL scheme to run RepeatCuts from other applications. For instance:

```
shortcuts://run-shortcut?name=RepeatCuts
```

Will open RepeatCuts in the Shortcuts application.

```
shortcuts://run-shortcut?name=RepeatCuts&input=%7B%22RepeatCuts%22:true,%22UUID%22:%2295e918f6-3d32-420a-961a-73b90ded78cd%22%7D
```

Will cause RepeatCuts to automatically run the RepeatCut with the UUID of `95e918f6-3d32-420a-961a-73b90ded78cd`, which is the same as calling the Run Shortcut action with the following dictionary:

```
{
	"RepeatCuts": true,
	"UUID": "95e918f6-3d32-420a-961a-73b90ded78cd"
}
```

****

## Localization
RepeatCuts is fully localized in English and has been auto-translated in over 26 different languages on iOS. If you would like to improve on of the translations, [visit RepeatCuts' localization page](https://github.com/adamtow/repeatcuts/tree/master/localization) on Github and submit a pull request. 

****

## Versions

- **1.0.0** (November 11, 2019)
`da8b496555cf745fbad89bb79d2566697983d20edd647e76c441a20d5e08e295`

****

## License
Copyright © 2019 Adam Tow • tow.com • @atow

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

