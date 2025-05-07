const summbotParagraph = `SummBot is a Discord bot that utilizes Google Gemini to summarize conversations in real-time. It is designed to help users keep track of important discussions and highlights within their Discord servers. The bot can be easily added to any server and provides a user-friendly interface for accessing summaries.`;
const ClearCalParagraph = `ClearCal is a mental health application that leverages generative AI to provide personalized support and resources. It offers users a platform to track their mental well-being, access helpful content, and engage with AI-driven tools for self-improvement. The app is designed to be user-friendly and accessible, making mental health support available to everyone.`;
const AlgaeandCO2Paragraph = `This project is a web application that visualizes the relationship between algae blooms and CO₂ levels in the ocean. It uses data from NASA's Earth Observing System Data and Information System (EOSDIS) to create an interactive heat map. Users can explore the data by selecting different time periods and locations, allowing them to see how algae blooms and CO₂ levels change over time.`;

export const projects = [
{
slug: 'SummBot',
name: 'SummBot',
description: 'Discord bot for summarizing conversations',
src: 'summbotss.jpg',
techstack: ['Python', 'discord.py', 'Google Gemini', 'AWS'],
selected: true,
repoUrl: 'https://github.com/hwiseongahn/summdiscordbot',
url: 'https://discord.com/oauth2/authorize?client_id=1293394343297679390',
paragraph: summbotParagraph,
},
{
slug: 'AlgaeandCO2',
name: 'Algae and CO₂ Heat Map',
description: 'NASA Space Apps Challenge 2024',
src: 'co2ss.png',
techstack: ['Python', 'Flask', 'Folium', 'JavaScript'],
selected: true,
repoUrl: 'https://github.com/hwiseongahn/NASAcommunitymapping',
url: 'https://algaeandco2.vercel.app/',
paragraph: AlgaeandCO2Paragraph,
},
{
slug: 'ClearCal',
name: 'ClearCal',
description: 'Mental Health and Generative AI Hackathon',
src: 'ClearCal.png',
techstack: ['React', 'Node.js', 'Bootstrap', 'Google Gemini'],
selected: true,
repoUrl: 'https://github.com/hwiseongahn/genaihackathon',
url : 'https://clearcalai.vercel.app/',
paragraph: ClearCalParagraph,
},
{
slug: 'More',
name: 'Stay Tuned!',
description: 'more to come soon...',
src: 'questionbox.jpg',
techstack: ['???'],
selected: true,
repoUrl: '...',
url: '...'
}
];