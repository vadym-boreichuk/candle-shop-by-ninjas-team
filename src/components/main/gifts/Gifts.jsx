import React from 'react'

import gifts1img1x from '../../../assets/images/gifts1-img1x.png'
import gifts1img2x from '../../../assets/images/gifts1-img2x.png'
import gifts2img1x from '../../../assets/images/gifts2-img1x.png'
import gifts2img2x from '../../../assets/images/gifts2-img2x.png'
import { StyledButton } from '../../Button/Button.styled.js'
import {
	GiftsContent,
	GiftsText,
	GiftsTextContect,
	SectionGifts,
} from '../../main/gifts/Gifts.styled.js'

export const Gifts = () => {
	return (
		<SectionGifts>
			<h2
				style={{
					fontFamily: 'Monotype Corsiva',
					fontSize: '64px',
					fontStyle: 'italic',
					fontWeight: '400',
					lineHeight: '70px',
					letterSpacing: '0em',
					textAlign: 'left',
					paddingBottom: '54px',
				}}
			>
				Подарунки
			</h2>
			<GiftsContent>
				<img
					srcSet={`${gifts1img1x} 1x, ${gifts1img2x} 2x`}
					src={gifts1img1x}
					alt='Опис зображення першого набору'
					style={{
						border: '3px solid rgba(96, 12, 38, 1)',
						borderTopLeftRadius: '120px',
						borderBottomLeftRadius: '120px',
					}}
				/>
				<GiftsTextContect>
					<h3
						style={{
							fontFamily: 'Monotype Corsiva',
							fontSize: '64px',
							fontStyle: 'italic',
							fontWeight: '400',
							lineHeight: '70px',
							letterSpacing: '0em',
							textAlign: 'center',
							paddingBottom: '35px',
						}}
					>
						Подарункові набори
					</h3>
					<GiftsText>
						Пропонуємо до вашої уваги подарункові набори,які ви можете обрати з
						переліку наявних,а також замовити особисто за власними побажаннями
						та на будь-який бюджет
					</GiftsText>
					<StyledButton
						md='true'
						style={{
							display: 'flex',
							margin: '0 auto',
							// marginTop: '20px',
							alignItems: 'center',
							justifyContent: 'center',

							fontFamily: 'Quicksand',
							fontSize: '32px',
							fontWeight: '300',
							lineHeight: '40px',
							letterSpacing: '0em',
							textAlign: 'left',
						}}
					>
						Замовити
					</StyledButton>
				</GiftsTextContect>
				<img
					srcSet={`${gifts2img1x} 1x, ${gifts2img2x} 2x`}
					src={gifts2img1x}
					alt='Опис зображення другого набору'
					style={{
						border: '3px solid rgba(96, 12, 38, 1)',
						borderTopRightRadius: '120px',
						borderBottomRightRadius: '120px',
					}}
				/>
			</GiftsContent>
		</SectionGifts>
	)
}
