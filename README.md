# cheetah-client


### Examples
```javascript
const cheetah = new CheetahClient()


await cheetah.authenticate({
  username: 'username',
  password: 'password',
  client_id: 5551234,
})

// Fetch a content block by its Object Ref ID
const contentBlock = await cheetah.getContentBlock(10454)

console.log(contentBlock.obj.display_name)
```
