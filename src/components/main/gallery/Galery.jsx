import React from 'react'
import gallery1img1x from '../../../assets/images/gallery/gallery1img1x.png'
import gallery1img2x from '../../../assets/images/gallery/gallery1img2x.png'
import gallery2img1x from '../../../assets/images/gallery/gallery2img1x.png'
import gallery2img2x from '../../../assets/images/gallery/gallery2img2x.png'
import gallery3img1x from '../../../assets/images/gallery/gallery3img1x.png'
import gallery3img2x from '../../../assets/images/gallery/gallery3img2x.png'
import gallery4img1x from '../../../assets/images/gallery/gallery4img1x.png'
import gallery4img2x from '../../../assets/images/gallery/gallery4img2x.png'

import {
	GalleryBlock,
	GalleryBlock1,
	GalleryBlock2,
	GallerySection,
} from './Gallery.styled.js'

export const Gallery = () => {
	return (
		<GallerySection>
			<h2
				style={{
					fontFamily: 'Monotype Corsiva',
					fontSize: '64px',
					fontStyle: 'italic',
					fontWeight: '400',
					lineHeight: '70px',
					letterSpacing: '0em',
					textAlign: 'left',
				}}
			>
				Галерея
			</h2>
			<a
				href=''
				style={{
					fontFamily: 'Montserrat',
					fontSize: '24px',
					fontWeight: '500',
					lineHeight: '29px',
					letterSpacing: '0em',
					// textAlign: 'right',
					color: 'rgba(0, 0, 0, 1)',
					display: 'block',
					marginLeft: 'auto', // Используем marginLeft вместо marginRight
					textAlign: 'right',
					marginBottom: '22px',
				}}
			>
				Переглянути усі
			</a>
			<GalleryBlock>
				<GalleryBlock1>
					<img
						srcSet={`${gallery1img1x} 1x, ${gallery1img2x} 2x`}
						src={gallery1img1x}
						alt='Опис зображення для всіх версій'
						style={{}}
					/>
				</GalleryBlock1>
				<GalleryBlock2>
					<img
						srcSet={`${gallery2img1x} 1x, ${gallery2img2x} 2x`}
						src={gallery2img1x}
						alt='Опис зображення для всіх версій'
						style={{
							paddingRight: '20px',
							paddingBottom: '24px',
						}}
					/>
					<img
						srcSet={`${gallery3img1x} 1x, ${gallery3img2x} 2x`}
						src={gallery3img1x}
						alt='Опис зображення для всіх версій'
						style={{ paddingBottom: '24px' }}
					/>
					<img
						srcSet={`${gallery4img1x} 1x, ${gallery4img2x} 2x`}
						src={gallery4img1x}
						alt='Опис зображення для всіх версій'
						style={{}}
					/>
				</GalleryBlock2>
			</GalleryBlock>
		</GallerySection>
	)
}
