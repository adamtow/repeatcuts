# RepeatCuts

RepeatCuts creates while loops and supervises selected shortcuts when they are running continuously in the foreground. 

RepeatCuts has options to:

- Control how many times to repeat, from 1 time to forever. 
- Delay each loop iteration by seconds, minutes, or hours. 
- Minimize battery drain by automatically lowering device brightness, media volume, and white point settings.
- Save frequently used apps that you want to run repeatedly in the RepeatCuts Library. 
- Create [While loops](https://en.wikipedia.org/wiki/While_loop) in third-party shortcuts.

The following [RepeatCuts Pro features can be unlocked for a small purchase](#pro) with Apple Pay:

- Prevent accidental termination using Guided Access. 
- Prevent screen burn-in and image retention by periodically toggling Light and Dark modes.
- Notifications when the repeating shortcuts stop prematurely (requires Scriptable). 
- Custom callback shortcuts after each repeat iteration.

You can trial these Pro features for seven days before deciding to purchase.

****

## Download

- [**Download RepeatCuts from RoutineHub.co &raquo;**](https://routinehub.co/shortcut/3760)

**Version 1.0.0 SHA-256 Checksum**

Verify with [Shortcut Checksum](https://adamtow.github.io/shortcut-checksum) that you are running a genuine version of RepeatCuts by comparing its SHA-256 checksum:

`abcd`

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

- [**Guided Access**](#guided-access): automatically turn on Guided Access Mode when you start repeating a shortcut. This is useful when you want your iOS device to run uninterrupted for extended periods of time. 
- [**Appearance Toggling**](#appearance-toggling): Periodically switch between Light and Dark Appearance during loops to prevent screen burn-in and image retention.
- [**Custom Callback Shortcuts**](#callback): After each loop iteration, you can call a second shortcut which can determine whether to stop or continue repeating.
- [**Notify When Running Stops**](#notify): Get notifies when RepeatCuts stops running your shortcuts on repeat prematurely. This feature requires [Scriptable](https://scriptable.app). 

Going Pro is simple and fast with Apple Pay or PayPal.

****

## Anatomy of a RepeatCut 

A RepeatCut has the following fields:

- **Name**: the name of your RepeatCut. 
- **Description**: (optional) a short description of your RepeatCut. 
- **Shortcut**: the shortcut that will be run repeatedly by RepeatCuts. 
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
- **Count**: entre how many times to run the shortcut. Enter 0 to run it forever. 
- **Delay Interval**: choose to have no delay between runs or enter a delay value in seconds, minutes, or hours.
- **Name**: enter a descriptive name for your RepeatCut. 

### View the RepeatCut Library

Tap View Library to see a list of all the RepeatCuts that you have made. Tapping on a RepeatCut will load and display it on the RepeatCuts Home screen. 

> Note: If you do not have any RepeatCuts installed, the Library command will be hidden. 

****

## Running a Shortcut Repeatedly

Consider the 

****

## Programmatically Calling RepeatCuts From Other Shortcuts
RepeatCuts provides the ability for your shortcuts to have while loops. 

Supply the call to Run Shortcut with a dictionary containing the shortcut you wish to call to RepeatCuts. 

## Supported Parameters

The following RepeatCuts parameters are supported when using RepeatCuts for while loops:

- Shortcut Input
- Iterations
- Repeat Delay
- Custom Callback Shortcut
 
### Ignored Parameters

The following features are not available when RepeatCuts is being called programmatically:

- Brightness
- Volume
- Guided Access
- Appearance Toggling
- Notify When Running Stops



****

## Guided Access

****

## Notify When Running Stops

****



****

<span id="appearance-toggle"></span>
## Appearance Toggle to Minimize Image Retention and Screen Burn-In Over Long Repeat Times
It would be great if shortcuts could run automatically in the background without supervision and it would be great for all of this to be done while the device screen is turned off. 

Unfortunately, that's not the case with iOS at the moment, so we have to resort to clever workarounds. 

A Pro feature of RepeatCuts is the ability toggle between Light and Dark modes on your iOS device. This, combined with the free ability to lower the brightness and set the white point, help to minimize the possibility that your device will experience [image retention and screen burn-in](https://www.cnet.com/news/oled-screen-burn-in-what-you-need-to-know/) when using RepeatCuts for extended periods of time.

> Note: RepeatCuts is not responsible for any screen burn-in or image retention effects you may encounter. 

1. Tap Appearance Toggle in your RepeatCut. 
2. Choose to disable Appearance Toggling for this RepeatCut or set an interval. 
3. If you choose to set an interval, enter the number of seconds RepeatCuts will wait before beginning to switch between Light and Dark modes. 

> Note: If you RepeatCut Repeat Interval is greater than your Appearance Toggle interval, your device appearance will change every time your shortcut runs again.

## Localization
RepeatCuts is fully localized in English and has been auto-translated in over 26 different languages on iOS. If you would like to improve on of the translations, [visit RepeatCuts' localization page](https://github.com/adamtow/repeatcuts/tree/master/localization) on Github and submit a pull request. 

## License
Copyright © 2019 Adam Tow • tow.com • @atow

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

