import { StaticImageData } from 'next/image'
import img1 from '/public/com/001.jpg'
import img2 from '/public/com/002.jpg'
import img3 from '/public/com/003.jpg'
import img4 from '/public/com/004.jpg'
import img5 from '/public/com/005.jpg'
import img6 from '/public/com/006.jpg'
import img7 from '/public/com/007.jpg'
import img8 from '/public/com/008.jpg'
import img9 from '/public/com/009.jpg'
import img10 from '/public/com/010.jpg'
import img11 from '/public/com/011.jpg'
import img12 from '/public/com/012.jpg'
import img13 from '/public/com/013.jpg'
import img14 from '/public/com/014.jpg'
import img15 from '/public/com/015.jpg'
import img16 from '/public/com/016.jpg'

// export const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16]

const imgs = [
 [
  {
   id: '1',
   src: img1,
   alt: 'commercial window graphics',
  },
  {
   id: '2',
   src: img2,
   alt: 'commercial window graphics',
  },
 ],
 [
  {
   id: '3',
   src: img3,
   alt: 'commercial window graphics',
  },
  {
   id: '4',
   src: img4,
   alt: 'commercial window graphics',
  },
 ],

 [
  {
   id: '5',
   src: img5,
   alt: 'commercial window graphics',
  },
  {
   id: '6',
   src: img6,
   alt: 'commercial window graphics',
  },
 ],
 [
  {
   id: '7',
   src: img7,
   alt: 'commercial window graphics',
  },
  {
   id: '8',
   src: img8,
   alt: 'commercial window graphics',
  },
 ],

 [
  {
   id: '9',
   src: img9,
   alt: 'commercial window graphics',
  },
  {
   id: '10',
   src: img10,
   alt: 'commercial window graphics',
  },
 ],
 [
  {
   id: '11',
   src: img11,
   alt: 'commercial window graphics',
  },
  {
   id: '12',
   src: img12,
   alt: 'commercial window graphics',
  },
 ],
 [
  {
   id: '13',
   src: img13,
   alt: 'commercial window graphics',
  },
  {
   id: '14',
   src: img14,
   alt: 'commercial window graphics',
  },
 ],
 [
  {
   id: '15',
   src: img15,
   alt: 'commercial window graphics',
  },
  {
   id: '16',
   src: img16,
   alt: 'commercial window graphics',
  },
 ],
]

export type ComImgData = {
 id: string
 src: StaticImageData
 alt: string
}

export default imgs
