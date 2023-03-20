# Carketa Coding Challenge - React

Again, thanks for this challenge as well! It was quite fun to do. I didn't have as much time to complete this challenge, so I didn't have a chance to add much bonus work. This should be a completion of the main points of the challenge.

## Installation and Running

This was done on Node.js version 18.13.0. YMMV if you use a different version.

There are a few extra steps for installation, and later for running, since we have both a server and a client.

### Server

These two commands should install the necessary packages, then start the server on `http://localhost:3000`. These should be run from the root of the project.

```
npm install

npm run start
```

### Client

These two commands should do the same thing. They install the necessary packages, then start the client running on `http://localhost:3001`. These commands should be run from the `client/` folder.

```
npm install

npm run start
```

## Notes

As noted before, I didn't have time to write up tests, and I know that I missed a couple of things that I would want to finish up, were this an actual task/project. Here are a few things I noticed that I would have finished.

Improvements:
* Written up tests.
* Follow-up on foreign character encoding. There appears to be an encoding issue with some characters.

I also would have collaborated with the appropriate parties (other engineers, PMs, UI/UX designers, etc) on the following:
* What should we do with the District information row when selecting Senators? Not display it, or some text explaining it isn't available?
* Preference between a submit button or no submit button. It isn't necessary, but it can help users with error states.
* Zero/empty states? What do we show the users when the form isn't complete yet?
* Best way to determine First Name and Last Name? In at least one case, there is a Representative that has three names.
* What do we do when the Representatives table gets really long? Do we paginate, or do we have the Info section follow the user as they scroll? Something else?