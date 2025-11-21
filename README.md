# AWS Trial Node.js App

A simple Node.js server that serves a basic HTML page and displays a pop-up message. This project is designed for learning GitHub deployment and AWS hosting.

---

## Features

- Node.js server using `Express.js`
- Serves an HTML page
- Displays a message pop-up in the browser
- Ready for deployment to AWS Elastic Beanstalk or EC2
- Source code hosted on GitHub

---

## Run Locally - Install Dependencies 
- npm install
- node server.js
- npm run start

Visit:
👉 http://localhost:3000

## Deploy on AWS EC2

SSH into EC2

ssh -i key.pem user@public-IP


- Install Node

sudo apt update
sudo apt install -y nodejs npm


- Clone repo & run app

git clone <repo-url>
cd aws-trial-app
npm install
node server.js


- Visit:
👉 http://<EC2-PUBLIC-IP>:3000
