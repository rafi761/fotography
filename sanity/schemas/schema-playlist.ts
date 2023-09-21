const schema = {
  name: 'picturePlaylist',
  title: 'Picture Playlist',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'pictures',
      title: 'Pictures',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'picture' }] }],
    },
  ],
}

export default schema
