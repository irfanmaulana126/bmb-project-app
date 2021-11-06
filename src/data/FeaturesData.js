import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { BiSupport, BiDollar } from 'react-icons/bi';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Easy to use',
		description: 'Our system is easy to use',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Price',
		description: 'We offer the highest value/cost ratio',
		icon: iconStyle(BiDollar),
		imgClass: 'two',
	},
	{
		name: '24/7 Support',
		description: 'Our team is available at all times in case you need us',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	}
];
