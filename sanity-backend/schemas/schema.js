// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import about from './about';
import brands from './brands';
import contact from './contact';
import experiences from './experiences';
import testimonials from './testimonials';
import skills from './skills';
import workExperience from './workExperience';
import works from './works';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    about,
    brands,
    contact,
    experiences,
    testimonials,
    skills,
    workExperience,
    works,
  ]),
});
