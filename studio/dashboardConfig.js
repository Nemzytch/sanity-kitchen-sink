export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8046034d1f67807e012a59',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-you373d4',
                  apiId: '5c0537b4-5d3c-4ca1-a47c-fead6e2fea7b'
                },
                {
                  buildHookId: '5f804603ba54b99764674f1a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2obx825s',
                  apiId: 'c79deb97-f954-45c1-999e-606ec0158c15'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Nemzytch/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2obx825s.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
