# ClearCalcs Custom Diagram Boilerplate

Scaffolding for creating custom diagram widgets in ClearCalcs

## Requirements

-   Node > v19 - For installation instructions for various operating systems. [https://nodejs.org/en/download/package-manager](https://nodejs.org/en/download/package-manager)

## Installation

1. Clone this repository
2. In your terminal navigate into the folder `cd path/to/repository/folder`
3. Install packages

```
    npm install
```

## Usage

### Development

For developing your widget, you can start a web server that will automatically update as you make code changes, by running:

```
    npm start
```

It will start a server at [http://localhost:1234](http://localhost:1234), you can open that in your browser to see your widget running

#### Where to put your code

All your code should exist entirely inside the `/src` directory.

### Compile

When you're ready to compile your code for use inside ClearCalcs, you can run:

```
    npm run-script compile
```

When completed, this will produce an `index.html` file in the `/output` folder. This is the finished file you can upload into the ClearCalcs Diagram widget.
