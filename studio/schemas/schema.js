import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import hero from "./documents/hero";
import projects from "./documents/projects";
import socials from "./documents/socials";
import skills from "./documents/skills";
import about from "./documents/about";
import contact from "./documents/contact";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([socials, hero, projects, skills, about, contact]),
});
