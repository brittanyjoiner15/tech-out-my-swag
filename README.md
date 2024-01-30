Wanted to organize all my tech company swag, and wanted to try out [Polaris](https://polaris.shopify.com/) _(Shopify's Design Library)_.!

## View It Live

Want to [tech out my swag](https://tech-out-my-swag.netlify.app/)?

_Hosted on Netlify_

## Want to use this and show off your own collection? 

### Before starting, you'll need: 
- IDE (Integrated Development Environment) like VSCode/Visual Studio Code
- GitHub account
- GitHub desktop app (not required, but easier if you aren't familiar with Git yet)
- Node and npm installed on your machine ([read these instructions to do that](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
- A [netlify](https://netlify.com/) or [vercel](https://vercel.com/) account if you want to publish your site and show to your friends!

### 1. Copy this repo

At the top of this page, click Code, and then click Open with GitHub Desktop.
![image](https://github.com/brittanyjoiner15/tech-out-my-swag/assets/16166290/c6929d51-9715-4845-86fb-c1b2e600ca60)

You'll be prompted through picking a place to store the code locally on your machine, by default in your home directory. 

### 2. Open in VSCode

It might take a few minutes to clone the repo, but once it does, you should see a page like this in GitHub Desktop. Click Open in Visual Studio Code, or whatever IDE you have.
![image](https://github.com/brittanyjoiner15/tech-out-my-swag/assets/16166290/3aef2dbf-4455-48ed-a759-d837887d15e5)

### 3. Open the terminal

You can open the default terminal on your computer, or use one in your IDE. If you're using VS Code, you can just press `ctrl + ~` to open the terminal directly to that folder (also called _directory_). Make sure you're in the `tech-out-my-swag` directory.

![image](https://github.com/brittanyjoiner15/tech-out-my-swag/assets/16166290/3e622016-22d8-4a52-b4ca-673a53198c2a)

### 4. Run `npm install` and then `npm run dev` 

Assuming you've already installed npm and node on your machine, you'll type `npm install` and press enter to install all the necessary dependencies for running this repo on your local machine. 

Once that is complete, type `npm run dev` and press enter. You should see a message saying this is running on your localhost. Click that to open a browser window showing your site. 

### 5. Customize the data

Now for the fun part! Customize the code to show off your collection. Here are the most important places you'll likely want to update: 
- This is a JSON file with a list of each item in your collection. If you change the name of something like "company" to "genre", you'll need to update that in other places where it's mentioned. Use `Cmd/Ctrl + shift + F` to search for references of "company" and change those references to your new word.  https://github.com/brittanyjoiner15/tech-out-my-swag/blob/main/data/mySwag.json
- This folder has the images that go with the collection. If you want show images, you'll need to add them here. https://github.com/brittanyjoiner15/tech-out-my-swag/tree/main/public/images/swag
- This is the main page of the app. You can change the text on the page, or change the types of attributes you show, such as if you wanted to mention genre instead of company: https://github.com/brittanyjoiner15/tech-out-my-swag/blob/main/pages/_app.js


### 6. Save your changes, push to your GitHub repo and connect to Netlify!

Save your changes in VSCode, and click the "Commit" button in the GitHub desktop app, and then choose Push to Origin.

Now create an account with Netlify or Vercel, and follow their instructions to connect to your GitHub repo and publish your site!

Good luck! If you need any help, shoot me an email at brittanyjoiner15@gmail.com.

