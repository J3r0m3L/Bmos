const { readFileSync, writeFileSync } = require('fs');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
	const count = readFileSync('./count.txt', 'utf-8');
	console.log('count ', count)
	
	const newCount = parseInt(count) + 1
	
	writeFileSync('./count.txt', String(newCount));
	
	res.send(`
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<title>RPi Hosted Webisite</title>
		</head>
		<body>
			<h1>Welcome to my Website!</h1>
			<p>This page has been viewed ${newCount} times!</p>
			<p>This is hosted on Pi B</p>
		</body>
		</html>
	
	`);
});

app.listen(5000, () => console.log('http://localhost:5000/'));
