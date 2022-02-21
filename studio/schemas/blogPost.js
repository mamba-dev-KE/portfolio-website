export default {
  name: 'blogPost',
  title: 'Blog post',
  type: 'document',
  fields: [
    // ... other fields ...
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'sponsor',
      title: 'Sponsor',
      type: 'sponsor',
    }
  ]
}