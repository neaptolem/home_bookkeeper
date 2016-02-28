##Build OSX:##
You have to get a Developer ID certificate from Apple and install it into your Mac’s Keychain ([How to](http://www.pracucci.com/atom-electron-signing-mac-app.html))

Add to environment:

	export MAC_APP_CERT_IDENTITY=${your certificate identity}

Run this commands in your terminal, all builds are located at ${projectFolder}/builds/mac/:

* Build and sign VydeoGram.app

	> npm run buildx

* Build and sign VydeoGram.app and package it to VydeoGram.dmg

	> npm run buildx-release


##Build Windows:##
If you are building application not from Windows OS you will have to install Wine first. Run command below to get build at ${projectFolder}/builds/win/:

* Build VydeoGram.exe

	> npm run buildwin

* To build installer you need Windows OS. You have to install [NSIS](http://nsis.sourceforge.net/Download) and [Script Generator](http://nsis.sourceforge.net/NSIS_Quick_Setup_Script_Generator)

	 C:\Program Files\Microsoft SDKs\Windows\v7.1\Bin - path to SignTool

   SignTool sign /f C:\Users\root\Desktop\wincert.pfx /p password C:\Users\root\Desktop\VydeoGram-win32-ia32\VydeoGram.exe

   then compile nsis

   SignTool sign /f C:\Users\root\Desktop\wincert.pfx /p password C:\Users\root\Desktop\Output\VydeoGram.exe

   SignTool sign /f C:\Users\root\Desktop\wincert.pfx /p password "C:\Users\root\Desktop\Video Gif Mixer-win32-ia32\Video Gif Mixer.exe"

   SignTool sign /f C:\Users\root\Desktop\wincert.pfx /p password "C:\Users\root\Desktop\Output\\Video Gif Mixer.exe"

	1. Sign build exe with certificate
	1. Run 'NSIS Quick Setup Script', Load previous project 'tasks/installer-win/resources/VydeoGram.ini'.
	2. Check info and choose project folder.
	3. Generate script. If you want to change icon add after !include "MUI.nsh"
		>  !define MUI_ICON "path_to_icon"
	4. Add function to check if previous version installed [How to](http://nsis.sourceforge.net/Auto-uninstall_old_before_installing_new) (You need to change app name and registry location in that example 'HKLM' => 'HKCU')
	6. Run script

* To sign installer you need .cer file here [guide](https://msdn.microsoft.com/en-us/library/windows/hardware/ff553467%28v=vs.85%29.aspx) how to sign. If you want to create test cer look at [this page](https://msdn.microsoft.com/en-us/library/windows/hardware/ff548693%28v=vs.85%29.aspx).

##Adding release:##
To upload release you need:

1. Set "release_version" at package.json to new one.
2. Get VydeoGram.exe and VydeoGram.app files built and signed. (Note: windows must be installer not build )
3. Compress VydeoGram.app to .zip file and name like VydeoGram-osx_64_v0.0.1.zip (put your version)
4. Installer for windows is already compressed so just rename VydeoGram.exe to VydeoGram-win_32_v0.0.1.zip (put your version)
5. Draft a new release at [GitHub](https://github.com/teamvoydev/vydeogram-releases/releases), put notes and upload new versions for both platforms.
6. You can check available versions [here](http://vydeogram.viter.in:6969/api/versions), server caches
