const sampleArticles = [
  {
    title: "What is Markdown?",
    description: "Markdown is a lightweight markup language for creating formatted text using a plain-text editor",
    markdown: `**Markdown** is a [lightweight markup language](/wiki/Lightweight_markup_language "Lightweight markup language") for creating [formatted text](/wiki/Formatted_text "Formatted text") using a [plain-text editor](/wiki/Text_editor "Text editor"). [John Gruber](/wiki/John_Gruber "John Gruber") created Markdown in 2004 as a [markup language](/wiki/Markup_language "Markup language") that is easy to read in its source code form. Markdown is widely used for [blogging](/wiki/Blog "Blog") and [instant messaging](/wiki/Instant_messaging "Instant messaging"), and also used elsewhere in [online forums](/wiki/Online_forums "Online forums"), [collaborative software](/wiki/Collaborative_software "Collaborative software"), [documentation](/wiki/Documentation "Documentation") pages, and [readme files](/wiki/README "README").`
  },
  {
    title: "Bootstrap", 
    description: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.", 
    markdown: `### Install via package manager

Install Bootstrap’s source Sass and JavaScript files via npm, RubyGems, Composer, or Meteor. Package managed installs don’t include documentation or our full build scripts. You can also [use any demo from our Examples repo](https://github.com/twbs/examples/) to quickly jumpstart Bootstrap projects.
        
Through Bootstrap, developers can:

- Launch sites much faster.
- Improve the consistency of their work.
- Directly control many elements of their sites.
        
  [Read our installation docs](https://getbootstrap.com/docs/5.3/getting-started/download/) for more info and additional package managers.`
  },
  {
    title: "Mongo DB: The Developer Data Platform", 
    description: "MongoDB is a source-available cross-platform document-oriented database program", markdown: `When I first experimented with MongoDB, I encountered several frustrating obstacles that made the process much harder than it should have been. In writing this article, I hope you can avoid my mistakes.
    The article is split into four parts. We’ll cover how to:
- Create a cloud database with MongoDB Atlas,
- Connect to it using Node.js and Mongoose,
- Create models for our data using Mongoose,
- Expose API endpoints to perform common database operations.`
  }
]

module.exports = sampleArticles