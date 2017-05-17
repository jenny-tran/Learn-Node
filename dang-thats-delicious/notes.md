#Learn node with Wes Bos

##Getting started
1. Download latest version of Node.
2. Setup DB in mLab.
3. Setup environment variables
4. Install MongoDB Compass Beta - load db (it should recognise something when a string with `mongodb://` is copied).
5. Do an `npm install`.
6. Start running application through `npm start`. App runs on `localhost:7777`

##Routing
Using express example:
- `req` has all the information
- `res` has the methods of sending data
```
router.get('/reverse/:name', (req, res) => {


    // When visiting this url: http://localhost:7777/reverse/jenny
    // name = req.params.name
    const reverse = [...req.params.name].reverse().join('');

    res.send(reverse);
})
```
##Templating
Pug is a templating language - used to be called Jade. Very popular with the Node community.
- Default will always be a `<div>` tag.  
- Alternatives: Mustache, EJS.  
```
// for localhost:7777/?dog=hugo
.wrapper.oh-hey
    p.hello Hellomy dog's name is #{dog}!
    span#yo Yo!
    img.dog(src="dog.jpg" alt=`Dog ${dog}`)

    h2
        | Hello
        em there
```

When writing text:
- Use `#{example}`
- When writing in attributes, use `${example}`

`res.render` requirements:
- Name of a template
- Variable object
