import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
	},
];

export const footerData = [
	{
		title: 'Navigasi',
		links: ['Tentang Kami','Pricing'],
	},
	{
		title: 'Informasi',
		links: ['MOC', 'SIP-MBKM'],
	},
	{
		title: 'Hubungi Kami',
		links: ['helpdesk@mandiribelajara.co.id', '+62 813 4220 0502 (DR. Sari)'],
	},
];
