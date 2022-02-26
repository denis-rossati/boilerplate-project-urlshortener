# [URL Shortener Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice)

---

# What the app do?

This is a app that receives a URL, validates it and stores in a database with a ID. This ID can be used to redirect you to the
original link.

### How can I run it?

I did not deploy the app (I'll probably not, anyways). But you can clone the repository and run `npm run dev` or `npm start` and use a helper to make your requests to localhost such as postman or curl.

---

## You did not implemented the tests 🧐

Yes, I know. By the time I'm writing this, it's 3AM in a saturday I'm feeling too much lazy so I didn't bother to create a dev database or a database in memory. With that said, I'm pretty sure there is a bug outthere that I didn't see.

---

## Challenges during the development

In my work I already have a task where I studied how to validate a URL, but during the development I completely forgot how to make it again XD. Turns out that a sintatically constructed URL can be very messy, you can assure it by the regex that I used (and that was a very simple one).

I had problems setting up the mongodb because I'm using the free version and everything is so slow xd.

In the end, this was a very simple application and I hadn't much trouble creating.

Now I'm just asking my self if every URL shortener works like mine, because if it does, I'm very disappointed.
