import React from 'react'
// import { useEffect, useState, useRef } from 'react';
import heroImg1x from '../../../assets/images/hero-img1x.png'
import heroImg2x from '../../../assets/images/hero-img2x.png'
import heroPlay1x from '../../../assets/images/hero-play1x.png'
import heroPlay2x from '../../../assets/images/hero-play2x.png'

import { StyledButton } from '../../Button/Button.styled.js'
import {
	ButtonPlay,
	HeroContainer,
	HeroContent,
	HeroImg,
	HeroSection,
	HeroText,
	StyledHeroText,
	StyledHeroTitle,
	StyledLink,
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
						<StyledLink
							to='/catalog'
							style={{
								display: 'inline-block',
								width: '324px',
							}}
						>
							<StyledButton
								lg='true'
								type='button'
								style={{
									fontFamily: 'Quicksand',
									fontWeight: '300px',
									fontSize: '32px',
									lineHeight: '40px',
								}}
							>
								Каталог
							</StyledButton>
						</StyledLink>
					</HeroText>
					<HeroImg>
						<img
							srcSet={`${heroImg1x} 1x, ${heroImg2x} 2x`}
							src={heroImg1x}
							alt='Опис зображення для всіх версій'
							style={{
								// position: 'relative',
								padding: '19px 14px 15px 15px',
							}}
						/>
						<ButtonPlay
							type='button'
							style={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
								cursor: 'pointer',
							}}
						>
							<img
								srcSet={`${heroPlay1x} 1x, ${heroPlay2x} 2x`}
								src={heroPlay1x}
								alt='Кнопка Плей'
							/>
						</ButtonPlay>
					</HeroImg>
				</HeroContent>
			</HeroContainer>
		</HeroSection>
	)
}
