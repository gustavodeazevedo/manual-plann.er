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
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/gustavodeazevedo/plann.er' },
			],
			customCss: [
				'./src/styles/custom.css',
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
						{ label: 'Perguntas Frequentes', slug: 'faq/common-questions' },
					],
				},
			],
		}),
	],
	site: 'https://plann-er-lake.vercel.app/',
});
