export const data = [
	{
		title: 'Irfan Maulana',
		level: 'Mahasiswa',
		description:
			'Our clients happily stay with our services for more several years now. See real reviews from our clients.',
		image: './assets/clients.jpg',
	},
	{
		title: 'Akbar Rizkianto',
		level: 'Mahasiswa',
		description: 'Learn more about our security systems to make sure your data is always safe',
		image: './assets/security.jpg',
	},
	{
		title: 'Aryo Nurwanto',
		level: 'Mahasiswa',
		description: 'Learn more about our security systems to make sure your data is always safe',
		image: './assets/security.jpg',
	},
	{
		title: 'Naufal',
		level: 'Mahasiswa',
		description: 'Learn more about our security systems to make sure your data is always safe',
		image: './assets/security.jpg',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
