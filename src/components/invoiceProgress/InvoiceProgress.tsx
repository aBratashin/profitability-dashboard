import React, { FC } from 'react'
import { InvoiceProgressProps } from '@/components/invoiceProgress/InvoiceProgress.props'
import Image from 'next/image'
import classNames from 'classnames'

const getImg = (type: InvoiceProgressProps['type']): string => {
	if (type === 'Закрыт' || type === 'Транзитный') {
		return './img/check-green.svg'
	}
	if (type === 'Отправлен') {
		return './img/full-blue.svg'
	}
	if (type === 'Подготовлен') {
		return './img/half-yellow.svg'
	}
	if (type === 'Выставить') {
		return './img/half-red.svg'
	}
	return './img/full-gray.svg'
}

const InvoiceProgress: FC<InvoiceProgressProps> = ({ sum, type }) => {
	const imgSrc = getImg(type)

	return (
		<div className='flex items-center'>
			<Image
				src={imgSrc}
				width={16}
				height={16}
				alt='stage-progress'
				className='mr-1.5 w-auto h-auto'
			/>
			<span
				className={classNames(['text-gray opacity-35 text-md font-medium'], {
					['text-green !opacity-100']:
						type === 'Закрыт' || type === 'Транзитный'
				})}
			>
				{new Intl.NumberFormat('ru-RU', {
					style: 'currency',
					currency: 'RUB',
					minimumFractionDigits: 0
				}).format(sum)}
			</span>
			{type === 'Транзитный' && (
				<span className='text-yellow ml-2'>транзит</span>
			)}
		</div>
	)
}

export default InvoiceProgress
