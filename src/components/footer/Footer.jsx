import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'

import {
	FooterBlock1,
	FooterBlock2,
	FooterBlock3,
	FooterBlockContact,
	FooterNavigationBlock,
	FooterSection,
	FooterSocNetwork,
	FooterSupport,
	Navigation,
	StyledLink,
} from './Footer.styled.js'

export const Footer = () => {
	return (
		<FooterSection>
			<FooterNavigationBlock>
				<Logo
					style={{
						fill: '#FFFFFF',
						marginRight: '127px',
					}}
				></Logo>
				<Navigation>
					<FooterBlock1>
						<StyledLink style={{ fontWeight: '500' }} to='/catalog'>
							Каталог
						</StyledLink>
						<StyledLink style={{ fontWeight: '500' }} to='/catalog'>
							Акції
						</StyledLink>
					</FooterBlock1>

					<FooterBlock2>
						<StyledLink style={{ fontWeight: '500' }} to='/about'>
							Про бренд
						</StyledLink>
						<StyledLink style={{ fontWeight: '500' }} to='/packing'>
							Блог
						</StyledLink>
					</FooterBlock2>

					<FooterBlock3>
						<StyledLink style={{ fontWeight: '500' }} to='/packing'>
							Упакування
						</StyledLink>
						<StyledLink style={{ fontWeight: '500' }} to='/packing'>
							Доставка/Оплата
						</StyledLink>
					</FooterBlock3>
					<FooterBlockContact>
						<a
							lang='en'
							href='mailto:candles@com.ua'
							style={{
								paddingBottom: '12px',
								fonFamily: 'Montserrat',
								fonSize: '16px',
								fontWeight: '500',
								linHeight: '20px',
								letterSpacing: '0em',
								color: 'white',
								textDecoration: 'none',
							}}
						>
							candles@com.ua
						</a>
						<a
							href='tel:+380931176423'
							rel='noopener noreferrer'
							style={{
								paddingBottom: '12px',
								fonFamily: 'Montserrat',
								fonSize: '16px',
								fontWeight: '500',
								linHeight: '20px',
								letterSpacing: '0em',

								color: 'white',
								textDecoration: 'none',
							}}
						>
							+380931176423
						</a>
						<FooterSocNetwork>
							<Link
								to=''
								style={{
									marginRight: '12px',
								}}
							>
								<Instagram />
							</Link>
							<Link to=''>
								<Facebook />
							</Link>
						</FooterSocNetwork>
					</FooterBlockContact>
				</Navigation>
			</FooterNavigationBlock>

			<FooterSupport>Candles website 2023</FooterSupport>
		</FooterSection>
	)
}
