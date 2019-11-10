# RepeatCuts

RepeatCuts creates while loops and runs selected shortcuts continuously with options to:

- Control how many times to repeat. 
- Delay by seconds, minutes, or hours between each loop iteration. 
- Minimize battery drain by automatically lowering device brightness, media volume, and white point settings.
- Save frequently used apps that you want to run repeatedly in the RepeatCuts Library. 
- Create [While loops](https://en.wikipedia.org/wiki/While_loop) in third-party shortcuts.

The following RepeatCuts Pro features can be unlocked for a small one-time purchase with Apple Pay:

- Prevent accidental termination using Guided Access. 
- Prevent screen burn-in and image retention with Light/Dark mode toggling.
- Notifications when the repeating shortcuts stop prematurely. 
- Custom callback shortcuts after each repeat iteration.

You can trial these Pro features for seven days before deciding to purchase.

****

## Download

- [**Download RepeatCuts from RoutineHub.co &raquo;**](https://routinehub.co/shortcut/3760)

**Version 1.0.0 SHA-256 Checksum**

Verify that you are running a genuine version of RepeatCuts by comparing its SHA-256 checksum: ****

Use [Shortcut Checksum](https://adamtow.github.io/shortcut-checksum) to verify checksums of shortcuts.

****

## Use Cases

### While Loops
While Shortcuts offers Repeat WIth Each and Repeat N Times actions, it does not offer the ability to create [While loops](https://en.wikipedia.org/wiki/While_loop). Developers can roll their own solutions using the Run Shortcut and custom shortcuts. RepeatCuts provides a standardized format with which to create While loops in shortcuts.

### Foreground Continous Triggering
Many of the personal automation triggers in iOS 13, such as time and location, require the user to tap on a button in order to run a shortcut. 

I developed [Autocuts](https://adamtow.github.io/autocuts-admin) to work around this limitation. Autocuts runs your shortcuts in the background as long as you are actively using your device. 

RepeatCuts can be used in those times when you are either (1) not actively using your device or (2) do not have ready access to your device but still want triggers to occur automatically.

- You are riding a motorcycle and want to send messages to the people you are meeting when you get close to your destination.
- You are going for a run and want to have shortcuts run automatically as you reach certain points in your run.
- You set your phone to charge and you want to be notified when the battery level reaches 80%.
- Going to sleep for the night but want your device to keep working while you sleep. 

****

## Pro

For a small one-time purchase, you can unlock several Pro features of RepeatCuts that make running your looped shortcuts even better:

- **Guided Access**: automatically turn on Guided Access Mode when you repeat a shortcut. This is useful when you want your iOS device to run uninterrupted for extended periods of time. 
- **Prevent Burn-In**: Periodically switches between Light and Dark Appearance during loops to prevent screen burn-in and image retention.
- **Custom Callback Shortcuts**: After each loop iteration, you can call a second shortcut which can determine whether to stop or continue repeating.
- **Notify When Running Stops**: Get notifies when RepeatCuts stops running your shortcuts on repeat prematurely. This feature also requires the use of [Scriptable](https://scriptable.app). 

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
- **Guided Access**: (**Pro**) turn on Guided Access Mode when running RepeatCuts. [Learn more here](#guided-access). 
- **Notify Scriptable**: (**Pro**) be notified when RepeatCuts stops running its loop for whatever reason. Requires the free [Scriptable.app](https://scriptable.app). 

## Usage

Opening up the RepeatCuts app will display the following menu of commands:

- **Run**: runs the currently selected RepeatCut. If none are available, this menu command will disappear. 
- **New**: create a new RepeatCut. 
- View Library: see a list of all saved RepeatCuts on this iOS device.
- **Current RepeatCut Details**: a list of options and settings for the current RepeatCut. See the section on [Anatomy of a RepeatCut](#anatomy) for more details. 
	- **Share**: call this RepeatCut from your shortcuts using the [RepeatCut API](#api). 
	- **Delete**: delete the current RepeatCut. 
- **About**: displays the about dialog with version and build number information. 
- **Help**: displays the page that you are reading now. 
- **Settings**
	- **Hide Run Alert**: (**Pro**) hide the alert that appears before running the shortcut on repeat. 
	- **Change Language**: change the [language used by RepeatCuts](#localization).  
	- **Check for Updates**: manually for an update to RepeatCuts. 
	- **Reset Settings**: delete settings or erase all RepeatCuts content. 

### Creating a New RepeatCut

Tap New from the RepeatCuts Home screen to start creating a new RepeatCut. You will be prompted to enter the following things:

- **Shortcut**: choose the shortcut you want to run repeatedly. 
- **Count**: entre how many times to run the shortcut. Enter 0 to run it forever. 
- **Delay Interval**: choose to have no delay between runs or enter a delay value in seconds, minutes, or hours. 

### View the RepeatCut Library

****

## Image Retention and Screen Burn-In Over Long Repeat Times
While RepeatCuts provides options to lower the screen brightness to its lowest value, along with the ability to reduce the display white point, it does not have a way to completely turn off the display. 

As a result, there is the possibility of [image retention and screen burn-in](https://www.cnet.com/news/oled-screen-burn-in-what-you-need-to-know/) when using RepeatCuts for extended periods of time. Be aware of this and understand that RepeatCuts is not responsible for any screen burn-in or image retention effects you may encounter. 

## Localization
RepeatCuts is fully localized in English and has been auto-translated in over 26 different languages on iOS. If you would like to improve on of the translations, [visit RepeatCuts' localization page](https://github.com/adamtow/repeatcuts/tree/master/localization) on Github and submit a pull request. 

## License
Copyright © 2019 Adam Tow • tow.com • @atow

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

