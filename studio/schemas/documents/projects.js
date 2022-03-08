export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    { name: "projectName", title: "Project Name", type: "string" },
    {
      name: "projectDescription",
      title: "Project Description",
      type: "string",
    },
    {
      name: "technologiesUsed",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "projectThumbnail",
      title: "Project Thumbnail",
      type: "image",
    },
    {
      name: "projectThumbnailOther",
      title: "Project Thumbnail Other",
      type: "image",
    },
  ],
};
