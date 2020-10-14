export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5f867736a05d0d1aab05823b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vsar652m',
                  apiId: 'e4b895dc-e032-4edd-9a99-bdf92cf9689b'
                },
                {
                  buildHookId: '5f867737761aa92a89707593',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-k85pu1yd',
                  apiId: '2b564944-33b4-4d3c-9eb8-ed25c4d4431f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gugell/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-k85pu1yd.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
