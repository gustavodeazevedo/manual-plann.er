// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Plann.er - Manual do Usuário',
			logo: {
				src: './src/assets/logo.svg',
			},
			defaultLocale: 'pt-br',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/gustavodeazevedo/plann.er' },
			],
			customCss: [
				'./src/styles/custom.css',
				'./src/styles/print.css',
			],
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'viewport',
						content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'theme-color',
						content: '#18181b' // Alterado para a cor do tema escuro
					}
				},
				{
					tag: 'script',
					attrs: {
						src: '/scripts/theme.js',
						defer: true
					}
				},
				{
					tag: 'script',
					content: `
						(function() {
							// Aplicar tema escuro imediatamente para evitar flash de tema claro
							if (!localStorage.getItem('starlight-theme')) {
								document.documentElement.setAttribute('data-theme', 'dark');
								localStorage.setItem('starlight-theme', 'dark');
							}
						})();
					`
				},
				{
					tag: 'meta',
					attrs: {
						name: 'apple-mobile-web-app-capable',
						content: 'yes'
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.googleapis.com'
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.gstatic.com',
						crossorigin: ''
					}
				}
			],
			sidebar: [
				{
					label: 'Começando',
					items: [
						{ label: 'Introdução', slug: 'getting-started/introduction' },
						{ label: 'Primeiros Passos', slug: 'getting-started/first-steps' },
						{ label: 'Criando sua Conta', slug: 'getting-started/creating-account' },
					],
				},
				{
					label: 'Gerenciando Viagens',
					items: [
						{ label: 'Criando sua Primeira Viagem', slug: 'trips/creating-trip' },
						{ label: 'Adicionando Destinos', slug: 'trips/adding-destinations' },
					],
				},
				{
					label: 'Checklists e Tarefas',
					items: [
						{ label: 'Criando Checklists', slug: 'checklists/creating' },
						{ label: 'Gerenciando Tarefas', slug: 'checklists/managing-tasks' },
					],
				},
				{
					label: 'Convidados',
					items: [
						{ label: 'Convidando Participantes', slug: 'guests/inviting' },
					],
				},
				{
					label: 'Documentos e Passagens',
					items: [
						{ label: 'Enviando Passagens', slug: 'documents/uploading-tickets' },
						{ label: 'Visualizando Documentos', slug: 'documents/viewing-documents' },
					],
				},
				{
					label: 'Sincronização',
					items: [
						{ label: 'Sincronização em Tempo Real', slug: 'sync/real-time' },
					],
				},
				{
					label: 'FAQ',
					items: [
						{ label: 'Perguntas Comuns', slug: 'faq/common-questions' },
					],
				},
			],
		}),
	],
	site: 'https://plann-er-lake.vercel.app/',
});
