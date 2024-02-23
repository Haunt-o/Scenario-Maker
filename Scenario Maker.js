#! /usr/bin/env node
const fs = require('fs')
const path = require('path')

const readline = require('node:readline').createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: true,
	tabSize: 4
})

readline.setPrompt(`
What is the name of the scenario?
`.trim() + '\n> ')

const success = `
Folders made:
_CARD_:     Store text for story cards in here.
_TEXT_:     Store main text in here [story, memory, a/n].
_SCRIPT_:   Store the scenario scripts in here. [input, context, output]
_RESOURCE_: Store images, exported story cards, and other stuff in here.

NOTE:
Put whatever picture you have for the scenario in the scenario folder, and
Windows will show it as the folder icon :)

Check out
	https://www.wikihow.com/Enable-Image-Preview-to-Display-Pictures-in-a-Folder-(Windows-10)
if it's not doing that for you.
`.trim()

const _FOLDERS_ = ['_CARD_', '_RESOURCE_', '_TEXT_', '_SCRIPT_']
const _SCRIPTS_ = ['input.js.txt', 'context.js.txt', 'output.js.txt']
const _TXTS_ 	= ['story.txt', 'memory.txt', 'a_n.txt']
const DEFAULT_SCRIPT = `
// Every script needs a modifier function.
const modifier = (text) => {
  return { text }
}

// Don't modify this part.
modifier(text)
`.trim()

/** Removes illegal characters; based on code from "sanitize-filename" module */
function sanitizeFilename(input, replacement='') {
	return input
		.replace(/[\/\?<>\\:\*\|"]/g, replacement)
		.replace(/[\x00-\x1f\x80-\x9f]/g, replacement)
		.replace(/^\.+$/, replacement)
		.replace(/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i, replacement)
		.replace(/[\. ]+$/, replacement)
		.slice(0, 255)
}
/* Creates a file path from the given names, based around CWD. */
const fpath = (...names) => {
	return path.resolve(process.cwd(), names.join(path.sep))
}
// Utility functions for creating files and folders.
const createFile = (name, data='') => fs.writeFileSync(fpath(name), data)
const createFolder = (name) => fs.mkdirSync(fpath(name))
const createFiles = (names, data='') => names.forEach(name => createFile(name, data))
const createFolders = (names) => names.forEach(name => createFolder(name))

var gettingInput = true

function generateScenario(name) {
	let scenName = sanitizeFilename(name.trim())

	createFolder(scenName)
	createFolders(_FOLDERS_.map(folder => fpath(scenName, folder)))
	createFiles(_SCRIPTS_.map(script => fpath(scenName, '_SCRIPT_', script)), DEFAULT_SCRIPT)
	createFiles(_TXTS_.map(txt => fpath(scenName, '_TEXT_', txt)))

	console.log(`Scenario [${scenName}] created.`)
}

// Create the scenario folder and its subfolders and files.
readline.on('line', (line) => {
	if (gettingInput) {
		let names = line.split('|')

		names.forEach(name => generateScenario(name))

		console.log('\n' + success)

		gettingInput = false
		console.log('\n\nPress Enter to exit.')
	}
	else {
		readline.close()
	}
})

// Print prompt for input.
readline.prompt({ preserveCursor: true })
