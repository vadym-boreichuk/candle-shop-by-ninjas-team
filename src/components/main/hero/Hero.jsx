import React from 'react'
// import { useEffect, useState, useRef } from 'react';
// import { Link, NavLink } from 'react-router-dom';

import {
	HeroContainer,
	HeroContent,
	HeroImg,
	HeroSection,
	HeroText,
	StyledHeroButton,
	StyledHeroText,
	StyledHeroTitle,
} from './Hero.styled.js'

export const Hero = () => {
	return (
		<HeroSection>
			<HeroContainer>
				<HeroContent>
					<HeroText>
						<StyledHeroTitle>
							Великий асортимент воскових виробів
						</StyledHeroTitle>
						<StyledHeroText>
							Підберемо особливий аромат та створимо атмосферу для вашої оселі
						</StyledHeroText>

						<StyledHeroButton type='button'>
							<a
								href='../gallery/Galery.jsx'
								style={{
									color: 'white',
									textDecoration: 'none',
									display: 'block',
									width: '100%',
									textAlign: 'center',
								}}
							>
								Каталог
							</a>
						</StyledHeroButton>
					</HeroText>
					<HeroImg>
						<img
							src={require('../../../assets/images/hero-img.png')}
							alt='Hero'
							style={{
								position: 'absolute',
								paddingLeft: '15px',
								paddingTop: '19px',
							}}
						/>
						<img
							src={require('../../../assets/images/frame.png')}
							alt='Hero in frame'
							style={{
								position: 'absolute',
							}}
						></img>
					</HeroImg>
				</HeroContent>
			</HeroContainer>
		</HeroSection>
	)
}
