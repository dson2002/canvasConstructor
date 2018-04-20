const docma = require('docma');
const Package = require('./package');

docma.create()
	.build({
		app: {
			title: 'canvas-constructor',
			base: '',
			entrance: 'content:readme',
			routing: 'query',
			server: docma.ServerType.GITHUB
		},
		markdown: {
			gfm: true,
			tables: true,
			breaks: true,
			pedantic: true,
			sanitize: true,
			smartLists: true,
			smartypants: true,
			tasks: true,
			emoji: true
		},
		src: [
			{ readme: './README.md' },
			{ canvasconstructor: './src/lib/*.js' }
		],
		dest: './docs',
		debug: true,
		jsdoc: { package: './package.json' },
		template: {
			options: {
				title: Package.name,
				navItems: [
					{
						label: 'Readme',
						href: '?content=readme'
					},
					{
						label: 'Documentation',
						href: '?api=canvasconstructor',
						iconClass: 'ico-book'
					},
					{
						label: 'GitHub',
						href: Package.homepage,
						target: '_blank',
						iconClass: 'ico-md ico-github'
					}
				]
			}
		}
	})
	.catch(console.error);
