<img
	src="./scenario_maker_logo.png" alt="AI Dungeon Scenario Maker Logo"
	width="100%" height=150 border="2px white"
/>

> **v1 . 0 . 0**

# Scenario Maker
Script that generates a folder in the way I make AI Dungeon scenarios.

## Table of Contents
* [How to use](#how-to-use)
* [How to generate scenario stuff for options](
	#how-to-generate-scenario-stuff-for-options
  )
* [Folder format](#folder-format)
* [Haunto, this seems like a bit overkill for writing a scenario](
	#haunto-this-seems-like-a-bit-overkill-for-writing-a-scenario
  )

## How to use

On the right of the page is a "Releases" section.
At this time, there should be **`Initial Release [Windows]`**, which has
the `exe` file for running it on Windows.

*(I don't have a Mac to easily make a Mac version; Linux users probably know
how to just run the `js` file)*

Once you go to the release page, simply click on **`Scenario_Maker.exe`**
to download the executable.

Plop the `exe` file wherever you wanna make scenarios, and double-click it to
run it.

A window should pop up:

![
	A command line window showing "What is the name of the scenario?"
](./popup_demo.png)

Enter the name for your scenario, and press `[Enter]`.  
Assuming you're running modern Windows and nothing weird is going on with
your computer, you should see something like:

![
	A command line window showing the successful output from the
	scenario maker script.
](./success_demo.png)

Press `[Enter]` to exit like the scary box says, and you will exorcise it from
your screen.

## How to generate scenario stuff for options

Just plop the file into your scenario folder, and have it make another folder
for your option. It will make another folder inside of your scenario folder.

So, for example, if you have a scenario with the following options:
```
Snuggo Goes To The Moon
> Moonventure
> Actually Go To The Sun haha
```

If you:
1) Run the script to make "Snuggo Goes To The Moon"
2) Copy the script
2) Go into the `[Snuggo Goes To The Moon]` folder
3) Put the script in this folder
5) Run the script to make the "Moonventure" and
   "Actually Go To The Sun haha" scenarios
6) Delete/move back the script when done

You should end up with the following layout:
```
[Snuggo Goes To The Moon]
	[_CARD_]
	[_RESOURCE_]
	[_SCRIPT_]
		context.js.txt
		input.js.txt
		output.js.txt
	[_TEXT_]
		a_n.txt
		memory.txt
		story.txt
	[Moonventure]
		[_CARD_]
		[_RESOURCE_]
		[_SCRIPT_]
			context.js.txt
			input.js.txt
			output.js.txt
		[_TEXT_]
			a_n.txt
			memory.txt
			story.txt
	[Actually Go To The Sun haha]
		[_CARD_]
		[_RESOURCE_]
		[_SCRIPT_]
			context.js.txt
			input.js.txt
			output.js.txt
		[_TEXT_]
			a_n.txt
			memory.txt
			story.txt
```

## Folder format

The picture above covered how the scenario folder layout works, but it works
like this:

>**\_CARD\_**  

* Store text for any story cards in here.  
  I'll generally make one text file per card.

>**\_TEXT\_**

* Store the main text for the scenario in here.
	* The script will automatically put three files in here:
		* `story.txt` - The main story text
		* `memory.txt` - The memory for the scenario
		* `a_n.txt` - The author's notes

>**\_SCRIPT\_**

* Store scripts for the scenario in here.  
  Lets you work on them in notepad, or an actual code editor.
	* The script will automatically put three files in here:
		* `input.js.txt` - The input script
		* `context.js.txt` - The context script
		* `output.js.txt` - The output script  
	  
	  *(The files are `.js.txt` so you can just open them in notepad; if you're
	   using a code editor, have it recognize `.js.txt` as javascript)*

>**\_RESOURCE\_**

* Store any other kind of files in here.  
  I generally put images, exported story card files, and notes in here.

&nbsp;

## Haunto, this seems like a bit overkill for writing a scenario

Listen man, when you have a scenario with multiple options and scripts, you have
to deal with:

* a bunch of text files for each story, memory, a/n, etc.
* scripts for each option
* files for the scenario picture you edited
* probably a file or two for random notes (maybe *PER OPTION*)
* probably some files you're keeping as a backup with `OLD` shoved onto the
  name.
* whatever else you're doing

&nbsp;

Coming up with this consistent, organized structure for making my scenarios
has actually had me go "thank god I have this organized".

The script is just a nifty bonus for anyone (and myself) that wants to use
this structure with a little less work.