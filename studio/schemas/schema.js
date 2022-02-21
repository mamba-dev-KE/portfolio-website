
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import blogPost from './blogPost';
import sponsor from './types/sponsor';
import projects from './projects';

export default createSchema({
  name: 'default', 
  types: schemaTypes.concat([ 
    blogPost,
    sponsor,
    projects
  ]),
})
