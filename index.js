#!/usr/bin/env node

const {
  mkdir: mkdirWithCallback,
  writeFile: writeFileWithCallback
} = require('fs')

function generateHTML(name) {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${name}</title>
    <style>
      body,
      html {
        display: flex;
        width: 100%;
        min-height: 100%;
        margin: 0;
        padding: 0;
      }

      body {
        background-color: #fff8f8;
        color: #111c40;
        font-size: 20px;
        font-family: -apple-system, Roboto, Helvetica Neue, sans-serif;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    </style>
  </head>

  <body>
    <h1>👩‍🏭 Welcome! ✨</h1>
    <script type="module">
      // ES Modules, ready to go. :)
    </script>
  </body>
</html>`
}

function generatePackageDotJson(name) {
  return `{
  "name": "${name}",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "start": "npx servor"
  }
}`
}

function generateSuccessMessage(name) {
  return `
  Succesfully created a new app at ./${name}! ✨
  Enter it by running \`cd ${name}\`.
  Start it by running \`npm start\`.
  `
}

async function mkdir(path, options = {}) {
  await new Promise((resolve, reject) =>
    mkdirWithCallback(path, options, (error) =>
      error ? reject(error) : resolve()
    )
  )
}
async function writeFile(file, data, options = {}) {
  await new Promise((resolve, reject) =>
    writeFileWithCallback(file, data, options, (error) =>
      error ? reject(error) : resolve()
    )
  )
}

async function createPlainApp(name) {
  const projectDir = `./${name}`

  try {
    await mkdir(projectDir)
    await Promise.all([
      writeFile(`${projectDir}/index.html`, generateHTML(name)),
      writeFile(`${projectDir}/package.json`, generatePackageDotJson(name))
    ])
    console.log(generateSuccessMessage(name))
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

const projectName = process.argv[2]

projectName
  ? createPlainApp(projectName)
  : console.error(`
Welcome to create-plain app!
Please specify a project name to continue
`)
