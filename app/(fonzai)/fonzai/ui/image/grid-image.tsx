import React, { Suspense } from 'react'
import { cn } from '@/utils/cn'
import { useBreakPoints } from '@/app/hooks/useBreakPoints'
import { CldImage } from 'next-cloudinary'
import { useAtom } from 'jotai'
import { selectedImageAtom, generatedAtom } from '@/app/providers/fonz-atoms'
import { CldImageType } from '@/app/(fonzai)/types/image-types'

interface GridImageProps {
    isGrid: boolean
    img: {
        id: number
        label: string
        image: CldImageType
    }
    index: number
}

function GridImage({ img, isGrid, index }: GridImageProps) {
    const { isMobile, isTablet, isDesktop } = useBreakPoints()
    const [selectedImage, setSelectedImage] = useAtom(selectedImageAtom)
    const [generated, setGenerated] = useAtom(generatedAtom)
    const handleClick = () => {
        const imageData = {
            index: index + 1,
            img: img,
            generated: generated,
        }
        setSelectedImage(imageData)
    }

    return (
        <div
            className={cn(
                'cursor-pointer relative',
                isGrid && (isMobile ? 'h-[var(--mb-grid-img-h)]' : 'h-[var(--grid-img-height)]'),
                !isGrid && (isMobile ? 'h-mb-stack' : 'h-stack')
            )}>
            <Suspense fallback={<div className='w-full h-full'>Loading...</div>}>
                <CldImage
                    onClick={handleClick}
                    src={img.image.publicID}
                    className='object-contain  hover:border hover:border-accent rounded-md'
                    fill
                    crop={{
                        type: 'crop',
                        width: 0.5,
                        height: 0.5,
                        gravity: img.image.gravity,
                    }}
                    alt={img.label}
                />
            </Suspense>
        </div>
    )
}

export default GridImage
